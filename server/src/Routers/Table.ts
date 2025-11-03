import express from "express";
const router = express.Router()
import {getPieces, getPieces2} from '../Controllers/Table.js'

router.get('/getPieces/:id',getPieces)
router.get('/getPieces2/:id',getPieces2)

export default router;