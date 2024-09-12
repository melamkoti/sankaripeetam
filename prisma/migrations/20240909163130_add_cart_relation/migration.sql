/*
  Warnings:

  - You are about to drop the column `cartId` on the `CartProduct` table. All the data in the column will be lost.
  - You are about to drop the column `cartId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `wishlistId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Wishlist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WishlistProduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `qty` to the `CartProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `CartProduct` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CartProduct" DROP CONSTRAINT "CartProduct_cartId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_cartId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_wishlistId_fkey";

-- DropForeignKey
ALTER TABLE "WishlistProduct" DROP CONSTRAINT "WishlistProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "WishlistProduct" DROP CONSTRAINT "WishlistProduct_wishlistId_fkey";

-- DropIndex
DROP INDEX "User_cartId_key";

-- DropIndex
DROP INDEX "User_wishlistId_key";

-- AlterTable
ALTER TABLE "CartProduct" DROP COLUMN "cartId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "qty" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "cartId",
DROP COLUMN "wishlistId";

-- DropTable
DROP TABLE "Cart";

-- DropTable
DROP TABLE "Wishlist";

-- DropTable
DROP TABLE "WishlistProduct";

-- AddForeignKey
ALTER TABLE "CartProduct" ADD CONSTRAINT "CartProduct_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
