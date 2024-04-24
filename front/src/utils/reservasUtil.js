import { toast } from "sonner"

export const getReservations = async() =>{
    const responseReservas = await fetch('https://futbol-arena-back.onrender.com/api/reservations')
    const resultReservas = await responseReservas.json()
    return resultReservas
}

export const eliminarReserva = async (id,user) =>{
    const {user_id, isAdmin} = user
    const userData = {
        user_id: user_id,
        isAdmin: isAdmin
    }
    const response = await fetch(`https://futbol-arena-back.onrender.com/api/reservations/${id}`,{
        method: 'DELETE',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(userData)
    })
    const result = await response.json()
    toast.success(result.message)
}
