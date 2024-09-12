const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const { userId, productId, qty } = req.body;

  try {
    const existingCartItem = await prisma.cartProduct.findFirst({
      where: { userId, productId },
    });

    if (existingCartItem) {
      const updatedCartItem = await prisma.cartProduct.update({
        where: { id: existingCartItem.id },
        data: { qty: existingCartItem.qty + qty },
      });
      return res.json(updatedCartItem);
    } else {
      const newCartItem = await prisma.cartProduct.create({
        data: { userId, productId, qty },
      });
      return res.json(newCartItem);
    }
    const cartItems = await prisma.cartProduct.findMany({
      where: { userId },
    });

    // Calculate the total quantity of items in the cart
    const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

    // Respond with the updated item and total cart count
    res.json({ totalItems });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "Failed to add product to cart" });
  }
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const cartItems = await prisma.cartProduct.findMany({
      where: { userId: Number(userId) },
      include: { product: true },
    });

    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error fetching  items:", error);
    res.status(500).json({ error: "Failed to fetch  items" });
  }
});
router.get("/", async (req, res) => {
  try {
    const cartItems = await prisma.cartProduct.findMany();
    res.json(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
});
router.get("/item/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const count = await prisma.cartProduct.count({
      where: { userId: Number(userId) },
    });

    res.json({ productCount: count });
  } catch (error) {
    console.error("Error fetching product count:", error);
    res.status(500).json({ error: "Failed to fetch product count" });
  }
});
router.put("/update/:id", async (req, res) => {
  const cartProductId = parseInt(req.params.id, 10);
  const { qty } = req.body;

  if (!qty || qty < 0) {
    return res.status(400).json({ message: "Invalid quantity" });
  }

  try {
    const cartItem = await prisma.cartProduct.findUnique({
      where: { id: cartProductId },
    });
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    const updatedCartItem = await prisma.cartProduct.update({
      where: { id: cartProductId },
      data: { qty },
    });

    res.status(200).json({ message: "Cart item updated", updatedCartItem });
  } catch (error) {
    res.status(500).json({ message: "Error updating cart item", error });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const cartProductId = parseInt(req.params.id, 10);

  try {
    const cartItem = await prisma.cartProduct.findUnique({
      where: {
        id: cartProductId,
      },
    });

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    // Delete the cart item
    await prisma.cartProduct.delete({
      where: {
        id: cartProductId,
      },
    });

    return res.status(200).json({ message: "Cart item deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error occurred while deleting the item" });
  }
});

module.exports = router;
