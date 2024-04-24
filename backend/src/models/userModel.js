import mongoose from "mongoose";
import { Schema } from 'mongoose';

const userSchema = new Schema(
    {
        user_id: {
            type: String,
            unique: true,
            required: true,
        },
        nombre: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        telefono: String,
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        reservas: [
            {
                type: String,
                default: [],
                ref: 'reservations',
                validate:{
                    validator: async function(value){
                        const Reservas = mongoose.model('reservations')
                        const reserva = await Reservas.findById(value);
                        return reserva !== null;
                    },
                    message: 'El campo "Reserva" debe referir a un ID de reserva válido'
                }
            }
        ],
    },
    {
        versionKey: false
    }
);

const UserModel = mongoose.model('users', userSchema, 'users' )

export default UserModel