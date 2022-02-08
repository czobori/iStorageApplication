const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

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
}); 



// https://stackoverflow.com/questions/67257267/react-native-mysql-fetching-data-in-my-app
// https://www.tutsmake.com/how-to-send-data-from-react-to-node-js-express-mysql/
