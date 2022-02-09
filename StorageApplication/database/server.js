const express = require('express');
const app = express();

const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'istorage'
});

const server = app.listen(4548, function(){
    const host = server.address().address
    const port = server.address().port
    console.log("start");
});

con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});

app.get('/user',function(req,res){
    con.query('SELECT * FROM user',function(error,rows,fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});