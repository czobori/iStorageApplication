const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'istorage'
});
con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});
export default con;