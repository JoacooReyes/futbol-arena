import bcrypt from "bcrypt";
import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken"

//Obtener usuarios 
const obtenerUsuarios = async (req, res) => {
    try{
        const usuarios = await UserModel.find();
        res.status(200).json(usuarios)
    }catch(err){
        console.log(err)
    }
}

//Obtener único usuario
const obtenerUnicoUsuario = async (req, res) => {
    const { user_id } = req.params
    try{
        const [usuario] = await UserModel.find({user_id})
        if(!usuario) res.status(404).json({message: 'Usuario no encontrado'})
        res.status(200).json(usuario)
    }catch(err){
        throw new Error(err)
    }
}
//Registro usuarios
const registroUsuario = async (req,res) =>{
    try{
        const { nombre, email, password, telefono } = req.body;
        if(!nombre || !email || !password || !telefono){
            res.status(400).json({message: 'Todos los campos son obligatorios'})
        }
        const existeUsuario = await UserModel.findOne({ email:req.body.email })
        if(existeUsuario){
            return res.status(400).json({message:'El usuario ya se encuentra registrado'})
        }else{
            const pass_hash = await bcrypt.hash(password, 10)
            const usuario = new UserModel({
                user_id: crypto.randomUUID(),
                nombre,
                email,
                password: pass_hash,
                telefono,
                isAdmin: false,
                reservas: []
            })
            await usuario.save();
            res.status(201).json({ message: "Usuario Registrado exitosamente", usuario });
        }
    }catch(err){
        res.status(400).json({"message": "Error al registrar usuario"})
        console.log(err)
    }
}

//Eliminar usuario
const eliminarUsuario = async (req,res) => {
    try{
        const { user_id } = req.params
        await UserModel.findOneAndDelete({user_id: user_id})
        res.status(200).json({message: "Usuario eliminado correctamente"})
    }catch(err){
        console.log(err)
    }
}

//Actualizar usuairo
const actualizarUsuario = async (req,res) => {
    try{
        const { user_id } = req.params
        const { nombre, email, telefono } = req.body
        if(!nombre || !email || !telefono){
            const usuario = await UserModel.find({user_id: user_id})
            usuario.update({
                
            })
        }
        const usuario = await UserModel.findOneAndUpdate(
            {
                user_id: user_id 
            }, 
            {
                nombre,
                email,
                telefono
            },
            {new: true}
        )
        res.status(200).json({message: "Usuario actualizado", usuario})
    }catch(err){
        console.log(err)
    }
}

//login usuario
const loginUser = async (req,res) => {
    try{
        const { email, password } = req.body
        const usuario = await UserModel.findOne({ email })
        if(!usuario){
            return res.status(404).json({message: "Usuario y/o Password incorrecto"})
        }
        const compararPass = await bcrypt.compare(password, usuario.password)
        if(!compararPass){
            return res.status(400).json({message: "Usuario y/o Password inconrrecto"})
        }
        //TOKEN JWT
        const token = jwt.sign(
            {
                user_id: usuario.user_id,
                nombre: usuario.nombre,
                email: usuario.email,
                isAdmin: usuario.isAdmin,
                reservas: usuario.reservas
            },
            process.env.SECRET_KEY,
            {
                expiresIn: 86400 //1 dia en seg
            }
        )
        res.status(200).json({token})
    }catch(err){
        console.log(err)
        res.status(400).json({message: "Error al iniciar sesión"})
        // res.status(500).json({message: "Error en el servidor"})
    }
}

export default {
    obtenerUsuarios,
    registroUsuario,
    actualizarUsuario,
    eliminarUsuario,
    loginUser,
    obtenerUnicoUsuario
}