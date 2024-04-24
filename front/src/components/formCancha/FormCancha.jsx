import { useContext } from "react"
import { useCancha } from "../../hooks"
import { UserContext } from "../../context"
import { Button } from "../button/Button"

export const FormCancha = () => {

  const {usuarioToken} = useContext(UserContext)
  const {handleSubmit} = useCancha()

  return (
    <div className="h-screen rounded-md bg-bg-100 space-y-5 p-10">
        <h1 className="font-semibold text-text-100 text-5xl">El Complejo</h1>
        <p className="text-text-200 font-semibold ">Administra tus Canchas</p>
        <div className="flex flex-col w-full bg-bg-200 rounded-md p-5 h-fit justify-center space-y-10 items-center">
            <form onSubmit={(e)=> handleSubmit(e,usuarioToken)} className="flex flex-col gap-4 justify-center w-full ">
                {/* Inputs del formulario*/}
                <input
                    type="text"
                    name="cancha_nombre"
                    placeholder="Nombre de Cancha"
                    className="p-3 focus:outline-arena-green-400 outline-none text-gray-700 rounded-md"
                />
                <textarea
                    name="cancha_detalle"
                    placeholder="Detalle de cancha"
                    cols={30}
                    rows={5}
                    style={{resize: "none"}}
                    className="p-3 focus:outline-arena-green-400 outline-none text-gray-700 rounded-md"
                />
                {/* Botones */}
                <div className="flex gap-4 mt-5 flex-col sm:flex-row">
                    {/* <button type="submit" className="bg-accent-100 hover:bg-primary-200 text-text-100 font-bold p-3 flex-1 shadow-md">
                        Agregar Cancha
                    </button> */}
                    {/* <button type="button" className="hover:text-black bg-bg-300 text-white font-bold p-3 flex-1">
                        Borrar Formulario
                    </button> */}
                    <Button type='submit' mode='accent' text='Agregar Cancha'/>
                    <Button type='button' mode='' text='Borrar Formulario'/>
                </div>
            </form>
        </div>
    </div>
  )
}
