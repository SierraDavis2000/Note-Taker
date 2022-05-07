//require packages and set up variables
const express = require('express'); 
const fs = require('fs'); 
const path = require('path')

const app = express();

const PORT = process.env.PORT || 3000;

//directory name = public
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//port listener
app.listen(PORT, () => console.log("Server listening on port " + PORT));