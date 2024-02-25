import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router.js";

const app = Express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

