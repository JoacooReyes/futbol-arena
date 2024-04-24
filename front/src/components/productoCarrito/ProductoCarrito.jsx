import { useCarrito } from "../../hooks/useCarrito";
import PropTypes from 'prop-types'

export const ProductoCarrito = ({ item }) => {
  ProductoCarrito.propTypes = {
    item: PropTypes.object
  }

  const { eliminarCarrito } = useCarrito();

  const { producto_id, producto, precio, cantidad, imagen } = item;

  return (
    <tr className="">
      <td className="w-1/6">
        <figure className="p-2 w-14 h-14">
          <img src={imagen} alt="img product" />
        </figure>
      </td>
      <td className="w-2/6 text-start">
          <p className="font-semibold">{producto}</p>
      </td>
      <td className="w-1/6">
        <p className=" w-18 font-medium">
          ${precio}
        </p>
      </td>
      <td className="w-1/6">
        <p className="text-text-200">{cantidad}</p>
      </td>
      <td className="w-1/6">
        <div
          className="hover:bg-red-200 rounded-full cursor-pointer text-red-700 w-3/4 p-1"
          onClick={() => eliminarCarrito(producto_id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-trash-2 "
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
      </td>
    </tr>
  );
};
