const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const Product = require("./src/Product");
dotenv.config();
const Register = require("./src/Register");
const Activity = require("./src/Activity");

const PORT = process.env.PORT || 3001;
const app = express();

const corsOptions = {
  origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
  methods: ["GET", "POST", "UPDATE", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/user", Register);
app.use("/activities", Activity);
app.use("/product", Product);

app.listen(PORT, () => console.log(`app is running on ${PORT}`));
