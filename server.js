const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Sincronizando DB.");
  })
  .catch((err) => {
    console.log("Falha ao sincronizar o DB: " + err.message);
  });

require("./app/routes/pessoa.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server rodando na porta: ${PORT}.`);
});
