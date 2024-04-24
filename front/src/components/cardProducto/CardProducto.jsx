import {useContext} from 'react'
import { Link } from "react-router-dom";
import { useProductos } from "../../hooks/";
import PropTypes from 'prop-types'
import { UserContext } from "../../context/";
import { Button } from '../button/Button';

export const CardProducto = ( { data } ) => {
  CardProducto.propTypes = {
    data: PropTypes.object
  }

  const { producto, detalle, precio, categoria, imagen, producto_id } = data;

  const {usuario} = useContext(UserContext)

  const { agregarCarrito, carrito } = useProductos();

  const enCarrito = (producto_id) => {
    const existe = carrito.findIndex(
      (item) => item.producto_id === producto_id
    );
    if (existe >= 0) return true;
    return false;
  };

  return (
    <article className="rounded-xl bg-bg-100 p-3 shadow-md hover:shadow-xl lg:hover:scale-105 duration-300 max-w-80 snap-center min-w-52 w-52 relative overflow-hidden h-[370px]">
      {enCarrito(producto_id) && (
        <div className="p-3 bg-accent-100 text-black font-semibold rotate-45 -right-9 -top-1 flex justify-center items-center absolute z-10 w-28">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000"
            className="h-6 w-6 -rotate-45"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      )}
      
      <figure className="relative flex items-end overflow-hidden rounded-xl h-1/2 shadow-md bg-white">
        <img src={imagen} className='w-full h-full object-contain aspect-square' alt="Futbol arena foto producto" />
      </figure>
      <section className="mt-1 p-2 text-start h-1/2 flex flex-col justify-between">
        <div className="flex items-center justify-end rounded-lg w-fit ml-auto bg-accent-100 p-1 px-3 shadow-sm my-1 cursor-default">
          <span className="text-sm text-text-200 font-bold">
            {categoria.toUpperCase()}
          </span>
        </div>
        <h2 className="text-text-100 font-bold">{producto}</h2>
        <p className="mt-1 text-sm text-gray-800 font-semibold">{detalle}</p>
        <article className="mt-3 flex items-end justify-between">
          <p className="text-lg font-bold text-primary-300">${precio}</p>
          {
            usuario.email &&
            <button
              onClick={() => agregarCarrito(data)}
              className="flex items-center space-x-1.5 rounded-lg bg-primary-100 px-2 py-1.5 text-text-100 font-semibold duration-100 hover:text-text-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="text-sm">Agregar</span>
            </button>
          }
        </article>
      </section>
    </article>
  );
};
  