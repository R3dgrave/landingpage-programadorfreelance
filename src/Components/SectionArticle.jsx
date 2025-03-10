const SectionArticle = ({ title, text, imageSrc, reverse }) => {
  return (
    <article
      className={`flex flex-col md:flex-row justify-center items-center border-2 border-white shadow-lg p-6 md:p-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full lg:w-1/2">
        <img src={imageSrc} alt={`Imagen de ${title}`} />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start ml-0 md:ml-10 md:mr-10 gap-2">
        <h2 className="text-center md:text-start text-xl font-bold md:text-4xl pb-4">
          {title}
        </h2>
        <p className="text-base text-center text-gray-800 font-light md:text-start">
          {text}
        </p>
      </div>
    </article>
  );
};

export default SectionArticle;
