import { Request, Response } from "express";

export function handleUserData(req: Request, res: Response) {
  return res.json({ message: "here your data" });
}
