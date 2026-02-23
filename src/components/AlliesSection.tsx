import { motion } from "framer-motion";
import youngAiLeadersLogo from "@/assets/logos/young-ai-leaders.png";
import svchLogo from "@/assets/logos/svch.png";
import uadecLogo from "@/assets/logos/uadec.png";
import alexandriaLogo from "@/assets/logos/alexandria.jpg";
import cletecLogo from "@/assets/logos/cletec.png";
import scienkoLogo from "@/assets/logos/scienko.png";
import syncLogo from "@/assets/logos/sync.png";
import freepikLogo from "@/assets/logos/freepik.png";
import kidgineerLogo from "@/assets/logos/kidgineers.avif";
import canvaEduLogo from "@/assets/logos/canva-education.png";
import coschoolLogo from "@/assets/logos/coschool.png";

const organizers = [
  { name: "Young AI Leaders Community · Mexico City Hub", logo: youngAiLeadersLogo },
];

const allies = [
  { name: "Silicon Valley Certification Hub", logo: svchLogo },
  { name: "alexandr.ia", logo: alexandriaLogo },
  { name: "Consejo Latinoamericano de Ética en Tecnología A.C.", logo: cletecLogo },
  { name: "UAdeC", logo: uadecLogo },
  { name: "Scienko", logo: scienkoLogo },
  { name: "Sync.", logo: syncLogo },
  { name: "Freepik", logo: freepikLogo },
  { name: "KidGineers", logo: kidgineerLogo },
  { name: "Canva for Education", logo: canvaEduLogo },
  { name: "CoSchool", logo: coschoolLogo },
];

const LogoCard = ({ name, logo }: { name: string; logo: string | null }) => (
  <div className="flex items-center justify-center p-8 bg-card rounded-xl border border-border hover:border-secondary transition-colors h-40">
    {logo ? (
      <img
        src={logo}
        alt={name}
        className="max-h-28 max-w-full object-contain"
      />
    ) : (
      <span className="text-sm font-display font-semibold text-muted-foreground text-center leading-snug">
        {name}
      </span>
    )}
  </div>
);

const AlliesSection = () => {
  return (
    <section id="aliados" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Organizers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Organizadores</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center gap-8 mb-20 flex-wrap"
        >
          {organizers.map((org) => (
            <div key={org.name} className="flex items-center justify-center p-8 bg-card rounded-xl border border-border h-44 w-80">
              {org.logo && <img src={org.logo} alt={org.name} className="max-h-32 max-w-full object-contain" />}
            </div>
          ))}
        </motion.div>

        {/* Allies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Aliados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organizaciones que hacen posible este evento.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allies.map((ally, i) => (
            <motion.div
              key={ally.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <LogoCard name={ally.name} logo={ally.logo} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlliesSection;
