import CanchasModel from "../models/canchasModel.js";
import jwt from 'jsonwebtoken'
import UserModel from "../models/userModel.js";
import ReservasModel from "../models/reservasModel.js";

const getCanchas = async (req, res) => {
    const { cancha_id, fecha_buscada } = req.query
    try{
        const [ canchaElegida ] = await CanchasModel.find({cancha_id : cancha_id})
        // const reservasEnCancha = await ReservasModel.find({reservation_field_id : canchaElegida.cancha_id, reservation_date: fecha_buscada})
        // if(reservasEnCancha.length > 0){
        //     // const turnosMap = new Map(canchaElegida.cancha_turnos.map(turno => [turno.turnoId, turno]));
        //     // for (const reserva of reservasEnCancha) {
        //     //     const turno = turnosMap.get(reserva.reservation_time_id);
        //     //     if (turno) {
        //     //         turno.disponible = false;
        //     //     }
        //     // }
        //     // const turnosActualizados = Array.from(turnosMap.values());
        //     // return res.status(200).json(turnosActualizados);
        //     // ******
        //     const turnosDisponibles = canchaElegida.cancha_turnos.map(turno => {
        //         for(let i= 0; i < reservasEnCancha.length; i++) {
        //             if(turno.turnoId == reservasEnCancha[i].reservation_time_id){
        //                  turno.disponible=false
        //             }else{
        //                 turno
        //             }
        //         }
        //         return turno
        //     })
        //     return res.status(200).json(turnosDisponibles)
        // }else{
        //     return res.status(200).json(canchaElegida.cancha_turnos)
        // }
        res.status(200).json(canchaElegida.cancha_turnos)
    }catch(err){
        console.log(err)
        res.status(500).json({message: err.message})
    }
}

const getCanchasLista = async (req, res) => {
    try{
        const listaCanchas = await CanchasModel.find()
        res.status(200).json(listaCanchas)
    }catch(err){
        console.log(err)
        res.status(500).json({message: err.message})
    }
}

const addCancha = async (req, res) => {
    const { cancha_nombre, cancha_detalle } = req.body

    const token = req.get('authorization').split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
    const { user_id } = decodedToken
    const usuarioDB = await UserModel.findOne({user_id})
    if(!usuarioDB.isAdmin){
        res.status(403).json({message: 'No tienes permiso para realizar esta operación'})
    }
    if(usuarioDB.isAdmin === true){
        if(cancha_nombre == '' || cancha_detalle == '') return res.status(400).json({message: 'Necesita ingresar nombre y detalle de cancha'})
        const newCancha = CanchasModel({
            cancha_id: crypto.randomUUID(),
            cancha_nombre,
            cancha_detalle
        })
        await newCancha.save()
        res.status(201).json({message: 'Cancha agregada con éxito'})
    }
}

const deleteCancha = async (req,res) => {
    const { cancha_id } = req.params
    const { isAdmin } = req.body
    
    try{
        const [cancha] = await CanchasModel.find({cancha_id: cancha_id})
        if(cancha){
            if( isAdmin === true ){
                await CanchasModel.findOneAndDelete({cancha_id: cancha_id})
                return res.status(200).json({message: 'Cancha Eliminada'})
            }
            return res.status(403).json({message: 'Solo un Administrador puede eliminar Canchas'})
        }
    }catch(err){    
        return res.status(500).json({message: err.message})
    }

}


export default {
    getCanchas,
    addCancha,
    getCanchasLista,
    deleteCancha
}