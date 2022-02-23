const express = require('express');
var router = express.Router();
import con from '../database';

router.get('/warehouseData',function(req,res){
    con.query('SELECT * FROM `warehouse` WHERE 1;',function(error,rows,fields){
        if(error) console.log(error);
        else res.send(rows[0]);
    });
});
export default router;