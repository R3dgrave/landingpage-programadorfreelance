import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full mx-auto bg-[#eaf8fe]">
      <section className="container mx-auto flex flex-col items-center p-10 lg:p-12 pt-16 mb-48">
        <h2 className="text-3xl font-bold mb-6">Contáctame</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Si tienes alguna consulta o quieres trabajar conmigo, envíame un
          mensaje.
        </p>

        <form className="w-full max-w-lg p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="name"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              id="email"
              placeholder="tuemail@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Mensaje
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="message"
              rows="4"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            Enviar Mensaje
          </button>
        </form>

        <Link
          to="/principal"
          className="mt-6 bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition-all"
        >
          Volver a la página principal
        </Link>
      </section>
    </div>
  );
};

export default Contact;
