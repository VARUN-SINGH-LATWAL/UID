import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express!");
});

app.get("/Home", (req: Request, res: Response) => {
  res.send("Home, Page ");
});



app.listen(3000, () => console.log("Server running on port 3000"));
