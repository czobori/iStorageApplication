const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { default: UsersScreen } = require('../screens/UsersScreen');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'istorage'
});

const app = express();

app.get('/user',function(req,res){
    connection.getConnection(function(err,connection){
        connection.query('SELECT * FROM user',function(error,result,fields){
            if(error) throw error;
            res.send(result)
        });
    });
});

app.listen(3000,()=>{
    console.log('Go to http://localhost:3000/user so you can see the data.');
})