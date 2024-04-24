import ProductModel from "../models/productModel.js";
import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

// obtener productos
const obtenerProductos = async (req, res) => {
  try {
    const productos = await ProductModel.find();
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
  }
};

const obtenerUnicoProducto = async (req,res) => {
  const {id} = req.params
  try{
    const producto = await ProductModel.findOne({producto_id: id})
    console.log(producto)
    res.status(200).json(producto)
  }catch(error){
    throw new Error(error)
  }
}

//agregar producto
const agregarProducto = async (req, res) => {
  try {
    const { producto, detalle, precio, imagen, categoria } = req.body;
    const token = req.get("authorization").split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const { user_id } = decodedToken;
    const usuarioDB = await UserModel.findOne({ user_id });
    if (usuarioDB.isAdmin === false) {
      res
        .status(403)
        .json({ message: "No posee permisos para realizar esta acción" });
      return;
    } else {
      const newProduct = new ProductModel({
        producto,
        detalle,
        precio,
        imagen,
        categoria,
        producto_id: crypto.randomUUID(),
      });
      await newProduct.save();
      res
        .status(201)
        .json({ message: "Producto agregado correctamente", newProduct });
    }
  } catch (error) {
    res.status(400).json({ message: "Ocurrió un error en la solicitud" });
    console.log(error);
  }
};

//eliminar producto
const eliminarProducto = async (req, res) => {
  try {
    const { producto_id } = req.params;
    const token = req.get("authorization").split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const { user_id } = decodedToken;
    const usuarioDB = await UserModel.findOne({ user_id });
    if (usuarioDB.isAdmin === true) {
      await ProductModel.findOneAndDelete({ producto_id });
      res.status(200).json({ message: "Producto eliminado" });
    } else {
      res
        .status(400)
        .json({ message: "No posees permisos para realizar esta acción" });
    }
  } catch (err) {
    console.log(err);
  }
};

//actualizar producto
const actualizarProducto = async (req, res) => {
  try {
    const { producto_id } = req.params;
    const { producto, detalle, precio, imagen, categoria } = req.body;
    const token = req.get("authorization").split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const { user_id } = decodedToken;
    const usuarioDB = await UserModel.findOne({ user_id });
    if (usuarioDB.isAdmin === true) {
      const productUpdated = await ProductModel.findOneAndUpdate(
        {
          producto_id: producto_id,
        },
        {
          producto,
          detalle,
          precio,
          imagen,
          categoria,
        },
        { new: true }
      );
      res.status(200).json({ message: "Producto actualizado", productUpdated });
    } else {
      res
        .status(400)
        .json({ message: "No posee permisos para realizar esta acción" });
    }
  } catch (err) {
    console.log(err);
  }
};

export default {
  obtenerProductos,
  agregarProducto,
  eliminarProducto,
  actualizarProducto,
  obtenerUnicoProducto
};
