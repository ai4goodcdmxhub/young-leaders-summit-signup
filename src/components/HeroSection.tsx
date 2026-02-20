import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-light via-secondary/30 to-background" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg font-display font-semibold tracking-widest uppercase text-primary mb-2">
            Young AI Leaders Community · México City Hub
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary leading-tight">
            2026
            <br />
            <span className="text-secondary">Summit</span>
            <br />
            de Educación
          </h1>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-primary font-display text-xl font-medium">
            <span className="bg-card/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-border">
              📅 17–20 Marzo
            </span>
            <span className="bg-card/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-border">
              🕡 18:30 – 20:30 hrs
            </span>
          </div>

          <motion.div
            className="mt-10 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <a
              href="https://lu.ma/evt-I70g6WnBivNiFhv"
              className="luma-checkout--button inline-block bg-primary text-primary-foreground font-display font-semibold text-lg px-10 py-4 rounded-lg hover:bg-navy-light transition-colors shadow-lg"
              data-luma-action="checkout"
              data-luma-event-id="evt-I70g6WnBivNiFhv"
            >
              ¡Regístrate ahora!
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
