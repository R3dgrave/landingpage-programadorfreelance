const Footer = () => {
  return (
    <div className="bg-[#00252e] w-full pt-20 pb-20 pl-6 text-white shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between px-6 items-start md:w-full lg:w-3/4 lg:mx-auto">
        <section>
          <p className="w-full flex items-center font-bold pb-10">
            <img
              src="https://raw.githubusercontent.com/R3dgrave/landingpage-programadorfreelance/refs/heads/main/src/assets/logo.webp"
              alt=""
              className="w-10 mr-3"
            />
            Diego Abanto Mendoza
          </p>
        </section>
        <section className="flex flex-col items-start gap-6 text-lg">
          <p className="flex gap-2 items-center">
            <img
              className="w-11 pr-5"
              src="https://raw.githubusercontent.com/R3dgrave/landingpage-programadorfreelance/refs/heads/main/src/assets/icon-location.svg"
              alt="icono de dirección"
            />
            Quilicura, Región Metropolitana
          </p>
          <p className="flex gap-2 justify-center items-center">
            <img
              className="w-11 pr-5"
              src="https://raw.githubusercontent.com/R3dgrave/landingpage-programadorfreelance/refs/heads/main/src/assets/icon-phone.svg"
              alt="icono de teléfono"
            />
            +56-9-6565-6760
          </p>
          <p className="flex gap-2 justify-center items-center">
            <img
              className="w-11 pr-5"
              src="https://raw.githubusercontent.com/R3dgrave/landingpage-programadorfreelance/refs/heads/main/src/assets/icon-email.svg"
              alt="icono de correo"
            />
            correo@correo.com
          </p>
        </section>
        <section className="py-14 md:py-0 lg:py-0">
          <p className="flex flex-wrap text-xs text-center italic">
            Esta página fue creada por @diego_abanto con ReactJS y Tailwind CSS
          </p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
