const express = require('express');
var router = express.Router();
import con from '../database';

router.get('/deliveryToStorage',function(req,res){
    con.query('SELECT Sum(stock.amount)as `raktarbaJon` FROM `stock` WHERE stock.statusID="1"',function(error,rows,fields){
        if(error) console.log(error);
        else res.send(rows[0]);
    });
});
export default router;