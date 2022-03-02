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


//SELECT b.brand_name,m.model_name,col.phone_color,cap.capacity,s.amount FROM `stock` as s INNER JOIN phone as p ON p.id = s.phoneID INNER JOIN brand as b ON b.id = p.brandID INNER JOIN model as m ON m.id = p.modelID INNER JOIN color as col ON col.id = p.colorID INNER JOIN capacity as cap ON cap.id = p.capacityID WHERE s.statusID = 3 AND s.warehouseID=1 ORDER BY b.brand_name;