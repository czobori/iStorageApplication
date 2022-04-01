const mysql = require('mysql');
const con = mysql.createConnection({
    host: '130.61.174.6',
    user: 'effi',
    password: '123',
    database: 'istorage'
});
con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});
export default con;