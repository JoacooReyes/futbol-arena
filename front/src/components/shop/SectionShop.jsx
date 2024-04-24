import { CardProducto } from "../";
import { Link } from "react-router-dom";
import { useProductos } from "../../hooks/";
import { useMemo } from "react";

export const SectionShop = () => {

  const {productos} = useProductos();
  
  const productosMuestra = useMemo(() => productos.sort((a,b)=>0.5 - Math.random()).slice(0,4), [productos]) 
  return (
    <section className="py-5 h-fit bg-primary-100 rounded-md">
      <h2 className="text-black text-3xl font-bold mb-6">Los productos mas vendidos</h2>
      <div className="mx-auto sm:grid max-w-6xl flex items-center justify-start gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10 h-full overflow-x-scroll snap-mandatory snap-y sm:overflow-hidden">
        {
          productosMuestra.map((producto) => (
            <CardProducto 
              key={producto.producto_id}
              data={producto}/>
          ))
        }
      </div>
      <Link to='/ecommerce' className="bg-primary-200 p-3 rounded-xl flex w-fit justify-end ml-auto mr-5">Ver más &#8250;</Link>
    </section>
  );
};
