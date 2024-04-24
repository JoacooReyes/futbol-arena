import { useContext } from "react"
import { useCancha } from "../../hooks/useCancha"
import { UserContext } from "../../context"

export const ListaCanchas = () => {

  const {listaCanchas, handleDelete} = useCancha()
  const {usuario} = useContext(UserContext)

  return (
    <section className="h-full w-full p-3 md:p-10 space-y-10">
        <h1 className="text-text-100 font-semibold text-2xl md:text-5xl">Lista de Canchas Activas</h1>

        <table className="w-full text-text-200 rounded-md bg-gray-50 border-separate md:border-spacing-5 border-spacing-1" >
          <thead className="">
            <tr className="">
              <th className="">Cancha</th>
              <th className="">Detalle</th>
              <th className="">Acción</th>
            </tr>
          </thead>
          <tbody>
            {
              listaCanchas.length > 0
              ? listaCanchas.map(cancha => (
                <tr key={cancha.cancha_id}>
                  <td className="cursor-default text-start">{cancha.cancha_nombre}</td>
                  <td className="cursor-default ">{cancha.cancha_detalle}</td>
                  <td className="cursor-default ">
                    <button className="bg-red-500 font-bold text-white hover:bg-red-700" onClick={()=>handleDelete(cancha.cancha_id,usuario)}>X</button>
                  </td>
                </tr>
              ))
              : <tr><td colSpan={5}>No hay canchas registradas</td></tr>
            }
          </tbody>
        </table>
    </section>
  )
}
