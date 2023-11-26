import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import notes  from './db/notes2.js';

const app = express();

app.use(cors());
app.use(
  bodyParser.json({
    type(req) {
      return true;
    },
  })
);
app.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
});



app.get("/notes", (req, res) => {
    res.send(JSON.stringify(notes.content));
    res.status(210);
});

app.post("/notes", (req, res) => {
  notes.addNotes(req.body.data);

  res.status(205);
  res.end();
});

app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  notes.deleteNotes(id);

  res.status(204);
  res.end();
});

const port = process.env.PORT || 7070;
app.listen(port, () => console.log(`The server is running on http://localhost:${port}`));