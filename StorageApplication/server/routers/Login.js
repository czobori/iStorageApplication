const express = require('express');
const argon2 = require('argon2');
var router = express.Router();
import con from '../database';

router.post('/Login',function(req,res){
    con.query('select password from user where username = ?', [req.body.username], async (err, results)=>{
        try {
            if(await argon2.verify(results[0].password,req.body.password)){
                res.send('auth_success');
            }else{
                res.send('auth_failed');
            }
        } catch (err){
            console.log(err);
        }
    });
});
export default router;