const express = require("express");
const cors = require("cors");
const plannerRoutes = require("./routes/plannerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", plannerRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
