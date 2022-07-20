const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(__dirname + '/public'));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")))
app.use(require("./routes/routes"));

//motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


//puerto de la app
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
