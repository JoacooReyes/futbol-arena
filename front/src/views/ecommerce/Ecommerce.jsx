import { useProductos } from '../../hooks'
import { CategoriaProducto } from '../../components'

export const Ecommerce = () => {

    const {productos} = useProductos()
    const bar = productos.filter(producto => producto.categoria.toLowerCase() == 'bar')
    const indumentaria = productos.filter(producto => producto.categoria.toLowerCase() == 'indumentaria')
    const accesorios = productos.filter(producto => producto.categoria.toLowerCase() == 'accesorio')
  return (
    <section className="w-full mx-auto h-full max-w-6xl bg-arena-green-50 rounded-xl overflow-hidden md:p-10 py-10">
        <h1 className='font-bold text-2xl lg:text-5xl my-10'>Nuestros Productos</h1>
        <p>Contamos con diversos tipos de productos</p>
        <article className='flex flex-col items-center justify-start overflow-x-scroll snap-x h-full px-5 md:px-10'>
            <CategoriaProducto productos={bar} />
            <CategoriaProducto productos={indumentaria} />
            <CategoriaProducto productos={accesorios} />
        </article>
    </section>
  )
}
