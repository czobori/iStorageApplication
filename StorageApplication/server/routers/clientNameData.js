const express = require('express');
var router = express.Router();
import con from '../database';

router.get('/clientNames',function(req,res){
    con.query('SELECT client_name FROM `client` ORDER BY `client`.`client_name` ASC',function(error,rows,fields){
        if(error) console.log(error);
        else res.send(rows);
    });
});
export default router;