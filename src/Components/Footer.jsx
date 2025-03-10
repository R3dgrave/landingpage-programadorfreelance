const Footer = () => {
  return (
    <div className="bg-[#00252e] w-full pt-20 pb-20 pl-6 text-white shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between px-6 items-start md:w-full lg:w-3/4 lg:mx-auto">
        <section>
          <p className="w-full flex items-center font-bold pb-10">
            <img
              src="https://drive.google.com/file/d/1m_DL8iYzPqkd3nQoXnsudgdxzwoc3nIh/view"
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
              src="https://drive.google.com/file/d/16fXm2_yj7PNOvmhrAqjYmjOefPfUuFpO/view?usp=drive_link"
              alt="icono de dirección"
            />
            Quilicura, Región Metropolitana
          </p>
          <p className="flex gap-2 justify-center items-center">
            <img
              className="w-11 pr-5"
              src="https://drive.google.com/file/d/1ovdfPFtQ5AvVQ2hB80qVqeYkYDetcCMw/view?usp=drive_link"
              alt="icono de teléfono"
            />
            +56-9-6565-6760
          </p>
          <p className="flex gap-2 justify-center items-center">
            <img
              className="w-11 pr-5"
              src="https://drive.google.com/file/d/16gEHZfPbf2gMX1M4LD3KE5zvle-HvRdy/view?usp=drive_link"
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
