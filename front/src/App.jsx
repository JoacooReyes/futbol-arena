import { FormCancha, FormProducto, Header, ListaCanchas, ListaProductos, ListaReservas, ListaUsuarios, Footer } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CanchaProvider, ProductosProvider, UserProvider } from "./context"
import { Contacto, DashboardAdmin, Ecommerce, Error404, Galeria, Home, MiCuenta, Nosotros, Registro, Reservas } from "./views"
import { Toaster } from "sonner"
import PrivateRoute from "./routes/PrivateRoute"


function App() {
  return (
    <UserProvider>
      <CanchaProvider>
        <ProductosProvider>
          <BrowserRouter>
            <Header />
            <Toaster position="top-center" visibleToasts={1} theme="dark" richColors duration={1000}/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/nosotros" element={<Nosotros/>}/>
              <Route path='/galeria' element={<Galeria/>}/>
              <Route path='/contacto' element={<Contacto/>}/>
              <Route path='/ecommerce' element={<Ecommerce/>}/>
              <Route path='/registro' element={<Registro/>}/>
              <Route path='/micuenta' element={<PrivateRoute><MiCuenta/>
                </PrivateRoute>}/>
              <Route path='/dashboard' element={<PrivateRoute><DashboardAdmin/></PrivateRoute>}>
                <Route path="/dashboard/listaUsuarios" element={<ListaUsuarios/>}/>
                <Route path="/dashboard/listaCanchas" element={<ListaCanchas/>}/>
                <Route path="/dashboard/listaProductos" element={<ListaProductos/>}/>
                <Route index path="/dashboard/listaReservas" element={<ListaReservas/>}/>
                <Route path="/dashboard/agregarProducto" element={<FormProducto/>}/>
                <Route path="/dashboard/agregarCancha" element={<FormCancha/>}/>
              </Route>
              <Route path='/reservas' element={<Reservas/>}/>
              <Route path='/*' element={<Error404/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </ProductosProvider>
      </CanchaProvider>
    </UserProvider>
  )
}

export default App
