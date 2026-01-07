require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

// app.use(cors());

app.use(
  cors({
    origin: "*",
    credentials: true
  })
);

app.use(express.json());

app.use("/api/admin", require("./routes/admin.routes"));
app.use("/api/leads", require("./routes/lead.routes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
