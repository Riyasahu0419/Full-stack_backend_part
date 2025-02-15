// require("dotenv").config();
// const express = require("express");
// const connection = require("./config/db");
// const { userRoute } = require("./routes/UserRoute");
// const { ProductRoute } = require("./routes/ProductRoute");
// const cors = require("cors");

// const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//     methods: ["GET,POST,PUT,DELETE"],
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use("/users", userRoute);
// app.use("/Product", ProductRoute);

// const PORT = 8000;
// app.listen(PORT, async () => {
//   try {
//     await connection();
//     console.log("server running successfully");
//   } catch (error) {
//     console.log({ error: error.message });
//   }
// });


require("dotenv").config();
const express = require("express");
const connection = require("./config/db");
const { userRoute } = require("./routes/UserRoute");
const { ProductRoute } = require("./routes/ProductRoute");
const cors = require("cors");

const app = express();

// Enable CORS with correct settings
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Fix method format
    credentials: true,
  })
);

// Handle preflight requests
app.options("*", cors());

app.use(express.json());

// Test route to confirm backend is working
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/users", userRoute);
app.use("/Product", ProductRoute);

const PORT = 8000;
app.listen(PORT, async () => {
  try {
    await connection();
    console.log("Server running successfully on port", PORT);
  } catch (error) {
    console.log({ error: error.message });
  }
});
