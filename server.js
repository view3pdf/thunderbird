const express = require('express');
const db = require('./db'); 
//const dbu = require('./dbu');// Import the database connection module
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
const indexRouter = require('./routes/index');
const backend = require('./routes/backend');
const login = require('./routes/login');


const app = express();
app.use(express.static('public'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to pass the database connection to every route
app.use((req, res, next) => {
  req.db = db; 
  //req.dbu = dbu;// Attach the database connection to the request object
  next();
});







// Define a route to run index page automode on 
app.use('/',indexRouter);
app.use(express.urlencoded({ extended: true }));
app.use('/backend',backend );
app.use('/login',login );







// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

