import express from "express";
import loginMiddleware from "./middleware/login";
import { Response, Request } from "express";
import generateToken from "./helper/generateToken";

const app = express();

app.use(express.json());

app.post("/login", loginMiddleware, (req: Request, res: Response) => {
  const { username } = req.body;

  const token = generateToken({ username });
  res.json({
    token: token,
    message: "success",
  });
});

app.listen(8000, () => {
  console.log("running on port 8000");
});
