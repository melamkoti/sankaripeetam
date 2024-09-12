/*
  Warnings:

  - Added the required column `price` to the `CartProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `CartProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CartProduct" ADD COLUMN     "image" TEXT,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
