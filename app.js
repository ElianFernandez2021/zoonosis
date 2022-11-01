/*Variables*/
const express = require("express");
const app = express();
const path = require("path")

/*Middlewares*/
app.use(express.static(path.join(__dirname, 'public')));

/*Routes*/
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/src/views/index.html"))
});

app.get("/formulario", (req, res) => {
    res.sendFile(path.join(__dirname, "/src/views/somos.html"))
});

app.listen(3000, ()=>
    console.log("Servidor corriendo en: http://localhost:3000/")
);