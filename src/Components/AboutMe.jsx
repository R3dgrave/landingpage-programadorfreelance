import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
const AboutMe = () => {
  return (
    <>
      {/* Sección Sobre Mí */}
      <section className="container mx-auto text-center p-10 lg:p-12 mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mí</h2>
        <p className="text-lg text-gray-800 max-w-3xl mx-auto">
          Soy un desarrollador freelance especializado en la creación de páginas
          web para pequeños negocios y emprendedores. Me apasiona construir
          soluciones digitales modernas, optimizadas y accesibles. Si buscas una
          web que destaque, ¡hablemos!
        </p>

        {/* Iconos de redes sociales */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/diego-abanto-b42b81289/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-3xl hover:text-blue-800 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/R3dgrave"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 text-3xl hover:text-gray-700 transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/+56976896260"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 text-3xl hover:text-green-800 transition-all"
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
