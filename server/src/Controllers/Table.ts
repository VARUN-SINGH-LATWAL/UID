import { Request, Response } from "express";
import { Tables } from "../Database/db.js";

interface Piece {
  UID: number;
  GRADE: string;
  QTY: number;
  OD: number;
  LENGTH: number;
  ID: number;
  ELEMENT: string;
  ORDERDATE: string;
}
async function getPieces(req: Request, res: Response) {
  try {
    const { id } = req.params;

    // Validate input
    if (!id || isNaN(Number(id))) {
      return res.status(400).json({
        success: false,
        message: "Invalid or missing 'id' parameter.",
      });
    }

    console.log(id);

    // Construct query safely
    const query = `
     SELECT UID,GRADE,QTY,OD,LENGTH,ID,ELEMENT,ORDERDATE
     FROM CarbideOrderHistory  where UID=${id}`;
    const result: Piece[] = await Tables.query(query);

    if (!result || result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No data found for the given ID.",
        data: [],
      });
    }

    // Successful response
    return res.status(200).json({
      success: true,
      message: "Data retrieved successfully.",
      count: result.length,
      data: result,
    });
  } catch (error: any) {
    console.error("Error fetching pieces:", error);

    return res.status(500).json({
      success: false,
      message: "An internal server error occurred.",
      error: error.message || error,
    });
  }
}

export { getPieces };
