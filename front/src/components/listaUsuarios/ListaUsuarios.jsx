import { useEffect } from "react"
import { getUsers } from "../../utils/getUser"
import { useState } from "react"

export const ListaUsuarios = () => {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    getUsers().then(result => setUsers(result))
  },[])

  const eliminarUsuario = (user_id) => {
    console.log(user_id)
  }
  const listaUsuarios = users.filter(user => user.isAdmin == false)
  
  return (
    <section className="h-full w-full p-3 md:p-10 space-y-10">
        <h1 className="text-text-100 font-semibold text-2xl md:text-5xl">Lista de Usuarios Activos</h1>
        <table className="max-w-full mx-auto text-text-200 rounded-md bg-gray-50 table-auto w-full px-2 border-spacing-y-5 border-separate md:border-spacing-5 sm:border-spacing-2 overflow-x-auto" >
          <thead>
            <tr>
              <th className="">Nombre</th>
              <th className="hidden md:block">Email</th>
              <th className="">Teléfono</th>
              <th className="">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {
              listaUsuarios.length > 0
              ? listaUsuarios.map(user => (
                <tr key={user.user_id}>
                  <td className="text-start">{user.nombre}</td>
                  <td className="text-start hidden md:block">{user.email}</td>
                  <td className="text-start">{user.telefono}</td>
                  <td className="">
                    <button className="bg-red-500 font-bold text-white hover:bg-red-700" onClick={()=>eliminarUsuario(user.user_id)}>X</button>
                  </td>
                </tr>
              ))
              : <tr><td colSpan={5}>No hay usuarios registrados</td></tr>
            }
          </tbody>
        </table>

    </section>
  )
}
