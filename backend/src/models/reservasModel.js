import mongoose from "mongoose";
import { Schema } from 'mongoose';

const reservasSchema = new Schema({
    reservation_id: {
        type: String,
        required: true,
        unique: true,
    },
    reservation_date: {
        required: true,
        type: String
    },
    reservation_time_id: {
        required: true,
        type: String
    },
    reservation_time: {
        required: true,
        type: String
    },
    reservation_field_id: {
        required: true,
        type: String
    },
    reservation_field_name:{
        type: String
    },
    user_id: {
        required: true,
        type: String
    }
})

const ReservasModel = mongoose.model('reservations', reservasSchema)

export default ReservasModel