//require packages and set up variables
const express = require('express'); 

const app = express();

const PORT = process.env.PORT || 3001;

//directory name = public
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes/routes");
app.use(routes);
const htmlRoutes = require("./routes/htmlroutes");
app.use(htmlRoutes);


//port listener
app.listen(PORT, () => console.log("Server listening on port " + PORT));