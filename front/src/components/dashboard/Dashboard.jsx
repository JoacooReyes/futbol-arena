import { Link, Outlet, useNavigate } from "react-router-dom"
import { LogoCanchas, LogoEcommerce, LogoProductos, LogoReservas, LogoUsuarios } from "../drawer/iconos"
import { useUser } from "../../hooks"
import { useEffect } from "react"

export const Dashboard = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('usuario')) || ''
    const {handleLogout} = useUser()

    useEffect(()=>{
        if(!user.isAdmin){
            navigate('/')
        }
    },[])


  return (
    // bg-[#f8f4f3]
    <section className="w-full flex items-start justify-center lg:space-x-5">
        <article className="hidden lg:block lg:w-1/3 h-screen bg-primary-100 p-4 z-50 rounded-lg" id="sidebar">
            <Link to="/" className="flex items-center pb-4 border-b border-b-gray-800">
                <h2 className="font-bold text-2xl text-black">FÚTBOL <span className="bg-arena-green-400 text-white px-2 rounded-md">ARENA</span></h2>
            </Link>
            <ul className="mt-4">
                <span className="text-text-200 font-bold">ADMIN</span>
                <li className="mb-1 group flex items-center  hover:bg-gray-950 hover:text-gray-100 rounded-md">
                    <Link to="/dashboard/agregarCancha" className="flex font-semibold items-center py-2 px-4 text-gray-900 group-hover:text-gray-100 rounded-md space-x-5">
                        <LogoCanchas />
                        <span className="text-sm">Canchas</span>
                    </Link>
                </li>
                <li className="mb-1 group flex items-center  hover:bg-gray-950 hover:text-gray-100 rounded-md">
                    <Link to="/dashboard/listaUsuarios" className="flex font-semibold items-center py-2 px-4 text-gray-900 group-hover:text-white space-x-5">                
                        <LogoUsuarios />
                        <span className="text-sm">Usuarios</span>
                    </Link>
                </li>
                <li className="mb-1 group flex items-center  hover:bg-gray-950 hover:text-gray-100 rounded-md">
                    <Link to="/dashboard/agregarProducto" className="flex font-semibold items-center py-2 px-4 text-gray-900 group-hover:text-gray-100 rounded-md space-x-5">
                        <LogoEcommerce />
                        <span className="text-sm">Productos</span>
                    </Link>
                </li>
                
                <span className="text-text-200 font-bold">VISUALES</span>
                <li className="mb-1 group flex items-center  hover:bg-gray-950 hover:text-gray-100 rounded-md">
                    <Link to="/dashboard/listaCanchas" className="flex font-semibold items-center py-2 px-4 text-gray-900group-hover:text-gray-100 rounded-md space-x-5">
                        <LogoCanchas />
                        <span className="text-sm">Lista de Canchas</span>
                       
                    </Link>
                </li>
                <li className="mb-1 group flex items-center hover:bg-gray-950 hover:text-gray-100 rounded-md">
                    <Link to="/dashboard/listaReservas" className="flex font-semibold items-center py-2 px-4 text-gray-900 group-hover:text-gray-100 rounded-md space-x-5">
                        <LogoReservas />
                        <span className="text-sm">Lista de Reservas</span>
                    </Link>
                </li>
                <li className="mb-1 group flex items-center hover:bg-gray-950 hover:text-gray-100 rounded-md">
                    <Link to="/dashboard/listaProductos" className="flex font-semibold items-center py-2 px-4 text-gray-900 group-hover:text-gray-100 rounded-md space-x-5">
                        <LogoProductos />
                        <span className="text-sm">Lista de Productos</span>
                    </Link>
                </li>
            </ul>
            <button className="bg-accent-200 text-gray-200 font-semibold p-2 mt-10 w-2/3 mb-10" onClick={handleLogout}>
              Cerrar Sesión
            </button>
        </article>
        <article className="w-screen mx-auto lg:w-2/3 bg-bg-200 min-h-screen transition-all rounded-lg" id="admin-content">
            <Outlet />
        </article>
    </section>
  )
}
