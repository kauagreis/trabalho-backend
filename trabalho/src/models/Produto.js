
import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true, maxlength: 60 },
  preco: { type: Number, required: true },
  estoque: { type: Number, required: true }
});

export default mongoose.model("Produto", produtoSchema);
