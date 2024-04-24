import React from "react";
import logo from "../../assets/futbolarenaTiny2.png";
import fb from "./icons/fb.svg";
import gh from "./icons/gh.svg";
import ig from "./icons/ig.svg";
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="relative bg-bg-200 rounded-xl my-5 p-6">
      <article className="container mx-auto">
        <section className="flex justify-center px-5 flex-wrap">
          <article className="w-full lg:w-6/12 text-end">
            <h4 className="text-3xl font-semibold text-text-100">
              ¡Visita nuestras redes sociales!
            </h4>
            <p className="text-lg mt-1 mb-2 text-text-200">
              Encuentranos en estas plataformas.
            </p>
            <section className="mt-6 lg:mb-0 mb-6 flex items-center justify-center">
              <Link to='/error404' className="mr-3">
                <img src={fb} alt="facebook" width={40} height={40} />
              </Link>
              <Link to='/error404' className="mr-3">
                <img src={ig} alt="instagram" width={40} height={40} />
              </Link>
              <Link to='/error404' className="mr-3">
                <img src={gh} alt="github" width={40} height={40} />
              </Link>
            </section>
          </article>
          <article className="w-full lg:w-6/12">
            <hr className="my-6 border-blueGray-300 md:hidden " />
            <section className="flex items-center justify-center px-5 lg:mt-5">
              <article className="w-full lg:w-2/5 flex flex-col gap-2 text-left">
                <h4 className="uppercase text-text-100 text-base lg:text-lg font-semibold mb-2">
                  Links útiles
                </h4>
                <Link
                  className="text-text-200 hover:text-text-200 font-semibold text-sm lg:text-lg"
                  to="/nosotros"
                >
                  Sobre Nosotros
                </Link>
                <Link
                  className="text-text-200 hover:text-text-200 font-semibold text-sm lg:text-lg"
                  to="/*"
                >
                  Contáctanos
                </Link>
                <Link
                  className="text-text-200 hover:text-text-200 font-semibold text-sm lg:text-lg"
                  to="/*"
                >
                  + Información
                </Link>
              </article>
              <figure className="w-full lg:w-4/12 flex items-center justify-center">
                <img
                  className="rounded-full"
                  src={logo}
                  alt="logo"
                  width={100}
                  height={100}
                />
              </figure>
            </section>
          </article>
        </section>
        <hr className="my-6 border-primary-300 max-w-[80%] mx-auto" />
        <section className="flex flex-wrap items-center md:justify-between justify-center">
          <article className="w-full md:w-4/12 px-4 mx-auto text-center">
            <p className="text-sm text-text-200 font-semibold">
              Copyright &copy; <strong>{new Date().getFullYear()}</strong> -
              <span> Futbol Arena</span>
            </p>
          </article>
        </section>
      </article>
    </footer>
  );
};

