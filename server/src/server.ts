import express, { Request, Response } from "express";
import Table from './Routers/Table.js'
import {Tables, checkConnection} from './Database/db.js'

const app = express();

checkConnection()

// start api 

app.use('/api',Table)



app.listen(3000, () => console.log("Server running on port 3000"));
