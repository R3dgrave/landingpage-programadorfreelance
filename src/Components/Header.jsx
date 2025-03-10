const Header = () => {
  return (
    <>
      <header className="font-mono bg-[#eaf8fe]">
        <div className="container flex flex-col px-8 mx-auto">
          <div className="w-full flex justify-between items-center pt-4">
            <div className="w-16">
              <img
                src="https://github.com/R3dgrave/landingpage-programadorfreelance/blob/main/src/assets/logo.png"
                alt="Logo de la empresa"
                className="w-full"
              />
            </div>
            <a
              href="/"
              className="p-4 text-white bg-[#4ac48e] hover:bg-[#4ab989] px-8 md:px-12 transition-all rounded-xl font-bold uppercase"
            >
              Contactame
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
