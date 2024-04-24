import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

export const CanchaContext = createContext(null)

const apiLocalReservas = 'http://localhost:3001/api/reservations'
const apiRenderReservas = 'https://futbol-arena-back.onrender.com/api/reservations'

export const CanchaProvider = ({children}) => {
    const [horarios, setHorarios] = useState([])

    const [listaCanchas, setListaCanchas] = useState([])

    const [reservation, setReservation] = useState({
        reservation_date: '',
        reservation_time: '',
        reservation_field_id: '',
        user_id: ''
    })

    const handleDate = (date) => {
        const newDate = convertDate(date)
        setReservation({
            ...reservation,
            reservation_date: newDate
        })
    }
    const convertDate = (date) => {
        const splitDate = date.toLocaleDateString().split('/')
        for(let i=0; i<=2; i++){
            if(splitDate[i].length < 2){
            splitDate[i] = splitDate[i].concat('0').split('').reverse().join('')
            }
        }
        return splitDate.join('/')
    }

    const getCanchas = async() => {
        const response = await fetch('https://futbol-arena-back.onrender.com/api/canchas/lista')
        const result = await response.json()
        setListaCanchas(result)
    }

    useEffect(()=>{
        getCanchas()
    },[])

    const handleConsulta = async (ev) => {
        const usuario = JSON.parse(localStorage.getItem('usuario')) || ''
        if(usuario == '' || usuario == null) return toast.error('Debes Iniciar Sesión para reservar una cancha')
        setReservation({
            ...reservation,
            reservation_field_id: ev.target.id,
            user_id: usuario.user_id
        })
    }

    const consultaApi = async() =>{
        const {reservation_date, reservation_field_id} = reservation
        if(reservation_date != '' && reservation_field_id != ''){
            // const responseTurnos = await fetch(`http://localhost:3001/api/canchas?fecha_buscada=${reservation_date}&cancha_id=${reservation_field_id}`)
            const responseTurnos = await fetch(`https://futbol-arena-back.onrender.com/api/canchas?fecha_buscada=${reservation_date}&cancha_id=${reservation_field_id}`)
            const resultTurnos = await responseTurnos.json()
            const responseReservas = await fetch('https://futbol-arena-back.onrender.com/api/reservations')
            const resultReservas = await responseReservas.json()
            if(resultReservas.length < 1) return setHorarios(resultTurnos)
            const disponibles = await resultTurnos.map(turno => {
                for(let i = 0; i<resultReservas.length ; i++){
                    if(turno.turnoId == resultReservas[i].reservation_time_id && resultReservas[i].reservation_field_id == reservation.reservation_field_id && resultReservas[i].reservation_date == reservation.reservation_date ){
                        turno.disponible = false
                    }
                    turno
                }
                return turno
            })
            setHorarios(disponibles)
        }
    }
    const handleTime = (horario) => {
        setReservation({
            ...reservation,
            reservation_time: horario
        })
    }

    const addReservation = async (reservation) => {
        const newReservation = {
            reservation_date: reservation.reservation_date,
            reservation_field_id: reservation.reservation_field_id,
            reservation_time_id: reservation.reservation_time.turnoId,
            reservation_time: reservation.reservation_time.hora,
            user_id: reservation.user_id
        }
        try{
            const response = await fetch(apiRenderReservas, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(newReservation)
            })
            if(!response.ok) {
                const result = await response.json()
                throw new Error(result.message)
            }
            const result = await response.json()
            return result
        }catch(error){
            throw new Error(error)
        }
    }

    const crearCancha = async(cancha, token) =>{
        try{
            const response = await fetch('https://futbol-arena-back.onrender.com/api/canchas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(cancha)
            })
            const result = await response.json()
            console.log(result)
        }catch(error){
            throw new Error(error)
        }
    }

    const eliminarCancha = async(cancha_id, isAdmin) => {
        try{
            const response = await fetch(`https://futbol-arena-back.onrender.com/api/canchas/${cancha_id}`,{
                method:'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({"isAdmin":isAdmin})
            })
            const result = await response.json()
            console.log(result)
        }catch(error){
            throw new Error(error)
        }
    }

    return (
        <CanchaContext.Provider
            value={{
                listaCanchas,
                horarios,
                reservation,
                setReservation,
                setListaCanchas,
                consultaApi,
                handleDate,
                handleConsulta,
                handleTime,
                addReservation,
                crearCancha,
                eliminarCancha,
                getCanchas
            }}>
            {children}
        </CanchaContext.Provider>
    )
}