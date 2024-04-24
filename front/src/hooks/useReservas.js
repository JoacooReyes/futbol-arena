import {useState, useEffect} from 'react'
import { eliminarReserva, getReservations } from '../utils/reservasUtil';
import { useUser } from './useUser';

export const useReservas = () => {
    const [reservas, setReservas] = useState([]);
    const usuarioId = JSON.parse(localStorage.getItem('usuario'))?.user_id || ''
    const {usuario, getUserData} = useUser()
    
    const getReservas = () => {
        getReservations()
        .then(result => setReservas(result))
    }

    const handleDelete = async(reserva_id) => {
        await eliminarReserva(reserva_id, usuario)
        await getUserData(usuario.user_id)
        getReservas()
    }
    useEffect(()=>{
        getReservas()
    },[])

    const reservasUser = reservas.filter(reserva => reserva.user_id === usuarioId)

    return {
        reservasUser,
        handleDelete
    }
}