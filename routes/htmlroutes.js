

//route to db.json file

router.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});



app.post("/api/notes", (req, res) => {
    let createNote = req.body;
    let noteFolder = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let noteLength = (noteFolder.length )
})