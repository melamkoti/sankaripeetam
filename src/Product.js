const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

const AddToCart = require("./controllers/AddToCart");
const AddToWishlist = require("./controllers/AddToWishlist");

router.get("/", async (req, res) => {
  try {
    const product = await prisma.product.findMany();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
});

router.post("/cart/add", AddToCart);
router.post("/wishlist/add", AddToWishlist);
module.exports = router;
