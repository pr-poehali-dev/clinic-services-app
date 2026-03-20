import Icon from "@/components/ui/icon";

const ABOUT_STATS = [
  { num: "5", label: "лет на рынке" },
  { num: "2 400+", label: "выполненных уборок" },
  { num: "98%", label: "довольных клиентов" },
  { num: "45", label: "профессиональных мастеров" },
];

const NAV_ITEMS = [
  { id: "services", label: "Услуги" },
  { id: "prices", label: "Цены" },
  { id: "portfolio", label: "Портфолио" },
  { id: "reviews", label: "Отзывы" },
  { id: "about", label: "О нас" },
  { id: "booking", label: "Записаться" },
];

interface FooterSectionProps {
  scrollTo: (id: string) => void;
}

export default function FooterSection({ scrollTo }: FooterSectionProps) {
  return (
    <>
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
              <div className="font-display text-2xl font-light">+7 (906) 914-30-31</div>
              <div className="text-xs text-muted-foreground mt-2">Ежедневно с 8:00 до 22:00</div>
            </div>
            <div className="bg-background p-8">
              <div className="w-10 h-10 flex items-center justify-center bg-secondary mb-6">
                <Icon name="Mail" size={18} />
              </div>
              <div className="text-xs tracking-widest text-muted-foreground uppercase mb-3">Email</div>
              <div className="font-display text-2xl font-light">F-kasumov@bk.ru</div>
              <div className="text-xs text-muted-foreground mt-2">Ответим в течение часа</div>
            </div>
            <div className="bg-background p-8">
              <div className="w-10 h-10 flex items-center justify-center bg-secondary mb-6">
                <Icon name="MapPin" size={18} />
              </div>
              <div className="text-xs tracking-widest text-muted-foreground uppercase mb-3">Адрес</div>
              <div className="font-display text-2xl font-light">Красноярск</div>
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
            {NAV_ITEMS.map((item) => (
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
    </>
  );
}