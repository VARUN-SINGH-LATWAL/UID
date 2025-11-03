import express from "express";
import Table from './Routers/Table.js';
import { checkConnection } from './Database/db.js';
const app = express();
checkConnection();
const PORT = 3000;
// start api 
app.use('/api', Table);
app.listen(PORT, () => console.log("Server running on port 3000"));
