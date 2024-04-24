import { useContext, useState } from "react"
import { ProductosContext } from "../context/ProductosContext"
import { toast } from "sonner";

export const useCarrito = () => {
    const [isActive, setIsActive] = useState(false);
    const { carrito, eliminarCarrito, setCarrito } = useContext(ProductosContext)
    const [select, setSelect] = useState('')
    
    const totalCarrito = carrito.reduce(
        (acc, curr) => acc + curr.precio * curr.cantidad,
        0
      );
    const vaciarCarrito = () => {
      setCarrito([])
    }

    const handlePay = () => {
      if(select == 'barra' || select ==''){
        toast.success('Puede pasar a retirar su pedido dentro de 10 min. por la Barra')
        return setTimeout(()=>{
          setSelect('')  
          vaciarCarrito()
        },2000)
      }
      toast.success(`En breve acercaremos su pedido a la cancha: ${select}`)
      return setTimeout(()=>{
        setSelect('')
        vaciarCarrito()
      },2000)
    }
    

  return {
    carrito,
    eliminarCarrito,
    totalCarrito,
    isActive,
    handlePay,
    setSelect,
    setIsActive
  }
}
