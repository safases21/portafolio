const { Router } = require("express");
const nodemailer = require("nodemailer");
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
router.get("/proyectos", (req, res) => {
  res.render("Proyectos", {
    titulo: "Proyectos",
    estilos: "/public/styles/proyectos.css",
  });
});

//ruta del formulario
router.post("/formulario", async (req, res) => {
  const { name, email, Phone, message } = req.body;
  console.log(req.body);
  contentHTML = `
          <h1>User Information</h1>
          <ul>
              <li>Username: ${name}</li>
              <li>email: ${email}</li>
              <li>Phone: ${Phone}</li>
          </ul>
          <p>${message}</p>
      `;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "konichiva3125@gmail.com",
      pass: "ubjhxplopejbstdr",
    },
  });

  const info = await transporter.sendMail({
    from: "'Server del Portafolio' <konichiva3125@gmail.com>",
    to: "konichiva3125@gmail.com",
    subject: "formulario de contacto del portafolio",
    html: contentHTML
  });

  console.log("message sent", info.messageId);
  res.redirect("/");
});

module.exports = router;
