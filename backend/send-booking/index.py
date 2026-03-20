import json
import os
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    """Отправка заявки на уборку в Telegram"""

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

    token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']

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

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }
