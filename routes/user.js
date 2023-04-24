import express from "express";
import { userList } from "../controllers/userCtrl.js";

const router=express.Router()

router.get('/', userList )

export default router;