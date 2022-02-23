const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
import userdata from './routers/usersData';
import brandData from './routers/brandAccordData';
import currentData from './routers/currentlyinstockData';
import deliverynumber from './routers/deliveryToStorageData';

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(userdata);
app.use(brandData);
app.use(currentData);
app.use(deliverynumber);

const server = app.listen(4550, function(){
    const host = server.address().address
    const port = server.address().port
    console.log("start");
});