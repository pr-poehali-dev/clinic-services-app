import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "services", label: "Услуги" },
  { id: "prices", label: "Цены" },
  { id: "portfolio", label: "Портфолио" },
  { id: "reviews", label: "Отзывы" },
  { id: "about", label: "О нас" },
  { id: "booking", label: "Записаться" },
];

interface NavbarProps {
  scrollTo: (id: string) => void;
}

export default function Navbar({ scrollTo }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleScroll("hero")}
          className="font-display text-2xl font-light tracking-[0.2em] cursor-pointer select-none"
        >
          ЧИСТО
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-sm tracking-wider transition-all duration-200 ${
                item.id === "booking"
                  ? "bg-foreground text-background px-5 py-2 hover:opacity-80"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://t.me/PEDESTALL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            title="Telegram"
          >
            <Icon name="Send" size={18} />
          </a>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-left text-sm tracking-wider text-foreground py-1"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}