const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'istorage'
});

const server = app.listen(4550, function(){
    const host = server.address().address
    const port = server.address().port
    console.log("start");
});

con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});

var users = [];
app.get('/user',function(req,res){
    con.query('SELECT * FROM `user` order by full_name',function(error,rows,fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});

app.get('/accordingToTheBrand',function(req,res){
    con.query('SELECT b.brand_name, Sum(s.amount) As berendeltDb FROM stock As s INNER JOIN phone As p On s.phoneID = p.id INNER JOIN brand AS b On p.brandID = b.id Where 1 GROUP by b.brand_name;',function(error,rows,fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});

// allPlaces = currentlyInStock + soMuchSpace (mert mindig levonja h hány hely van)
app.get('/currentlyInStock',function(req,res){
    con.query('SELECT Sum(stock.amount)as `beerkezett` FROM `stock` Inner JOIN status on status.id = stock.statusID WHERE status.status = "Beérkezett" && `warehouseID`=1;',function(error,rows,fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send({number:rows[0].beerkezett});
        }
    });
});



