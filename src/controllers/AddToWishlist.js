const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const addToWishlist = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    // Check if wishlist exists for the user, create one if not
    let wishlist = await prisma.wishlist.findUnique({
      where: { userId },
      include: { products: true },
    });

    if (!wishlist) {
      wishlist = await prisma.wishlist.create({
        data: { user: { connect: { id: userId } } },
      });
    }

    // Check if the product is already in the wishlist
    const existingProduct = await prisma.wishlistProduct.findFirst({
      where: { wishlistId: wishlist.id, productId },
    });

    if (existingProduct) {
      return res.status(400).json({ message: "Product already in wishlist" });
    }

    // Add product to the wishlist
    await prisma.wishlistProduct.create({
      data: { wishlistId: wishlist.id, productId },
    });

    res.status(200).json({ message: "Product added to wishlist" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = addToWishlist;
