const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var urlencodedParser = require('urlencoded-parser');

const port =  4000;
app.use(bodyParser.json())


app.use(express.static('dist') );


app.use(bodyParser.urlencoded({ extended: true }));
app.use(urlencodedParser);

 app.listen(port,'127.0.0.127', ()=>{
     console.log('server is walking')
 });
