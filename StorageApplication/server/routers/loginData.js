const express = require('express');
var router = express.Router();
import con from '../database';

router.get('/logindata',function(req,res){
    con.query('SELECT username, password FROM `user`;',function(error,rows,fields){
        if(error) console.log(error);
        else res.send(rows);
    });
});
export default router;