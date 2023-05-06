const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Perguntas = require("./database/Perguntas");

const port = 3000;

//Database
connection
  .authenticate()
  .then(() => {
    console.log(`Conexão feita com o banco de dados!`);
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

// Estou dizendo para o Express usar o EJS como View engine
app.set("view engine", "ejs");
//Pasta de arquivos estáticos (CSS, imagens, ...)
app.use(express.static("public"));
//Configurando a biblioteca Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/score", (req, res) => {
  const user = req.body.user;

  const q1 = req.body.q1;
  const q2 = req.body.q2;
  const q3 = req.body.q3;
  const q4 = req.body.q4;
  const q5 = req.body.q5;
  const q6 = req.body.q6;
  const q7 = req.body.q7;
  const q8 = req.body.q8;
  const q9 = req.body.q9;
  const q10 = req.body.q10;

  let score = 0;

  if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10 && user) {
    q1 == "a" ? score++ : score;
    q2 == "e" ? score++ : score;
    q3 == "b" ? score++ : score;
    q4 == "a" ? score++ : score;
    q5 == "a" ? score++ : score;
    q6 == "e" ? score++ : score;
    q7 == "b" ? score++ : score;
    q8 == "c" ? score++ : score;
    q9 == "a" ? score++ : score;
    q10 == "b" ? score++ : score;

    let emoji = "";

    if (score <= 5) {
      emoji = "☹️";
    } else if (score < 8) {
      emoji = "😐";
    } else {
      emoji = "😁";
    }

    Perguntas.create({
      user: user,
      score: score,
    });

    Perguntas.findAll({
      raw: true,
    }).then((results) => {
      res.render("score", {
        score: score,
        emoji: emoji,
        results: results,
      });
    });
  } else {
    res.render("incomplet");
  }
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log("App rodando na porta: " + port);
});
