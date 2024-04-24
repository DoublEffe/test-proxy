const express = require("express"); 
const morgan = require("morgan"); 
const needle = require("needle"); 
const cors = require('cors');
const app = express(); 
app.use(cors())

const PORT = process.env.PORT || 3000; 
const HOST = "localhost";

app.use(morgan("dev")); 

app.get('/info/:id', async (req, res, next) => {
  const response = await needle('get', `https://esploradati.istat.it/SDMXWS/rest/data/IT1,83_63_DF_DCCV_AVQ_PERSONE_235,1.0/A.${req.params.id}.6_BOOK_W.THV..../ALL/?detail=full&startPeriod=2023-01-01&endPeriod=2023-12-31&dimensionAtObservation=TIME_PERIOD&format=jsondata`)
  const data = response.body;
  res.status(200).json(data);
});


app.listen(PORT, () => { 
  console.log(`Starting Proxy at ${HOST}:${PORT}`); 
});


