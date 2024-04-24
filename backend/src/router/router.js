import express from 'express';
import usersControllers from '../controllers/usersControllers.js';
import productController from '../controllers/productController.js';
import reservationController from '../controllers/reservationController.js'
import canchasController from '../controllers/canchasController.js';
const router = express.Router();

// USUARIOS*****
//obtener usuarios
router.get('/users', usersControllers.obtenerUsuarios)
router.get('/users/:user_id', usersControllers.obtenerUnicoUsuario)

//registro usuario
router.post('/registro', usersControllers.registroUsuario)

//login usuario
router.post('/login', usersControllers.loginUser)

//editar usuario
router.put('/users/:user_id', usersControllers.actualizarUsuario)

//delete usuario
router.delete('/users/:user_id', usersControllers.eliminarUsuario)

//PRODUCTOS******
//obtener productos
router.get('/products', productController.obtenerProductos)

//obtener un producto
router.get('/products/:id', productController.obtenerUnicoProducto)

//agregar producto
router.post('/products', productController.agregarProducto)

//eliminar producto
router.delete('/products/:producto_id', productController.eliminarProducto)

//editar producto
router.patch('/products/:producto_id', productController.actualizarProducto)

//RESERVAS*****
// obtener lista de reservas
router.get('/reservations', reservationController.getReservations)

// obtener una reserva
router.get('/reservations/:reserva_id', reservationController.getOneReservation)

// reservar una cancha
router.post('/reservations', reservationController.addReservation)

// eliminar una reserva
router.delete('/reservations/:reservation_id', reservationController.deleteReservation)

//CANCHAS*****
// lista de canchas del predio
router.get('/canchas/lista', canchasController.getCanchasLista)

//lista de canchas con turnos para reservas
router.get('/canchas', canchasController.getCanchas)

//agregar cancha
router.post('/canchas', canchasController.addCancha)

//eliminar cancha
router.delete('/canchas/:cancha_id', canchasController.deleteCancha)


export default router