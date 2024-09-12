/*
  Warnings:

  - You are about to drop the column `image` on the `CartProduct` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `CartProduct` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `CartProduct` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CartProduct" DROP COLUMN "image",
DROP COLUMN "price",
DROP COLUMN "title";
