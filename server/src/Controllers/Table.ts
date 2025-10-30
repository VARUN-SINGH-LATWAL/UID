import { Request, Response } from "express";

function getPieces(req: Request, res: Response) {
  res.send("working");
}

export { getPieces };
