import { useContext, useEffect, useState } from "react"
import { useProductos } from "../../hooks"
import { UserContext } from "../../context/UserContext"
import { LogoReservas } from "../drawer/iconos"
import { ProductoModal } from "../productoModal/ProductoModal"
import { Table } from 'flowbite-react'
import { listaTheme } from "./listaTheme"

export const ListaProductos = () => {

  const [showModal, setShowModal] = useState(false)
  const [producto, setProducto] = useState({})
  const {productos, handleDelete, obtenerProductos} = useProductos()

  const {usuarioToken} = useContext(UserContext)
  
  const closeModal = ()=>{
    setShowModal(false)
  }
  const editarProducto = (producto) => {
    setProducto(producto)
    setShowModal(true)
  }
  // useEffect(()=>{
  //   obtenerProductos()
  // },[productos])
  return (
    <section className="h-screen w-full p-2 md:p-8 space-y-10 overflow-y-scroll snap-y">
        <h1 className="text-text-100 font-semibold text-2xl md:text-5xl mt-10">Lista de Productos</h1>
        <Table striped theme={listaTheme} className="w-full text-text-200 rounded-md table-auto overflow-y-scroll text-xs sm:text-base p-1" >
          <Table.Head>
              <Table.HeadCell className="w-5/12">Producto</Table.HeadCell>
              <Table.HeadCell className="w-3/12">Categoria</Table.HeadCell>
              <Table.HeadCell className="w-2/12">Precio</Table.HeadCell>
              <Table.HeadCell className="w-1/12">Editar</Table.HeadCell>
              <Table.HeadCell className="w-1/12">Eliminar</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {
              productos.length > 0
              ? productos.map(producto => (
                <Table.Row key={producto.producto_id} className="cursor-pointer hover:font-semibold">
                  <Table.Cell className="font-semibold">{producto.producto}</Table.Cell>
                  <Table.Cell className="font-thin tracking-tighter">{producto.categoria.toUpperCase()}</Table.Cell>
                  <Table.Cell className="font-semibold">${producto.precio}</Table.Cell>
                  <Table.Cell className="text-center">
                    <button className="bg-cyan-300 font-bold text-white hover:bg-cyan-500 p-1 sm:p-3" onClick={()=>editarProducto(producto)}><LogoReservas/></button>
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <button className="bg-red-500 font-bold text-white hover:bg-red-700 px-3" onClick={()=>handleDelete(producto.producto_id, usuarioToken)}>X</button>
                  </Table.Cell>
                </Table.Row>
              ))
              : <Table.Row><Table.Cell colSpan={5}>No hay productos cargados</Table.Cell></Table.Row>
            }
          </Table.Body>
        </Table>
            {
              showModal &&
              <ProductoModal producto={producto} closeModal={closeModal} />
            }
    </section>
  )
}
