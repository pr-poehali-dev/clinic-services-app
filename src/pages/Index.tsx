import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/70e4595c-2493-4c8e-947e-d2ed1ec49759/files/a4795553-3ef2-4b8c-994b-79d811f55586.jpg";

const SERVICES = [
  { icon: "Home", title: "Квартира", desc: "Комплексная уборка жилых помещений любой площади", price: "от 2 500 ₽" },
  { icon: "Building2", title: "Офис", desc: "Поддерживающая и генеральная уборка офисных пространств", price: "от 4 000 ₽" },
  { icon: "Sparkles", title: "Генеральная", desc: "Глубокая уборка после ремонта или длительного отсутствия", price: "от 6 000 ₽" },
  { icon: "Wind", title: "После ремонта", desc: "Удаление строительной пыли, пятен и загрязнений", price: "от 8 000 ₽" },
  { icon: "Sofa", title: "Химчистка мебели", desc: "Профессиональная чистка диванов, кресел, ковров", price: "от 1 500 ₽" },
  { icon: "KeyRound", title: "Перед сдачей", desc: "Подготовка квартиры для новых жильцов или продажи", price: "от 3 500 ₽" },
];

const PRICES = [
  { name: "Студия / 1-комн.", size: "до 45 м²", regular: "2 500 ₽", general: "4 500 ₽", after_repair: "7 000 ₽" },
  { name: "2-комнатная", size: "45–70 м²", regular: "3 500 ₽", general: "6 500 ₽", after_repair: "10 000 ₽" },
  { name: "3-комнатная", size: "70–100 м²", regular: "4 500 ₽", general: "8 500 ₽", after_repair: "13 000 ₽" },
  { name: "Большая квартира", size: "100+ м²", regular: "от 5 500 ₽", general: "от 11 000 ₽", after_repair: "от 16 000 ₽" },
];

const PORTFOLIO = [
  { room: "Кухня", label: "Генеральная уборка" },
  { room: "Ванная", label: "Глубокая чистка" },
  { room: "Гостиная", label: "После ремонта" },
];

const REVIEWS = [
  { name: "Анна К.", date: "12 марта 2026", text: "Заказала генеральную уборку после ремонта. Результат превзошёл все ожидания — всё сверкает. Буду обращаться регулярно.", stars: 5 },
  { name: "Михаил Т.", date: "3 марта 2026", text: "Очень порадовала пунктуальность и аккуратность сотрудников. Всё сделали быстро и качественно, без лишних вопросов.", stars: 5 },
  { name: "Елена В.", date: "18 февраля 2026", text: "Пользуюсь услугами каждые две недели. Всегда отличный результат, вежливые мастера и удобная запись онлайн.", stars: 5 },
  { name: "Дмитрий Р.", date: "5 февраля 2026", text: "Заказывал уборку офиса 200 м². Справились за 4 часа, всё идеально чисто. Заключили договор на ежемесячное обслуживание.", stars: 5 },
];

const CLEANING_TYPES = ["Стандартная", "Генеральная", "После ремонта", "Офисная", "Химчистка"];
const TIME_SLOTS = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const ABOUT_STATS = [
  { num: "5", label: "лет на рынке" },
  { num: "2 400+", label: "выполненных уборок" },
  { num: "98%", label: "довольных клиентов" },
  { num: "45", label: "профессиональных мастеров" },
];

