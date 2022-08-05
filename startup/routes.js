const express = require('express');
const authenticityRoute = require('../routes/authenticity');
const error = require('../middleware/error');
const cors = require('cors');
const app = express();
module.exports = function(app) {
  app.use(express.json());
  app.use(express.urlencoded({extended:true}));
  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });
  app.use(cors({
    origin: '*'
  }));
  
  //app.use("/api/humidity", humidityRoute);
  app.use("/api/authenticity", authenticityRoute);
  app.use("/api/authenticity/:id", authenticityRoute);
  app.use(error);


}