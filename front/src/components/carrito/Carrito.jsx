import { createPortal } from "react-dom";
import { useCarrito } from "../../hooks/useCarrito";
import { ProductoCarrito } from "../productoCarrito/ProductoCarrito";
import { useCancha } from "../../hooks/useCancha";

export const Carrito = () => {
  const { carrito, totalCarrito, isActive, setIsActive, handlePay, setSelect } = useCarrito();
  const {listaCanchas} = useCancha()
  const handleChange = (e) => {
    setSelect(e.target.value)
  }

  return (
    <section className="my-2">
      <article className="flex items-center justify-center flex-col">
        <p className="relative scale-75 cursor-pointer" onClick={()=>setIsActive(!isActive)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8 text-text-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span className="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
            {carrito?.length}
          </span>
        </p>
        {
            isActive &&
            createPortal(
                <div className="p-5 absolute top-10 left-0 right-0 mx-auto w-11/12 sm:w-96 bg-accent-100 border-b-4 border-b-[#121212] border-r-4 border-r-[#121212] shadow-lg z-20 rounded-lg flex flex-col items-end gap-4">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-text-100 font-bold">Tus Productos</h2>
                      <button className="py-1 px-3 bg-[#121212] font-bold hover:bg-accent-200 text-white rounded-sm" onClick={()=>setIsActive(false)}>X</button>
                  </div>
                    {
                        carrito.length > 0
                        ?   <>
                                <table className="table-auto border-separate border-spacing-y-5 ">
                                    <thead className="rounded-xl bg-accent-100 border-spacing-5">
                                        <tr className="">
                                            <th className="w-1/6"></th>
                                            <th className="w-2/6">Producto</th>
                                            <th className="w-1/6">Precio</th>
                                            <th className="w-1/6">Cantidad</th>
                                            <th className="w-1/6"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            carrito.map((item) => (
                                                <ProductoCarrito 
                                                    key={item.producto_id} 
                                                    item={item}
                                                    />
                                            ))
                                        }
                                    </tbody>
                                </table>
                                <article className="flex justify-between w-full">
                                  <select className="rounded" name="entrega" id="entrega" onChange={handleChange} defaultValue='barra'>
                                    <option value="barra" className="font-bold">Retiro por barra</option>
                                    <optgroup label="Entrega en cancha">
                                      {
                                        listaCanchas.map(cancha => (
                                          <option key={cancha.cancha_id} value={cancha.cancha_nombre}>
                                            {cancha.cancha_nombre}
                                          </option>))
                                      }
                                    </optgroup>
                                  </select>
                                  <button onClick={handlePay} className="text-base px-4 py-2 rounded font-bold cursor-pointer bg-accent-100 hover:bg-primary-100 text-arena-200">
                                      Pagar ${totalCarrito}
                                  </button>
                                </article>
                            </>
                        : <p className="text-center border-2 border-accent-200 block w-full">No tiene elementos en su carrito </p>
                    }
                </div>
                , document.body
            )
        }
      </article>
    </section>
  );
};
