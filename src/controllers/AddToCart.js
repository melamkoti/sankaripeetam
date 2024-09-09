const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addToCart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    // Check if cart exists for the user, create one if not
    let cart = await prisma.cart.findUnique({
      where: { userId },
      include: { products: true },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: { user: { connect: { id: userId } } },
      });
    }

    // Check if the product is already in the cart
    const existingProduct = await prisma.cartProduct.findFirst({
      where: { cartId: cart.id, productId },
    });

    if (existingProduct) {
      return res.status(400).json({ message: "Product already in cart" });
    }

    // Add product to the cart
    await prisma.cartProduct.create({
      data: { cartId: cart.id, productId },
    });

    res.status(200).json({ message: "Product added to cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = addToCart;
