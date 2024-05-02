/*
  Warnings:

  - You are about to drop the column `image_url` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `deliveryTime` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryTimeMinutes` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "image_url",
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "deliveryTime",
ADD COLUMN     "deliveryTimeMinutes" INTEGER NOT NULL;
