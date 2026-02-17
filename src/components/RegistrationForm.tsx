import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const registrationSchema = z.object({
  nombre: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  email: z.string().trim().email("Ingresa un correo válido").max(255),
  telefono: z.string().trim().min(7, "Ingresa un teléfono válido").max(20),
  institucion: z.string().trim().min(2, "Ingresa tu institución").max(200),
  rol: z.string().min(1, "Selecciona tu rol")
});

type FormData = z.infer<typeof registrationSchema>;

const RegistrationForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    institucion: "",
    rol: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = registrationSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitted(true);
    toast({
      title: "¡Registro exitoso! 🎉",
      description: "Te hemos registrado al Summit de Educación 2026. Revisa tu correo para más información."
    });
  };

  if (submitted) {
    return (
      <section id="registro" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-card rounded-2xl p-12 border border-border">

            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-display font-bold text-primary">¡Gracias por registrarte!</h2>
            <p className="mt-4 text-muted-foreground">
              Te enviaremos los detalles del evento a tu correo electrónico. ¡Nos vemos en el Summit!
            </p>
          </motion.div>
        </div>
      </section>);

  }

  return (
    <section id="registro" className="py-24 bg-background">
      <div className="<a\n  href=\"https://luma.com/event/evt-I70g6WnBivNiFhv\"\n  class=\"luma-checkout--button\"\n  data-luma-action=\"checkout\"\n  data-luma-event-id=\"evt-I70g6WnBivNiFhv\"\n>\n  Register for Event\n</a>\n\n<script id=\"luma-checkout\" src=\"https://embed.lu.ma/checkout-button.js\"></script>">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto">

          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Regístrate
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">
              Asegura tu lugar en el Summit de Educación 2026
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-sm space-y-5">

            {([
            { name: "nombre", label: "Nombre completo", type: "text", placeholder: "Tu nombre" },
            { name: "email", label: "Correo electrónico", type: "email", placeholder: "tu@correo.com" },
            { name: "telefono", label: "Teléfono", type: "tel", placeholder: "+52 ..." },
            { name: "institucion", label: "Institución / Organización", type: "text", placeholder: "Nombre de tu institución" }] as
            const).map((field) =>
            <div key={field.name}>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  {field.label}
                </label>
                <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow" />

                {errors[field.name] &&
              <p className="mt-1 text-sm text-destructive">{errors[field.name]}</p>
              }
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Rol
              </label>
              <select
                name="rol"
                value={form.rol}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow">

                <option value="">Selecciona tu rol</option>
                <option value="estudiante">Estudiante</option>
                <option value="docente">Docente</option>
                <option value="directivo">Directivo</option>
                <option value="emprendedor">Emprendedor</option>
                <option value="otro">Otro</option>
              </select>
              {errors.rol &&
              <p className="mt-1 text-sm text-destructive">{errors.rol}</p>
              }
            </div>

            <motion.button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-display font-semibold text-lg py-4 rounded-lg hover:bg-navy-light transition-colors shadow-md mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}>

              Confirmar Registro
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>);

};

export default RegistrationForm;