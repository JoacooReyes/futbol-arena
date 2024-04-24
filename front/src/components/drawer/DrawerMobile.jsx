import { useUser } from "../../hooks";
import { DrawerItem } from "./DrawerItem";
import {
  LogoEcommerce,
  LogoCanchas,
  LogoProductos,
  LogoReservas,
  LogoUsuarios,
} from "./iconos";

export const DrawerMobile = ({ isOpen, setIsOpen }) => {
  const handleClose = () => setIsOpen(false);
  const {handleLogout} = useUser()

  return (
    <>
      {isOpen && (
        <div
          id="drawer-navigation"
          className={`${
            isOpen ? "" : "-translate-x-full"
          } fixed top-0 left-0 z-40 h-full p-4 overflow-hidden transition-transform  bg-bg-200 w-64`}
          aria-labelledby="drawer-navigation-label"
        >
          <h5
            id="drawer-navigation-label"
            className="text-2xl mt-10 font-bold text-text-100 uppercase"
          >
            FÚTBOL{" "}
            <span className="bg-arena-green-400 font-bold text-white rounded-lg p-1">
              ARENA
            </span>
          </h5>
          <button
            type="button"
            aria-controls="drawer-navigation"
            className="text-text-200 bg-bg-300 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex font-bold items-center justify-center hover:bg-gray-600 "
            onClick={handleClose}
          >
            X<span className="sr-only">Close menu</span>
          </button>
          <hr className="my-5 border-primary-300" />
          <div className="py-4 overflow-hidden flex flex-col justify-between h-4/5">
            <ul className="space-y-2 font-medium">
              <DrawerItem
                link="/dashboard/agregarProducto"
                titulo="Control E-Commerce"
                imagen={<LogoEcommerce />}
              />
              <DrawerItem
                link="/dashboard/agregarCancha"
                titulo="Control Canchas"
                imagen={<LogoCanchas />}
              />
              <DrawerItem
                link="/dashboard/listaUsuarios"
                titulo="Control Usuarios"
                imagen={<LogoUsuarios />}
              />
              <DrawerItem
                link="/dashboard/listaProductos"
                titulo="Listado Productos"
                imagen={<LogoProductos />}
              />
              <DrawerItem
                link="/dashboard/listaReservas"
                titulo="Listado Reservas"
                imagen={<LogoReservas />}
              />
              <DrawerItem
                link="/dashboard/listaCanchas"
                titulo="Listado Canchas"
                imagen={<LogoCanchas />}
              />
            </ul>
            <button className="bg-primary-300 text-gray-200 font-semibold p-2" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      )}
    </>
  );
};
