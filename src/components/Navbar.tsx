import { motion } from "framer-motion";
import youngAiLeadersLogo from "@/assets/logos/young-ai-leaders.png";
import enadLogo from "@/assets/logos/enad.png";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <img
          src={youngAiLeadersLogo}
          alt="Young AI Leaders Community"
          className="h-10 w-auto object-contain"
        />
        <img
          src={enadLogo}
          alt="Estrategia Nacional de Alfabetización Digital"
          className="h-10 w-auto object-contain"
        />
      </div>
    </motion.header>
  );
};

export default Navbar;
