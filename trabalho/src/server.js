
import app from "./app.js";
import "./config/db.js";

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Servidor rodando"));
