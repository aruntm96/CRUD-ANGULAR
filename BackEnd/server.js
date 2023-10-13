var express = require('express');
var server = express();
var routes = require('./routes/routes');
const cors = require('cors');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/project_details",{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting with MongoDB', error);
  });

server.use(cors());

server.use(express.json());
server.use(routes);


server.listen(8000,
    function check(error)
    {
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log("Server established!");
        }
    } );

