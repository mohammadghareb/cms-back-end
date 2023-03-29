import express from "express";

import loginController from "./loginController";//will implement later

const router = express.Router();
router.post(
  "/checkCredentials",
  coreController.checkCredentials
);

export default router;
