import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/70e4595c-2493-4c8e-947e-d2ed1ec49759/files/a4795553-3ef2-4b8c-994b-79d811f55586.jpg";

const SERVICES = [
  { icon: "Home", title: "Квартира", desc: "Комплексная уборка жилых помещений любой площади", price: "от 2 500 ₽" },
  { icon: "Building2", title: "Офис", desc: "Поддерживающая и генеральная уборка офисных пространств", price: "от 4 000 ₽" },
  { icon: "Sparkles", title: "Генеральная", desc: "Глубокая уборка после ремонта или длительного отсутствия", price: "от 6 000 ₽" },
  { icon: "Wind", title: "После ремонта", desc: "Удаление строительной пыли, пятен и загрязнений", price: "от 8 000 ₽" },
  { icon: "Sofa", title: "Химчистка мебели", desc: "Профессиональная чистка диванов, кресел, ковров", price: "от 1 500 ₽" },
  { icon: "KeyRound", title: "Перед сдачей", desc: "Подготовка квартиры для новых жильцов или продажи", price: "от 3 500 ₽" },
  { icon: "Users", title: "Грузчики", desc: "Поможем с переездом, подъёмом мебели и доставкой — быстро и аккуратно. Работаем с квартирами, офисами и дачами.", price: "от 400 ₽/час" },
];

const PRICES = [
  { name: "Студия / 1-комн.", size: "до 45 м²", regular: "2 500 ₽", general: "4 500 ₽", after_repair: "7 000 ₽" },
  { name: "2-комнатная", size: "45–70 м²", regular: "3 500 ₽", general: "6 500 ₽", after_repair: "10 000 ₽" },
  { name: "3-комнатная", size: "70–100 м²", regular: "4 500 ₽", general: "8 500 ₽", after_repair: "13 000 ₽" },
  { name: "Большая квартира", size: "100+ м²", regular: "от 5 500 ₽", general: "от 11 000 ₽", after_repair: "от 16 000 ₽" },
];

const PORTFOLIO = [
  { room: "Кухня", label: "Генеральная уборка", img: "https://cdn.poehali.dev/projects/70e4595c-2493-4c8e-947e-d2ed1ec49759/files/9dee63f0-7e2b-48c4-9983-52f117ee27d2.jpg" },
  { room: "Ванная", label: "Глубокая чистка", img: "https://cdn.poehali.dev/projects/70e4595c-2493-4c8e-947e-d2ed1ec49759/files/c85a54fb-56d7-490c-9b6e-ccab6c48402c.jpg" },
  { room: "Гостиная", label: "После ремонта", img: "https://cdn.poehali.dev/projects/70e4595c-2493-4c8e-947e-d2ed1ec49759/files/71e19886-12c7-4674-b057-f20d00fd2943.jpg" },
];

const REVIEWS = [
  { name: "Анна К.", date: "12 марта 2026", text: "Заказала генеральную уборку после ремонта. Результат превзошёл все ожидания — всё сверкает. Буду обращаться регулярно.", stars: 5 },
  { name: "Михаил Т.", date: "3 марта 2026", text: "Очень порадовала пунктуальность и аккуратность сотрудников. Всё сделали быстро и качественно, без лишних вопросов.", stars: 5 },
  { name: "Елена В.", date: "18 февраля 2026", text: "Пользуюсь услугами каждые две недели. Всегда отличный результат, вежливые мастера и удобная запись онлайн.", stars: 5 },
  { name: "Дмитрий Р.", date: "5 февраля 2026", text: "Заказывал уборку офиса 200 м². Справились за 4 часа, всё идеально чисто. Заключили договор на ежемесячное обслуживание.", stars: 5 },
];

const ABOUT_STATS = [
  { num: "5", label: "лет на рынке" },
  { num: "2 400+", label: "выполненных уборок" },
  { num: "98%", label: "довольных клиентов" },
];

const BEFORE_AFTER_COLORS = [
  { before: "#c4b9a8", after: "#f5f2ee" },
  { before: "#b0a898", after: "#f8f6f3" },
  { before: "#bdb3a3", after: "#f5f1ec" },
];

interface SectionsProps {
  scrollTo: (id: string) => void;
}

export function HeroSection({ scrollTo }: SectionsProps) {
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row pt-16">
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 animate-fade-in">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-8 text-foreground">
          Быстро.<br />
          <span className="italic">Удобно.</span><br />
          Качественно.
        </h1>
        <p className="text-muted-foreground max-w-md leading-relaxed mb-10 text-base">
          Доверьте уборку профессионалам. Мы создаём безупречную чистоту в вашем доме или офисе — быстро, аккуратно и надёжно. А ещё поможем с переездом: наши грузчики аккуратно перевезут мебель и вещи в любую точку города.
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
          {ABOUT_STATS.map((s) => (
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
  );
}

export function ServicesSection() {
  return (
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
  );
}

const MOVERS_INCLUDED = [
  { icon: "Armchair", title: "Разборка и сборка мебели", desc: "Аккуратно разберём и соберём любую мебель на новом месте" },
  { icon: "Package", title: "Упаковка вещей", desc: "Упакуем хрупкие предметы и бытовую технику" },
  { icon: "ArrowUpDown", title: "Подъём и спуск на любой этаж", desc: "Работаем с любой высотой, в том числе без лифта" },
  { icon: "Trash2", title: "Вынос мусора", desc: "Уберём упаковочный материал и ненужные вещи после переезда" },
];

export function MoversSection({ scrollTo }: SectionsProps) {
  return (
    <section id="movers" className="py-24 px-6 md:px-16 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-xs tracking-[0.4em] text-background/50 mb-4 uppercase">Услуга</p>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-6">Грузчики</h2>
            <p className="text-background/70 leading-relaxed mb-8">
              Поможем с переездом, подъёмом мебели и доставкой — быстро и аккуратно. Работаем с квартирами, офисами и дачами. Команда опытных грузчиков справится с любым объёмом.
            </p>
            <div className="flex items-end gap-3 mb-8">
              <span className="font-display text-5xl font-light">от 400 ₽</span>
              <span className="text-background/50 mb-2">/час</span>
            </div>
            <button
              onClick={() => scrollTo("booking")}
              className="border border-background/30 text-background px-8 py-4 text-sm tracking-widest hover:bg-background hover:text-foreground transition-colors uppercase"
            >
              Заказать грузчиков
            </button>
          </div>
          <div className="grid grid-cols-1 gap-px bg-background/10">
            {MOVERS_INCLUDED.map((item, i) => (
              <div key={i} className="p-6 flex gap-5 items-start">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-background/10">
                  <Icon name={item.icon} fallback="Check" size={18} />
                </div>
                <div>
                  <div className="font-display text-lg font-light mb-1">{item.title}</div>
                  <div className="text-background/50 text-sm leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricesSection() {
  return (
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
  );
}

export function PortfolioSection() {
  return (
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
                <img
                  src={p.img}
                  alt={p.room}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />
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
  );
}

export function ReviewsSection() {
  return (
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
  );
}