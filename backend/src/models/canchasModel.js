import mongoose from 'mongoose';
import { Schema } from "mongoose";

const canchasSchema = new Schema({
    cancha_id: {
        type: String,
        required: true,
        unique: false,
        
    },
    cancha_nombre: {
        type: String,
        required: true,
    },
    cancha_detalle:{
        type: String,
        required: true,
    },
    cancha_turnos:{
        type: Array,
        default: [
            {
                turnoId: 'abc001',
                hora: '10:00 - 10:45',
                disponible: true,
            },
            {
                turnoId: 'abc002',
                hora: '11:00 - 11:45',
                disponible: true,
            },
            {
                turnoId: 'abc003',
                hora: '12:00 - 12:45',
                disponible: true,
            },
            {
                turnoId: 'abc004',
                hora: '13:00 - 13:45',
                disponible: true,
            },
            {
                turnoId: 'abc005',
                hora: '14:00 - 14:45',
                disponible: true,
            },
            {
                turnoId: 'abc006',
                hora: '15:00 - 15:45',
                disponible: true,
            },
            {
                turnoId: 'abc007',
                hora: '16:00 - 16:45',
                disponible: true,
            },
            {
                turnoId: 'abc008',
                hora: '17:00 - 17:45',
                disponible: true,
            },
            {
                turnoId: 'abc009',
                hora: '18:00 - 18:45',
                disponible: true,
            },
            {
                turnoId: 'abc010',
                hora: '19:00 - 19:45',
                disponible: true,
            },
            {
                turnoId: 'abc011',
                hora: '20:00 - 20:45',
                disponible: true,
            },
            {
                turnoId: 'abc012',
                hora: '21:00 - 21:45',
                disponible: true,
            },
            {
                turnoId: 'abc013',
                hora: '22:00 - 22:45',
                disponible: true,
            },
            {
                turnoId: 'abc014',
                hora: '23:00 - 23:45',
                disponible: true,
            },            
        ]
    }
})


const CanchasModel = mongoose.model('fields', canchasSchema)

export default CanchasModel