import express from "express";
const router = express.Router()
import {getPieces} from '../Controllers/Table.js'

router.get('/getPieces/:id',getPieces)

export default router;