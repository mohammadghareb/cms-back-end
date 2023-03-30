import express from "express";

import loginController from "./loginController";

const router = express.Router();
router.post(
  "/checkCredentials",
  loginController.checkCredentials
);

export default router;
