import express from "express";
import cors from "cors";
import login from "./controllers/login";

const app: express.Application = express();
const port = 8080; // default port to listen
 
type callBackFunction = (
  origin: Error | null,
  originIsWhitelisted: boolean
) => unknown;

const corsOptions = {
  origin(
    origin: Error | null | undefined | string,
    callback: callBackFunction
  ) {
    const originIsWhitelisted = true;
    callback(null, originIsWhitelisted);
  }
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/login", login);

app.listen(port, async () => {
  console.log(`Server running at port: ${port}`);
});

app.get("/", function (req, res) {
  res.send(`Server running at port`);
});
