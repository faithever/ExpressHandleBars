
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

const logger = function(req, res, next){
   console.log("connection: " + `${req.protocol}::\/\/${req.get('host')}${req.originalUrl}`);
   next();
}

//logger 
app.use(logger);

//Set View Engine
//Please note : handlebars name is extension of files handling handlebar files (e.g: main.handlebars)
app.engine('handlebars', exphbs({
   extname:'handlebars',
   defaultLayout: 'main',
   layoutsDir: __dirname + '/views/layouts/',
   partialsDir: __dirname + '/views/partials/',
}));
app.set('view engine', 'handlebars');

//body parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//loading index handlebar age
app.get('/', (req, res) => {res.render('index', {
   title: 'Member App',
   Greet: "Hello world"
})});
app.use(express.static(path.join(__dirname, 'public')));

//Using Static folter

//Connection part.
const PORT = 8888;

app.listen(PORT, function(){
         console.log("connection is OK......");
      });

