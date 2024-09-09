/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageUrl",
DROP COLUMN "name",
ADD COLUMN     "image" TEXT,
ADD COLUMN     "qty" TEXT,
ADD COLUMN     "title" TEXT;
