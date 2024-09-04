import express from "express";
const indexRoute = express.Router();
import { indexController } from "../controllers/index.controller.js";

indexRoute.get('/',indexController)


export default indexRoute;