const BEFORE_AFTER_COLORS = [
  { before: "#c4b9a8", after: "#f5f2ee" },
  { before: "#b0a898", after: "#f8f6f3" },
  { before: "#bdb3a3", after: "#f5f1ec" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booking, setBooking] = useState({ type: "", date: "", time: "", name: "", phone: "", address: "" });
  const [bookingDone, setBookingDone] = useState(false);

  const navItems = [
    { id: "services", label: "Услуги" },
    { id: "prices", label: "Цены" },
    { id: "portfolio", label: "Портфолио" },
    { id: "reviews", label: "Отзывы" },
    { id: "about", label: "О нас" },
    { id: "booking", label: "Записаться" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingDone(true);
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="font-display text-2xl font-light tracking-[0.2em] cursor-pointer select-none"
          >
            ЧИСТО
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm tracking-wider transition-all duration-200 ${
                  item.id === "booking"
                    ? "bg-foreground text-background px-5 py-2 hover:opacity-80"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-sm tracking-wider text-foreground py-1"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen flex flex-col md:flex-row pt-16">
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 animate-fade-in">
          <p className="text-xs tracking-[0.4em] text-muted-foreground mb-6 uppercase">Профессиональный клининг</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-8 text-foreground">
            Чистота<br />
            <span className="italic">без усилий</span>
          </h1>
          <p className="text-muted-foreground max-w-md leading-relaxed mb-10 text-base">
            Доверьте уборку профессионалам. Мы создаём безупречную чистоту в вашем доме или офисе — быстро, аккуратно и надёжно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("booking")}
              className="bg-foreground text-background px-8 py-4 text-sm tracking-widest hover:opacity-80 transition-opacity uppercase"
            >
              Записаться
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="border border-border text-foreground px-8 py-4 text-sm tracking-widest hover:bg-secondary transition-colors uppercase"
            >
              Наши услуги
            </button>
          </div>

          <div className="flex gap-12 mt-16">
            {ABOUT_STATS.slice(0, 3).map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-light">{s.num}</div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative min-h-[50vh] md:min-h-screen overflow-hidden animate-fade-in-slow">
          <img
            src={HERO_IMAGE}
            alt="Чистый интерьер"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/10" />
          <div className="absolute bottom-8 right-8 bg-background px-6 py-4 text-sm">
            <div className="text-xs text-muted-foreground mb-1 tracking-widest">УБОРКА КВАРТИР</div>
            <div className="font-display text-xl font-light">от 2 500 ₽</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] text-muted-foreground mb-4 uppercase">Что мы делаем</p>
            <h2 className="font-display text-5xl md:text-6xl font-light">Услуги</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-background p-8 hover:bg-secondary transition-colors group cursor-default">
                <div className="w-10 h-10 flex items-center justify-center mb-6 bg-secondary group-hover:bg-background transition-colors">
                  <Icon name={s.icon} fallback="Sparkles" size={18} />
                </div>
                <h3 className="font-display text-2xl font-light mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="text-sm font-medium tracking-wide">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 px-6 md:px-16 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] text-muted-foreground mb-4 uppercase">Стоимость</p>
            <h2 className="font-display text-5xl md:text-6xl font-light">Цены</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left pb-4 text-xs tracking-widest text-muted-foreground uppercase font-normal pr-8">Тип жилья</th>
                  <th className="text-left pb-4 text-xs tracking-widest text-muted-foreground uppercase font-normal pr-8">Площадь</th>
                  <th className="text-left pb-4 text-xs tracking-widest text-muted-foreground uppercase font-normal pr-8">Стандартная</th>
                  <th className="text-left pb-4 text-xs tracking-widets text-muted-foreground uppercase font-normal pr-8">Генеральная</th>
                  <th className="text-left pb-4 text-xs tracking-widest text-muted-foreground uppercase font-normal">После ремонта</th>
                </tr>
              </thead>
              <tbody>
                {PRICES.map((p, i) => (
                  <tr key={i} className="border-b border-border hover:bg-background transition-colors">
                    <td className="py-5 font-display text-lg font-light pr-8">{p.name}</td>
                    <td className="py-5 text-muted-foreground text-sm pr-8">{p.size}</td>
                    <td className="py-5 text-sm font-medium pr-8">{p.regular}</td>
                    <td className="py-5 text-sm font-medium pr-8">{p.general}</td>
                    <td className="py-5 text-sm font-medium">{p.after_repair}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-6 tracking-wide">
            * Цены указаны при стандартной загрязнённости. Итоговая стоимость рассчитывается после осмотра.
          </p>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] text-muted-foreground mb-4 uppercase">Наша работа</p>
            <h2 className="font-display text-5xl md:text-6xl font-light">Портфолио</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {PORTFOLIO.map((p, i) => (
              <div key={i} className="bg-background overflow-hidden group">
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <div
                      className="flex-1 flex items-end p-4"
                      style={{ backgroundColor: BEFORE_AFTER_COLORS[i].before }}
                    >
                      <span className="text-xs tracking-widest text-white/90 uppercase bg-black/20 px-2 py-1">До</span>
                    </div>
                    <div className="w-px bg-white/60 relative z-10" />
                    <div
                      className="flex-1 flex items-end p-4"
                      style={{ backgroundColor: BEFORE_AFTER_COLORS[i].after }}
                    >
                      <span className="text-xs tracking-widest text-foreground/50 uppercase bg-black/5 px-2 py-1">После</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-8 h-8 bg-white flex items-center justify-center shadow-sm z-20">
                      <Icon name="ArrowLeftRight" size={14} />
                    </div>
                  </div>
                </div>
                <div className="p-5 border-t border-border">
                  <div className="font-display text-lg font-light">{p.room}</div>
                  <div className="text-xs text-muted-foreground mt-1 tracking-wide">{p.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 md:px-16 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] text-muted-foreground mb-4 uppercase">Говорят клиенты</p>
            <h2 className="font-display text-5xl md:text-6xl font-light">Отзывы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-background p-8">
                <div className="flex gap-0.5 mb-6">
                  {[...Array(r.stars)].map((_, j) => (
                    <span key={j} className="text-foreground text-sm">★</span>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-8 font-light">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center justify-between border-t border-border pt-5">
                  <div className="font-display text-lg">{r.name}</div>
                  <div className="text-xs text-muted-foreground tracking-wide">{r.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
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

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-16 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.4em] text-background/50 mb-4 uppercase">Кто мы</p>
              <h2 className="font-display text-5xl md:text-6xl font-light mb-8">О нас</h2>
              <p className="text-background/70 leading-relaxed mb-6">
                ЧИСТО — команда профессиональных клинеров с опытом более 5 лет. Мы используем только сертифицированную химию, которая безопасна для детей и домашних животных.
              </p>
              <p className="text-background/70 leading-relaxed mb-10">
                Каждый специалист проходит строгий отбор, обучение и регулярную аттестацию. Мы несём материальную ответственность за сохранность вашего имущества.
              </p>
              <button
                onClick={() => scrollTo("booking")}
                className="border border-background/30 text-background px-8 py-4 text-sm tracking-widest hover:bg-background hover:text-foreground transition-colors uppercase"
              >
                Записаться сейчас
              </button>
            </div>
            <div className="grid grid-cols-2 gap-px bg-background/10">
              {ABOUT_STATS.map((s, i) => (
                <div key={i} className="p-8">
                  <div className="font-display text-5xl font-light mb-2">{s.num}</div>
                  <div className="text-xs text-background/50 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 md:px-16 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] text-muted-foreground mb-4 uppercase">Свяжитесь с нами</p>
            <h2 className="font-display text-5xl md:text-6xl font-light">Контакты</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            <div className="bg-background p-8">
              <div className="w-10 h-10 flex items-center justify-center bg-secondary mb-6">
                <Icon name="Phone" size={18} />
              </div>
              <div className="text-xs tracking-widest text-muted-foreground uppercase mb-3">Телефон</div>
              <div className="font-display text-2xl font-light">+7 (999) 000-00-00</div>
              <div className="text-xs text-muted-foreground mt-2">Ежедневно с 8:00 до 22:00</div>
            </div>
            <div className="bg-background p-8">
              <div className="w-10 h-10 flex items-center justify-center bg-secondary mb-6">
                <Icon name="Mail" size={18} />
              </div>
              <div className="text-xs tracking-widest text-muted-foreground uppercase mb-3">Email</div>
              <div className="font-display text-2xl font-light">hello@chisto.ru</div>
              <div className="text-xs text-muted-foreground mt-2">Ответим в течение часа</div>
            </div>
            <div className="bg-background p-8">
              <div className="w-10 h-10 flex items-center justify-center bg-secondary mb-6">
                <Icon name="MapPin" size={18} />
              </div>
              <div className="text-xs tracking-widest text-muted-foreground uppercase mb-3">Адрес</div>
              <div className="font-display text-2xl font-light">Москва</div>
              <div className="text-xs text-muted-foreground mt-2">Работаем по всему городу</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 md:px-16 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl font-light tracking-[0.2em]">ЧИСТО</div>
          <div className="text-xs text-muted-foreground tracking-wide">© 2026 ЧИСТО. Все права защищены.</div>
          <div className="flex flex-wrap gap-6 justify-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}