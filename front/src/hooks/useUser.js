import { useContext, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../context/UserContext"
import { toast } from "sonner"

export const useUser = () => {
    const navigate = useNavigate()
    const { registrarUsuario, regResult, loginUsuario, usuarioToken, usuario, setShowLogin, getUserData } = useContext(UserContext)    
    const [error, setError] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleLogin = async (e,user) => {
      e.preventDefault();

      if(user.email == '' || user.password == '') {
        setError(true)
        setTimeout(()=>{
          setError(false)
        },1500)
        return
      }
      const userData = {
        email: user.email,
        password: user.password
      }
      toast.promise(loginUsuario(userData),{
        loading: 'Ingresando.. 🕐',
        success: 'A jugar!! ⚽',
        error: 'Falta Juez! ❌, ocurrió un error!'
      })
      setShowLogin(false)
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleLogout = () => {
      toast.error('Hasta luego...')
      localStorage.clear()
      setTimeout(()=>{
        navigate(0)
      },1000)
    }

  return {
    registrarUsuario,
    regResult,
    loginUsuario,
    usuarioToken,
    user,
    usuario,
    error,
    handleLogin,
    handleInputChange,
    getUserData,
    setUser,
    handleLogout
  }
}