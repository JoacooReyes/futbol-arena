import { Link } from 'react-router-dom';
import error from "../../assets/404.png";

export const Error404 = () => {
  return (
    <section className="w-full mx-auto h-screen max-w-6xl bg-bg-300 rounded-xl overflow-hidden p-10">
      <article className="flex flex-col items-center justify-evenly h-full bg-arena-green-100 rounded-md">
        <h1 className="text-2xl md:text-5xl text-arena-green-950 mb-8">Oops.. Falta juez!! </h1>
        <figure className='w-fit h-fit flex items-center justify-center'>
          <img
            src={error}
            alt="Error 404"
            className=""
          />
        </figure>
        <p className="text-lg text-arena-green-950 mb-8">
          Lo sentimos, la página que estás buscando no está disponible.
        </p>

        <Link
          to="/"
          className="inline-block bg-accent-200 hover:bg-arena-green-800 text-white font-bold py-2 px-4 rounded"
        >
          Volver al Inicio
        </Link>
      </article>
    </section>
  );
};

export default Error404;