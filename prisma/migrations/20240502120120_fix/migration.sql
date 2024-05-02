/*
  Warnings:

  - You are about to drop the column `image_url` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "image_url",
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "image_url",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
