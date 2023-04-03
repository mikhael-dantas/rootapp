import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());


app.get("/", async (req: Request, res: Response) => {
  res.statusCode = 200
  res.write("hello world")
  res.end()
})


app.listen(process.env.SERVER_PORT, () => {
  console.log("Server is running on port 3001");
});
