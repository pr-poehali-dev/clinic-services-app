import { useState } from "react";
import Icon from "@/components/ui/icon";

const CLEANING_TYPES = ["Стандартная", "Генеральная", "После ремонта", "Офисная", "Химчистка"];
const TIME_SLOTS = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

export default function BookingSection() {
  const [booking, setBooking] = useState({ type: "", date: "", time: "", name: "", phone: "", address: "" });
  const [bookingDone, setBookingDone] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingDone(true);
  };

  return (
    <section id="booking" className="py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-[0.4em] text-muted-foreground mb-4 uppercase">Онлайн-запись</p>
          <h2 className="font-display text-5xl md:text-6xl font-light">Забронировать</h2>
        </div>

        {bookingDone ? (
          <div className="border border-border p-16 text-center">
            <div className="w-16 h-16 bg-secondary flex items-center justify-center mx-auto mb-8">
              <Icon name="Check" size={28} />
            </div>
            <h3 className="font-display text-3xl font-light mb-4">Заявка принята</h3>
            <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
              Мы свяжемся с вами в течение 30 минут для подтверждения записи.
            </p>
            <button
              onClick={() => setBookingDone(false)}
              className="mt-8 text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide underline underline-offset-4"
            >
              Оставить ещё заявку
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
              <div className="bg-background p-8 md:col-span-3">
                <label className="block text-xs tracking-widest text-muted-foreground uppercase mb-4">Тип уборки</label>
                <div className="flex flex-wrap gap-3">
                  {CLEANING_TYPES.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setBooking({ ...booking, type: t })}
                      className={`px-5 py-2.5 text-sm tracking-wide transition-colors border ${
                        booking.type === t
                          ? "bg-foreground text-background border-foreground"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-background p-8">
                <label className="block text-xs tracking-widest text-muted-foreground uppercase mb-4">Дата</label>
                <input
                  type="date"
                  value={booking.date}
                  onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-transparent border-b border-border pb-3 text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                  required
                />
              </div>

              <div className="bg-background p-8">
                <label className="block text-xs tracking-widest text-muted-foreground uppercase mb-4">Время</label>
                <div className="flex flex-wrap gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setBooking({ ...booking, time: t })}
                      className={`px-3 py-1.5 text-xs tracking-wide border transition-colors ${
                        booking.time === t
                          ? "bg-foreground text-background border-foreground"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-background p-8">
                <label className="block text-xs tracking-widest text-muted-foreground uppercase mb-4">Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={booking.name}
                  onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border pb-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  required
                />
              </div>

              <div className="bg-background p-8">
                <label className="block text-xs tracking-widest text-muted-foreground uppercase mb-4">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={booking.phone}
                  onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-border pb-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  required
                />
              </div>

              <div className="bg-background p-8">
                <label className="block text-xs tracking-widest text-muted-foreground uppercase mb-4">Адрес</label>
                <input
                  type="text"
                  placeholder="Улица, дом, квартира"
                  value={booking.address}
                  onChange={(e) => setBooking({ ...booking, address: e.target.value })}
                  className="w-full bg-transparent border-b border-border pb-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  required
                />
              </div>
            </div>

            <div className="p-8 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
              <button
                type="submit"
                className="bg-foreground text-background px-10 py-4 text-sm tracking-widest hover:opacity-80 transition-opacity uppercase"
              >
                Отправить заявку
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
