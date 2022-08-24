const data = require('./data.json');
const express = require('express');
const app = express();
app.use(express.json());

const fs = require('fs');

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const id in data.notes) {
    notesArray.push(data.notes[id]);
  }
  res.status(200).send(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const noteInt = parseInt(noteId);
  if (!Number.isInteger(noteInt)) {
    res.status(404).send({ error: 'id must be a positive integer' });
  } else if (data.notes[noteId]) {
    const note = data.notes[req.params.id];
    res.status(200).send(note);
  } else {
    res.status(404).send({ error: `cannot find note with id ${noteId}` });
  }
});

app.post('/api/notes', (req, res) => {
  const newNoteId = data.nextId;
  if (req.body.content.trim().length === 0) {
    res.status(400).send({ error: 'content is a required field' });
  } else {
    req.body.id = newNoteId;
    data.notes[newNoteId] = req.body;
    data.nextId++;
    const json = JSON.stringify(data);
    fs.writeFile('./data.json', json, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred' });
        return;
      }
      res.status(201).send(req.body);
    });
  }

});

app.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const noteInt = parseInt(noteId);
  if (!Number.isInteger(noteInt)) {
    res.status(404).send({ error: 'id must be a positive integer' });
  } else if (data.notes[noteId]) {
    const json = JSON.stringify(data);
    delete data.notes[req.params.id];
    fs.writeFile('derp/data.json', json, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred' });
        return;
      }
      res.sendStatus(204);
    });
  } else {
    res.status(404).send({ error: `cannot find note with id ${noteId}` });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const noteInt = parseInt(noteId);
  if (req.body.content.trim().length === 0) {
    res.status(400).send({ error: 'content is a required field' });
  } else if (!Number.isInteger(noteInt)) {
    res.status(404).send({ error: 'id must be a positive integer' });
  } else if (data.notes[noteId]) {
    data.notes[noteId].content = req.body.content;
    const json = JSON.stringify(data);
    fs.writeFile('./data.json', json, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred' });
        return;
      }
      res.status(200).send(data.notes[noteId]);
    });
  } else {
    res.status(404).send({ error: `cannot find note with id ${noteId}` });
  }
});

app.listen(3000, function () {
  // eslint-disable-next-line no-console
  console.log('Server listening on 3000');
});
