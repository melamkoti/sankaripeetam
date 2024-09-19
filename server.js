const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const Product = require("./src/Product");
dotenv.config();
const Register = require("./src/Register");
const Activity = require("./src/Activity");
const EventsRoutes = require("./src/EventsRoutes");
const Posts = require("./src/Posts");
const Contact = require("./src/ContactUs");
const Cart = require("./src/Cart");
const PORT = process.env.PORT || 3001;
const app = express();

const corsOptions = {
  origin: ["http://127.0.0.1:5174", "http://localhost:5174"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use("/imagdata", express.static("imagdata"));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/user", Register);
app.use("/activities", Activity);
app.use("/product", Product);
app.use("/event", EventsRoutes);
app.use("/post", Posts);
app.use("/contact", Contact);
app.use("/cart", Cart);

app.listen(PORT, () => console.log(`app is running on ${PORT}`));
