const mysql = require('mysql');
const con = mysql.createConnection({
    host: '185.111.89.177',
    user: 'gamersme_vince',
    password: '1234Admin1234',
    database: 'gamersme_istorage'
});
con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});
export default con;