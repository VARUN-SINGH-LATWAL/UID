import express from "express";
const router = express.Router()
import {getOrangeTable} from '../Controllers/Table.js'

router.get('/getOrangeTable',getOrangeTable)

export default router;