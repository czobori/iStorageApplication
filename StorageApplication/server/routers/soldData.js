const express = require('express');
var router = express.Router();
import con from '../database';

router.get('/sold',function(req,res){
    con.query('SELECT o.date,c.client_name,b.brand_name,m.model_name,col.phone_color,cap.capacity,o.amount FROM `order` as o INNER JOIN user as u ON u.id = o.user_ID INNER JOIN phone as p ON p.id = o.phone_ID INNER JOIN brand as b ON p.brandID = b.id INNER JOIN model as m ON m.id = p.modelID INNER JOIN color as col ON col.id=p.colorID INNER JOIN capacity as cap ON cap.id=p.capacityID INNER JOIN client as c ON c.id = o.clientID WHERE YEAR(o.date) = YEAR(CURRENT_DATE()) AND MONTH(o.date) = MONTH(CURRENT_DATE()) AND o.status ="Eladva" AND o.warehouse_ID=1 ORDER BY `date` DESC;',function(error,rows,fields){
        if(error) console.log(error);
        else res.send(rows);
    });
});
export default router;