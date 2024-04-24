import { useEffect, useMemo, useState } from "react"
import { DatosUsuario, MisReservas } from "../../components"
import { useUser } from "../../hooks"
import { useNavigate } from "react-router-dom"

export const MiCuenta = () => {
    const navigate = useNavigate()
    const {usuario} = useUser()
    
    useEffect(()=>{
        if(!usuario || usuario == '' || usuario == null ){
           return navigate('/')
        }
    },[])
    
  return (
    <div className="w-full mx-auto h-full max-w-6xl p-5 md:p-10 bg-bg-100 rounded-xl overflow-hidden">
        <h2 className="font-semibold text-2xl md:text-4xl">Tus datos</h2>
        <DatosUsuario usuario={usuario} />
        <h2 className="font-semibold text-2xl md:text-4xl">Tus Reservas</h2>
        <MisReservas />    
    </div>
  )
}
