/*let i = 0
let arr = [1,1]

function find_number(n){
  if(i === n){
    return 
  }
  arr.push(arr[i] + arr[i+1])
  i++
  find_number(n)
}
find_number(5)

console.log(arr[i])

class Train{
  isRunning = false

  constructor(name){
    this.name = name
  }

  depart(){
    this.isRunning = true
  }

  stop(){
    this.isRunning = false
  }

}

const train1 = new Train('frecciarossa')
console.log(train1.isRunning)
console.log(train1.name)
train1.depart()
console.log(train1.isRunning)
train1.stop()
console.log(train1.isRunning)


async function getUsers(names){
  let users = []
  for(let i=0; i < names.length; i++){
    let response = await fetch(`https://api.github.com/users/${names[i]}`)
    let github_res = await response.json()
    if(!github_res.message ){
      users.push(github_res)
    }
    else{
      users.push(null)
    }
  }
  return users
}


async function test(){
  let users = await getUsers(['iliakan', 'remy', 'no.such.users']);
  console.log(users)
}

test()*/

/*
const shape={
  radius:10,
  diameter(){
    return this.radius *2
  },
  perim:()=>
    2*Math.PI*this.radius
  
}
console.log(shape.diameter())
console.log(shape.perim())*/
/*
async function city_info(name){
  let res = await fetch("http://api.waqi.info/feed/milan/?token=94aa37b4e89aade7fa4d52b7b86de7901b04964b")
  let json = await res.json()
  let names = Object.keys(json.data.iaqi)
  let values = Object.values(json.data.iaqi)
}

city_info('')*/

const express = require("express"); 
const morgan = require("morgan"); 
const needle = require("needle"); 
const { createProxyMiddleware } = require("http-proxy-middleware"); 

const app = express(); 

const PORT = process.env.PORT || 3000; 
const HOST = "localhost";

app.use(morgan("dev")); 

app.get('/info', async (req, res, next) => {
  const response = await needle('get', 'https://esploradati.istat.it/SDMXWS/rest/data/IT1,83_63_DF_DCCV_AVQ_PERSONE_235,1.0/A.ITC4.6_BOOK_W.THV..../ALL/?detail=full&startPeriod=2023-01-01&endPeriod=2023-12-31&dimensionAtObservation=TIME_PERIOD&format=jsondata')
  const data = response.body;
  res.status(200).json(data);
});
/*
app.use( 
  "/test", 
  createProxyMiddleware({ 
      target: 'http://www.google.com', 
      changeOrigin: true, 
      pathRewrite: { 
          "^/test": "/", 
      }, 
  }) 
); */

app.listen(PORT, () => { 
  console.log(`Starting Proxy at ${HOST}:${PORT}`); 
});


/*
var http = require('http');
var httpProxy = require('http-proxy');


var proxy = httpProxy.createProxyServer({target:'http://localhost:9000'}).listen(8000)

http.createServer(function(req, res) {
    proxy.web(req, res, { target: 'https://esploradati.istat.it/SDMXWS/rest/data/IT1,83_63_DF_DCCV_AVQ_PERSONE_232,1.0/A......./ALL/?detail=full&startPeriod=2022-12-31&endPeriod=2023-12-31&dimensionAtObservation=TIME_PERIOD' });
}).listen(9000);*/