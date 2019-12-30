const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var urlencodedParser = require('urlencoded-parser');

const port = process.env.PORT || 3000;
app.use(bodyParser.json())
app.use( express.static(__dirname + '/../client') );
app.use(bodyParser.urlencoded({ extended: true }));
app.use(urlencodedParser);

var path = 'C:\\Users\\DELL I5\\Desktop\\MINIAPPS\\rbktn01-mini-apps-1\\challenge_2\\client\\index.html'

app.get('/', (req, res) => {
    res.sendfile(path);
 })


app.post('/', (req, res) => {
   var object = ( JSON.parse(req.body.JSO) );
   var csvType = convertToCSV(object);
   
   console.log(csvType)
    res.end();
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function convertToCSV(jsonObject){
    let resultStr = '';
    let keys = Object.keys(jsonObject);
    keys.pop();


    for (let i = 0; i < keys.length; i++) {
            resultStr+=`${keys[i]},`;
    }
    resultStr = resultStr.slice(0,resultStr.length-1);
    resultStr+='\n';

    function getAllValue(e){
        let values = Object.values(e);
        var temp;

        for (let i = 0; i < values.length; i++) {
            if (!(typeof values[i] === 'object')) {
                resultStr+=`${values[i]},`;
            }else {
                temp = values[i];
            }
        }
        resultStr = resultStr.slice(0,resultStr.length-1);
        resultStr+='\n';

        if(temp){
        for (let i = 0; i < temp.length; i++) {
            getAllValue(temp[i]);
            }
        }
    }
    getAllValue(jsonObject);
    resultStr = resultStr.slice(0,resultStr.length-1);
    return resultStr;
}