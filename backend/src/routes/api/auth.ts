import User from "@/models/User.js";
import { getGlobalRoleByUserId } from "@/services/globalRoleHolder.js";
import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

export const ensureAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Authorisation required." }); // Unauthorized
};

router.get("/user", (req: Request, res: Response) => {
  res.status(200).json(req.user ? req.user : null);
});

router.get(
  "/role",
  ensureAuthenticated,
  async (req: Request, res: Response) => {
    res.status(200).json(await getGlobalRoleByUserId((req.user! as User).id));
  }
);

router.post("/logout", function (req: Request, res: Response) {
  req.logout((err: Error) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Unexpected error." });
    }
    return res.status(200).json({ message: "log-out successful" });
  });
});

export default router;
