import { Link } from "react-router-dom";
import SectionArticle from "../Components/SectionArticle";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <>
      {/*Seccion hero */}
      <section className="w-full h-full max-h-dvh mx-auto gap-10 bg-no-repeat bg-[url('src/assets/bg-hero-mobile.svg')] md:bg-[url('src/assets/bg-hero-desktop.svg')] bg-[#eaf8fe]">
        <div className="container mx-auto p-10 grid grid-cols-1 md:grid-cols-2 py-16 md:pt-6 md:pb-20">
          <div className="flex flex-col justify-center items-start gap-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Impulsa tu negocio con una página web profesional
            </h1>
            <p className="text-lg">
              Hoy en día, tener presencia en internet no es una opción, ¡es una
              necesidad! Diseñaré y desarrollaré una página web atractiva,
              rápida y optimizada para que tu negocio crezca y llegue a más
              clientes.
            </p>
            <Link
              to="/contacto"
              className="bg-[#4ac48e] uppercase mx-auto md:mx-0 py-4 px-14 md:px-28 rounded-xl bg-blue text-white font-bold hover:bg-[#4ab989]"
            >
              Contactame
            </Link>
          </div>
          <div className="w-full">
            <img src="dist/bg-hero.webp" alt="" />
          </div>
        </div>
      </section>
      <section className="container mx-auto flex flex-col gap-y-32 p-10 lg:p-12 pt-16 mb-24">
        <SectionArticle
          title="Tu sitio web, la mejor carta de presentación"
          text={
            <>
              <p className="w-full text-center md:text-start">
                Tener una página web profesional te ayuda a destacar y atraer
                más clientes. Aquí están algunos de los beneficios que obtendrás
                con mi servicio:
              </p>
              <ul className="text-center md:text-start text-base md:text-lg text-gray-700 list-none pl-5 mt-4">
                <li>🔹Diseño moderno y profesional</li>
                <li>🔹Adaptado a dispositivos móviles</li>
                <li>🔹Optimización para buscadores (SEO)</li>
                <li>🔹Fácil de gestionar y actualizar</li>
              </ul>
            </>
          }
          imageSrc="dist/bg-section-1.webp"
        />
        {/* Segunda sección: Velocidad y seguridad */}
        <SectionArticle
          title="Velocidad y seguridad en cada proyecto"
          text="Un sitio web lento o inseguro puede hacer que pierdas clientes. Desarrollo páginas rápidas y seguras con las mejores prácticas en optimización y protección de datos, garantizando una experiencia confiable para tus visitantes."
          imageSrc="dist/bg-section-2.webp"
          reverse={true}
        />

        {/* Tercera sección: Aumenta tu visibilidad online */}
        <SectionArticle
          title="Aumenta tu visibilidad y consigue más clientes"
          text="Un sitio web bien diseñado no solo se ve bien, sino que también está optimizado para aparecer en los primeros resultados de búsqueda en Google. Con estrategias de SEO, tu negocio será más visible y atraerá a más clientes potenciales."
          imageSrc="dist/bg-section-1.webp"
        />
      </section>
      <AboutMe />
    </>
  );
};

export default Home;
