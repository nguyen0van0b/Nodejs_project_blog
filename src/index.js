const express = require("express");
const { engine, create } = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");

const app = express();
const hbs = create({
   /* config */
   extname: '.hbs'
});
const port = 3000;

//http logger
app.use(morgan("combined"));

//template engine
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname,'public')))

// Routes
app.get("/", function (req, res) {
   res.render("home");
})
app.get("/news", function (req, res) {
   res.render("news");
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
