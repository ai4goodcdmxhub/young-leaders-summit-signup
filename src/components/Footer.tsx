import aioLying from "@/assets/robots/aio-lying.png";

const Footer = () => (
  <footer className="relative py-10 bg-primary text-primary-foreground overflow-hidden">
    <img
      src={aioLying}
      alt=""
      aria-hidden
      className="absolute bottom-2 right-6 w-20 opacity-40 pointer-events-none hidden sm:block"
    />
    <div className="container mx-auto px-6 text-center relative z-10">
      <p className="font-display font-semibold text-lg mb-2">
        Young AI Leaders Community · México City Hub
      </p>
      <p className="text-primary-foreground/70 text-sm">cdmx.youngaileaders.info</p>
      <p className="text-primary-foreground/50 text-xs mt-4">
        © 2026 Young AI Leaders. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
