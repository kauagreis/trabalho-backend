
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function registrar(req, res) {
  const { email, senha } = req.body;
  const existe = await User.findOne({ email });
  if (existe) return res.status(409).json({ msg: "Email já cadastrado" });
  const hash = await bcrypt.hash(senha, 10);
  const user = await User.create({ email, senha: hash });
  res.status(201).json(user);
}

export async function login(req, res) {
  const { email, senha } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ msg: "Usuário não encontrado" });
  const ok = await bcrypt.compare(senha, user.senha);
  if (!ok) return res.status(401).json({ msg: "Credenciais inválidas" });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
}
