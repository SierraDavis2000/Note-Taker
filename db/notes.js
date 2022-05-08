const fs = require("fs");
const util = require("util");

//npm package to create note ids
const uuid = require ('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const apiData = './db/db.json';

class notes {
    read(){
        return readFileAsync (apiData, 'utf8')
    }
    construct(note){
        return writeFileAsync (apiData, JSON.stringify(note))
    }
    appendNote(note) {
        const {title, text} = note

        const newNote = { title, text, id: uuid() }

        return this.retrieveNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => this.newNote)
    }
    retrieveNotes() {
        return this.read()
            .then(notes => {
                return JSON.parse(notes) || [];
            })
    }
    deleteNote(){
        return writeFileAsync(apiData, JSON.stringify(data, null, "\t"));
    }
}
module.exports = new notes();