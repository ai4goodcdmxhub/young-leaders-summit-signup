import { motion } from "framer-motion";

const days = [
  {
    date: "17",
    label: "Lunes 17",
    blocks: [
      { time: "18:30 – 18:35", type: "intro", content: "Intro" },
      { time: "18:35 – 19:25", type: "talk", speaker: "Adriana Caballero", title: "Cómo diseñar clases que inspiren y conecten en tiempos de IA" },
      { time: "19:25 – 19:35", type: "sponsor", content: "Cletec" },
      { time: "19:35 – 20:25", type: "talk", speaker: "José Navalpotro", title: "Escuela, docentes e IAG: Una nueva educación" },
      { time: "20:25 – 20:30", type: "close", content: "Cierre" },
    ],
  },
  {
    date: "18",
    label: "Martes 18",
    blocks: [
      { time: "18:30 – 18:35", type: "intro", content: "Intro" },
      { time: "18:35 – 19:25", type: "talk", speaker: "José Lizarraga", title: "" },
      { time: "19:25 – 19:35", type: "sponsor", content: "Freepik" },
      { time: "19:35 – 20:25", type: "talk", speaker: "Diego Balderas & Ruby Acnez", title: "Arte y matemáticas: una fusión neurodidáctica" },
      { time: "20:25 – 20:30", type: "close", content: "Cierre" },
    ],
  },
  {
    date: "19",
    label: "Miércoles 19",
    blocks: [
      { time: "18:30 – 18:35", type: "intro", content: "Intro" },
      { time: "18:35 – 19:25", type: "talk", speaker: "Daniel Gómez", title: "Datos en Acción: Cultura de Datos para Niños" },
      { time: "19:25 – 19:35", type: "sponsor", content: "Kidgineers" },
      { time: "19:35 – 20:25", type: "talk", speaker: "Diana Rubio", title: "IA con Propósito: La Nueva Generación STEM" },
      { time: "20:25 – 20:30", type: "close", content: "Cierre" },
    ],
  },
  {
    date: "20",
    label: "Jueves 20",
    blocks: [
      { time: "18:30 – 18:35", type: "intro", content: "Intro" },
      { time: "18:35 – 19:25", type: "talk", speaker: "Yunen Castro", title: "Canva: un ecosistema digital para la educación" },
      { time: "19:25 – 19:35", type: "sponsor", content: "AlexandrIA" },
      { time: "19:35 – 20:25", type: "talk", speaker: "Henry May", title: "El currículum oculto del corazón: la próxima frontera en la transformación de la educación" },
      { time: "20:25 – 20:30", type: "close", content: "Cierre" },
    ],
  },
];

type BlockType = "intro" | "talk" | "sponsor" | "close";

const blockStyles: Record<BlockType, string> = {
  intro: "bg-secondary/20 border-secondary/40",
  talk: "bg-card border-border",
  sponsor: "bg-primary/5 border-primary/20",
  close: "bg-muted border-border",
};

const ScheduleSection = () => {
  return (
    <section id="horario" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-3">
            Agenda del Summit
          </h2>
          <p className="text-lg text-muted-foreground">
            17–20 de Marzo · 18:30 a 20:30 hrs · Hora CDMX
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {days.map((day, di) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: di * 0.1 }}
              className="flex flex-col"
            >
              <div className="bg-primary text-primary-foreground rounded-t-xl px-5 py-3 text-center">
                <p className="text-xs font-display font-semibold uppercase tracking-widest opacity-80">Marzo</p>
                <p className="text-4xl font-display font-bold leading-none">{day.date}</p>
              </div>

              <div className="flex flex-col gap-2 mt-2 flex-1">
                {day.blocks.map((block, bi) => (
                  <div key={bi} className={`rounded-lg border px-4 py-3 ${blockStyles[block.type as BlockType]}`}>
                    <p className="text-xs font-display font-semibold text-muted-foreground mb-1">{block.time}</p>
                    {"speaker" in block && block.speaker ? (
                      <>
                        <p className="font-display font-semibold text-primary text-sm leading-snug">{block.speaker}</p>
                        {block.title && (
                          <p className="text-xs text-muted-foreground mt-1 italic leading-snug">"{block.title}"</p>
                        )}
                      </>
                    ) : (
                      <p className="font-display font-semibold text-primary text-sm">
                        {"content" in block ? block.content : ""}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
