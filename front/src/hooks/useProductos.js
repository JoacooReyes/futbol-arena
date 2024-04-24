import { useContext, useState } from 'react'
import { ProductosContext } from '../context/ProductosContext'
import { UserContext } from '../context'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export const useProductos = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const {productos, agregarCarrito, carrito, eliminarProducto, obtenerProductos, agregarProducto} = useContext(ProductosContext)
    const {usuarioToken} = useContext(UserContext)

    const handleDelete = async (id, token) => {
        toast.promise(eliminarProducto(id, token),{
            loading:'Eliminando',
            success: async ()=> {
                await obtenerProductos()
            },
            error: 'Ocurrió un error'
        })
    }

    const handleSubmit = async(e,token, productoCloudData) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newProducto = {
            producto: formData.get('producto'),
            detalle: formData.get('detalle'),
            precio: formData.get('precio'),
            categoria: formData.get('categoria'),
            imagen: productoCloudData.url,
        }
        
        const {producto, detalle, precio, categoria, imagen} = newProducto
        if(!producto || !detalle || !precio | !categoria || !imagen) {
            setError(true)
            setTimeout(()=>{
                setError(false)
            },1000)
            return 
        }
        try{
            toast.promise(agregarProducto(newProducto, token),{
                loading: 'Agregando producto',
                success: async ()=>{
                    'Producto agregado',
                    await obtenerProductos()
                    navigate(0)

                },
                error: 'Ocurrió un error'
            })
        }catch(error){
            toast.error(error)
        }
    }

    const handleEditar = async (id, producto) => {
        const editar = async() => {
            const response = await fetch(`https://futbol-arena-back.onrender.com/api/products/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${usuarioToken}`
                },
                body:JSON.stringify(producto)
            })
            const result = await response.json()
            return result
        }
        try{
            await editar()
            await obtenerProductos()
        }catch(error){
            throw new Error(error)
        }
    }
    return {
        productos,
        agregarCarrito,
        carrito,
        error,
        obtenerProductos,
        handleDelete,
        handleEditar,
        handleSubmit,
    }
}
