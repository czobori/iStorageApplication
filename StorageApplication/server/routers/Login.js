const express = require('express');
const argon2 = require('argon2');
var router = express.Router();
import con from '../database';

router.POST('/Login',function(req,res){
   //req.body.username
   //req.body.password

   con.query('select password from user where username = &{res.body.username}', [req.body.username], async (err, results) => {
      try {
        if (await argon2.verify(results[0].password, req.body.password)) {
            res.send('auth_success');
        } else {
            res.send('auth_failed');
        } 
      }catch (err) {
        console.log(err);
      }
   });
});
export default router;