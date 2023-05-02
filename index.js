const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

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

  let sum = 0;

  if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10) {
    q1 == "a" ? sum++ : sum;
    q2 == "e" ? sum++ : sum;
    q3 == "b" ? sum++ : sum;
    q4 == "a" ? sum++ : sum;
    q5 == "a" ? sum++ : sum;
    q6 == "e" ? sum++ : sum;
    q7 == "b" ? sum++ : sum;
    q8 == "c" ? sum++ : sum;
    q9 == "a" ? sum++ : sum;
    q10 == "b" ? sum++ : sum;

    let emoji = "";

    if (sum <= 5) {
      emoji = "<br><p id='emoji'>&#128533</p>";
    } else if (sum < 8) {
      emoji = "<br><p id='emoji'>&#128528</p>";
    } else {
      emoji = "<br><p id='emoji'>&#128513</p>";
    }
    res.send(
      "<div id='score'><p id='finalScore'>Sua nota final foi: <span id='scoreStyle'>" +
        sum +
        "</span></p></div>" +
        emoji
    );
  } else {
    res.render("incomplet");
  }
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log("App rodando na porta: " + port);
});
