import { useUser } from "../../hooks"

export const DatosUsuario = ({usuario}) => {
    

    if(!usuario) return null
    
  return (
    <section className="bg-bg-300 w-full h-full min-h-48 rounded-md shadow-md my-10 p-5 flex flex-col md:flex-row md:items-stretch justify-center gap-2">
        <article className="md:w-1/2 h-auto shadow-md rounded-md bg-primary-100 p-5 flex flex-col justify-around">
            <p className="font-semibold text-start">Nombre: <span className="font-normal"> {usuario.nombre}</span></p>
            <p className="font-semibold text-start">Email:  <span className="font-normal">{usuario.email}</span></p>
        </article>
        <article className="md:w-1/2 h-auto shadow-md rounded-md p-5 bg-primary-100 flex flex-col justify-evenly items-center">
            <p>Tus Reservas</p>
            <div className="font-bold text-5xl">
                {usuario.reservas.length}
            </div>
        </article>
    </section>
  )
}
