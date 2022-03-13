const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

import userdata from './routers/usersData';
import brandData from './routers/brandAccordData';
import currentData from './routers/currentlyinstockData';
import deliverynumber from './routers/deliveryToStorageData';
import warehouseData from './routers/warehouseData';
import stockData from './routers/stockData';
import soldData from './routers/soldData';
import workersNumber from './routers/workersCount';
import partnerNumber from './routers/partnerNumber';
import clientNames from './routers/clientNameData';
import phoneTypes from './routers/phoneTypesData';
import LoginData from './routers/loginData'

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(userdata);
app.use(brandData);
app.use(currentData);
app.use(deliverynumber);
app.use(warehouseData);
app.use(stockData);
app.use(soldData);
app.use(workersNumber);
app.use(partnerNumber);
app.use(clientNames);
app.use(phoneTypes);
app.use(LoginData);

const server = app.listen(4550, function(){
    const host = server.address().address
    const port = server.address().port
    console.log("start");
});