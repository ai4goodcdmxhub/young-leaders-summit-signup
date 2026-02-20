import { motion } from "framer-motion";
import { User } from "lucide-react";

const speakers = [
  {
    name: "Adriana Caballero",
    talk: "Cómo diseñar clases que inspiren y conecten en tiempos de IA",
    day: "Día 1 · 17 Mar",
  },
  {
    name: "José Navalpotro",
    talk: "Escuela, docentes e IAG: Una nueva educación",
    day: "Día 1 · 17 Mar",
  },
  {
    name: "José Lizarraga",
    talk: "",
    day: "Día 2 · 18 Mar",
  },
  {
    name: "Diego A. Balderas Espinosa",
    talk: "Arte y matemáticas: una fusión neurodidáctica",
    day: "Día 2 · 18 Mar",
  },
  {
    name: "Ruby Aceneth Galván Gámez",
    talk: "Arte y matemáticas: una fusión neurodidáctica",
    day: "Día 2 · 18 Mar",
  },
  {
    name: "Daniel Gómez",
    talk: "",
    day: "Día 3 · 19 Mar",
  },
  {
    name: "Diana Rubio",
    talk: "IA con Propósito: La Nueva Generación STEM",
    day: "Día 3 · 19 Mar",
  },
];

const SpeakersSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-3">
            Ponentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertos en educación, inteligencia artificial y tecnología educativa.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col items-center text-center bg-card rounded-xl border border-border p-6 hover:border-secondary transition-colors"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-secondary/20 border-2 border-secondary/40 flex items-center justify-center mb-4">
                <User className="w-9 h-9 text-primary/50" />
              </div>
              <p className="font-display font-semibold text-primary text-sm leading-snug mb-1">
                {speaker.name}
              </p>
              <p className="text-xs text-secondary font-medium mb-2">{speaker.day}</p>
              {speaker.talk && (
                <p className="text-xs text-muted-foreground italic leading-snug">
                  "{speaker.talk}"
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
