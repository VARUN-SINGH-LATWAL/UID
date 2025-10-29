import express, { Request, Response } from "express";
import Table from './Routers/Table.js'

const app = express();

app.use('/',Table)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express!");
});



app.listen(3000, () => console.log("Server running on port 3000"));
