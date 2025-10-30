import { Request, Response } from "express";
import { Tables } from "../Database/db.js";

async function getPieces(req: Request, res: Response) {

    interface Piece {
  NumOrd: number;
  CodPie: string;
  ProPie: string;
  PlaPie: string;
  PieFin: string;
  PreAce: string;
  GRADE: string;
  QTY: number;
  OD: string;
  LENGTH: string;
  ID: string;
  ELEMENT: string;
  ORDERDATE: string;
}



  try {
    const { id } = req.params;

    // Validate input
    if (!id || isNaN(Number(id))) {
      return res.status(400).json({
        success: false,
        message: "Invalid or missing 'id' parameter.",
      });
    }

    // Construct query safely
    const query = `
      SELECT 
        [ordenes de fabricación (piezas)].NumOrd,
        [ordenes de fabricación (piezas)].CodPie,
        [ordenes de fabricación (piezas)].ProPie,
        [ordenes de fabricación (piezas)].PlaPie,
        [ordenes de fabricación (piezas)].PieFin,
        [ordenes de fabricación (piezas)].PreAce,
        [ordenes de fabricación (piezas)].GRADE,
        [ordenes de fabricación (piezas)].QTY,
        [ordenes de fabricación (piezas)].OD,
        [ordenes de fabricación (piezas)].LENGTH,
        [ordenes de fabricación (piezas)].ID,
        [ordenes de fabricación (piezas)].ELEMENT,
        [ordenes de fabricación (piezas)].ORDERDATE,
        CarbideOrderHistory.UID AS HistoryUID
      FROM [ordenes de fabricación (piezas)]
      LEFT JOIN CarbideOrderHistory 
        ON [ordenes de fabricación (piezas)].NumOrd = CarbideOrderHistory.UID
      WHERE [ordenes de fabricación (piezas)].NumOrd = ${Number(id)};
    `;

    const result : Piece[] = await Tables.query(query);

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
