const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const router = Router();

//rutas de enlaces
router.get("/", (req, res) => {
  res.render("index", {
    titulo: "Portafolio",
    estilos: "/public/styles/main.css",
  });
});
router.get("/Contacto", (req, res) => {
  res.render("Contacto", {
    titulo: "Contacto",
    estilos: "/public/styles/contacto.css",
  });
});
router.get("/proyectos", (req, res)=>{
  res.render("Proyectos", {
    titulo: "Proyectos",
    estilos: "/public/styles/proyectos.css"
  })
});

//ruta del formulario
router.post("/formulario", (req, res) => {
  const { name, email, Phone, message } = req.body;
  console.log(req.body);
  contentHTML = `
          <h1>User Information</h1>
      
      `;
  res.send("received");
});

module.exports = router;
