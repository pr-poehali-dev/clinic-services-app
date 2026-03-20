import json
import os
import urllib.request
import urllib.parse
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def send_telegram(message: str):
    token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')
    if not token or not chat_id:
        return
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    data = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': message,
        'parse_mode': 'HTML'
    }).encode()
    req = urllib.request.Request(url, data=data, method='POST')
    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read())
    if not result.get('ok'):
        raise Exception(f"Telegram error: {result}")


def send_email(subject: str, body: str):
    host = os.environ.get('SMTP_HOST', '')
    user = os.environ.get('SMTP_USER', '')
    password = os.environ.get('SMTP_PASSWORD', '')
    to = os.environ.get('SMTP_TO', '')
    if not all([host, user, password, to]):
        return
    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = user
    msg['To'] = to
    msg.attach(MIMEText(body, 'plain', 'utf-8'))
    with smtplib.SMTP_SSL(host, 465) as server:
        server.login(user, password)
        server.sendmail(user, to, msg.as_string())


def handler(event: dict, context) -> dict:
    """Отправка заявки на уборку в Telegram и на email"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))

    name = body.get('name', '')
    phone = body.get('phone', '')
    address = body.get('address', '')
    date = body.get('date', '')
    time = body.get('time', '')
    cleaning_types = body.get('cleaningTypes', [])
    cleaning_str = ', '.join(cleaning_types) if cleaning_types else 'не указан'

    message = (
        f"🧹 Новая заявка на уборку!\n\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"📍 Адрес: {address}\n"
        f"📅 Дата: {date}\n"
        f"🕐 Время: {time}\n"
        f"🔧 Тип уборки: {cleaning_str}"
    )

    email_body = (
        f"Новая заявка на уборку!\n\n"
        f"Имя: {name}\n"
        f"Телефон: {phone}\n"
        f"Адрес: {address}\n"
        f"Дата: {date}\n"
        f"Время: {time}\n"
        f"Тип уборки: {cleaning_str}"
    )

    send_telegram(message)
    send_email("Новая заявка на уборку", email_body)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }
