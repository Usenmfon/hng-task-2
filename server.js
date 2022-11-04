const express = require("express");
const { json } = require("express");
const cors = require("cors");
const routes = require("./src/routes/arithmetic")

const app = express();

app.use(cors());

app.use(json());

app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
