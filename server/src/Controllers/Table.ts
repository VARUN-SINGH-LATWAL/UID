import { Request, Response } from "express";

function getPieces(req: Request, res: Response) {
  try {
    const query = ''
  } catch (error) {
    console.log(error)
    res.status(500).json({
        success : false,
        massage : "some error come"
    })
  }
}

export { getPieces };
