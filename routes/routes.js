const express = require('express'); 
const router = require('express').Router();

//npm package to create note ids
const uuid = require ('uuid');
const notes = require('../db/notes');


//route to db.json file
router.post("/api/notes", function (req, res) {
    const currentNotes = notes.readNotes();
    let newNote = {
      id: uuid(),
      title: req.body.title,
      text: req.body.text,
    };
  
    await notes.addNote([...currentNotes, newNote]);
  
    return res.send(newNote);
  });

router.get('/api/notes', (req, res) => {
    notes
        .retrieveNotes()
        .then(notes => {
            res.json(notes)
        })
        
})



router.post("/api/notes", (req, res) => {
    console.log(req.body)
    notes
        .appendNote(req.body)
        .then(note => {
            res.json(note)
         })
    
})

router.delete('/api/notes/:id', (req, res) => {
    notes
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
})

module.exports = router;