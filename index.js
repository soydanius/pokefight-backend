import express from "express";
import pokemonRouter from "./routes/pokemonRouter.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.use("/pokemon", pokemonRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
