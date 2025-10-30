import { Request, Response } from "express";

function getOrangeTable(req: Request, res: Response) {
  res.send("working");
}

export { getOrangeTable };
