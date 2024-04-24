import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
  producto_id: {
    unique: true,
    type: String,
    required: true,
  },
  producto: {
    type: String,
    required: true,
  },
  detalle: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
});

const ProductModel = mongoose.model("products", productSchema, "products");

export default ProductModel;
