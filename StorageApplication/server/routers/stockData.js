const express = require('express');
var router = express.Router();
import con from '../database';

router.get('/stock',function(req,res){
    con.query('SELECT * FROM `stock` WHERE statusID=1 ORDER BY `stock`.`date` DESC;',function(error,rows,fields){
        if(error) console.log(error);
        else res.send(rows);
    });
});
export default router;