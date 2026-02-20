import { motion } from "framer-motion";
import youngAiLeadersLogo from "@/assets/logos/young-ai-leaders.png";
import enadLogo from "@/assets/logos/enad-transparent.png";

const navLinks = [
  { label: "Ponentes", href: "#ponentes" },
  { label: "Horario", href: "#horario" },
  { label: "Aliados", href: "#aliados" },
];

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-4">
        {/* Left: YAIL logo */}
        <img
          src={youngAiLeadersLogo}
          alt="Young AI Leaders Community Mexico City Hub"
          className="h-14 w-auto object-contain flex-shrink-0"
        />

        {/* Center: nav links */}
        <nav className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 rounded-lg text-sm font-display font-semibold text-primary hover:bg-secondary/20 hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: ENAD logo */}
        <img
          src={enadLogo}
          alt="Estrategia Nacional de Alfabetización Digital"
          className="h-14 w-auto object-contain flex-shrink-0"
        />
      </div>

      {/* Mobile nav */}
      <div className="sm:hidden flex justify-center gap-1 pb-2 px-6">
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="px-3 py-1.5 rounded-lg text-xs font-display font-semibold text-primary hover:bg-secondary/20 transition-colors"
          >
            {link.label}
          </button>
        ))}
      </div>
    </motion.header>
  );
};

export default Navbar;
