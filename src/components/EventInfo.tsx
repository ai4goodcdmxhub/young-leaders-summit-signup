import { motion } from "framer-motion";
import { Lightbulb, Users, Brain, Rocket } from "lucide-react";
import aioWave from "@/assets/robots/aio-wave.png";

const features = [
  {
    icon: Brain,
    title: "IA en la Educación",
    description: "Descubre cómo la inteligencia artificial está transformando los métodos de enseñanza y aprendizaje.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Conecta con líderes jóvenes, educadores y expertos en tecnología educativa.",
  },
  {
    icon: Lightbulb,
    title: "Talleres Prácticos",
    description: "Participa en sesiones interactivas con herramientas de IA aplicadas al aula.",
  },
  {
    icon: Rocket,
    title: "Futuro Educativo",
    description: "Explora las tendencias que definirán la educación en los próximos años.",
  },
];

const EventInfo = () => {
  return (
    <section className="relative py-24 bg-card overflow-hidden">
      <motion.img
        src={aioWave}
        alt=""
        aria-hidden
        className="absolute top-10 right-4 w-24 md:w-32 opacity-40 pointer-events-none hidden md:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
            ¿Qué te espera?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            4 días de aprendizaje, inspiración y conexiones que marcarán tu camino en la educación del futuro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background rounded-xl p-8 border border-border hover:border-secondary transition-colors group"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary/20 flex items-center justify-center mb-5 group-hover:bg-secondary/40 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
