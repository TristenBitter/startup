const express = require("express");
const app = express();
const DB = require('./database.js');

const scores = [];

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static("public"));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get("/scores", (_req, res) => {
    const scores = await DB.getHighScores();
    res.send(scores);
});

// SubmitScore
apiRouter.post("/score", (req, res) => {
  const winner = req.body;
  scores.push(winner);
  console.log(scores);
  res.status(200);
  // scores = updateScores(req.body, scores);
  // res.send(scores);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile("index.html", { root: "public" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

async function loadScores() {
  const response = await fetch("/api/scores");
  const the_scores = await response.json();

  //Modify the DOM to display the scores
}

