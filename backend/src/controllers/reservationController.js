import CanchasModel from "../models/canchasModel.js";
import ReservasModel from "../models/reservasModel.js";
import reservasModel from "../models/reservasModel.js";
import UserModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'


const getReservations = async (req,res) =>{
    try{
        const reservations = await reservasModel.find()
        res.status(200).json(reservations)
    }catch(error){
        res.status(500).json({message: 'Ocurrió un error en la consulta'})
    }
}

const getOneReservation = async (req,res) => {
    const {reserva_id} = req.params
    try{
        const reserva = await reservasModel.findOne({reservation_id: reserva_id})
        res.status(200).json(reserva)
    }catch(error){
        res.status(404).json({message: 'Reserva no encontrada'})
    }
}

const addReservation = async(req,res)=>{
    try{
        const {reservation_date,reservation_time_id,reservation_field_id,user_id, reservation_time} = req.body
        if(!reservation_date || !reservation_time_id || !reservation_field_id || !reservation_time) res.status(400).json({message: 'Faltan datos'})
        const user = await UserModel.find({user_id: user_id})
        if(user){
            const existeReserva = await ReservasModel.findOne({reservation_time_id: reservation_time_id, reservation_field_id: reservation_field_id, reservation_date: reservation_date})
            if(!existeReserva){
                try{
                    const [field_data] = await CanchasModel.find({cancha_id: reservation_field_id})
                    try{
                        const newReservation = new ReservasModel({
                            reservation_id: crypto.randomUUID(),
                            reservation_date,
                            reservation_time_id,
                            reservation_time,
                            reservation_field_id,
                            reservation_field_name: field_data.cancha_nombre,
                            user_id,
                        })
                        await newReservation.save()
                        await UserModel.findOneAndUpdate({user_id: newReservation.user_id},{ $push: { reservas: newReservation.reservation_id } })
                        res.status(201).json({message: "Reserva agregada con exito"})
                    }catch(err){
                        console.log(err)
                        res.status(500).json({message: 'Error al crear la reserva'})
                    }
                }catch(err){
                    console.log(err)
                    res.status(500).json({message: 'Error en el servidor'})
                }
            }else{
                res.status(500).json({message: 'Ya existe una reserva con la misma fecha, hora y cancha'})
            }
        }else{
            res.status(403).json({message:'Debes iniciar sesión para poder reservar una fecha'})
        }
    }catch(error){
        console.log(error)
        res.status(400).json({message: "Error al cargar la reserva"})
    }
}

const deleteReservation = async (req,res) => {
    const { reservation_id } = req.params
    const { user_id, isAdmin } = req.body

    try{
        const [reserva] = await ReservasModel.find({reservation_id: reservation_id})
        if(reserva){
            if(reserva.user_id == user_id || isAdmin === true ){
                await UserModel.findOneAndUpdate({user_id: reserva.user_id}, { $pull: {reservas: reserva.reservation_id}})
                await ReservasModel.findOneAndDelete({reservation_id: reservation_id})
                return res.status(200).json({message: 'Reserva Eliminada'})
            }
        }
        return res.status(403).json({message: 'Solo el usuario que creó la reserva puede eliminarla'})
    }catch(err){
        return res.status(500).json({message: err.message})
    }

}

export default {
    getReservations,
    addReservation,
    deleteReservation,
    getOneReservation,
}