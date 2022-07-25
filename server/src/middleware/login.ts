import { Response, Request, NextFunction } from "express";

function loginMiddleware(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  if (username === "nut" && password === "123") {
    next();
    return;
  }

  res.json({
    message: "Error to login",
  });
}

export default loginMiddleware;
