/*
  Warnings:

  - You are about to drop the `_GroupToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_GroupToUser` DROP FOREIGN KEY `_GroupToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_GroupToUser` DROP FOREIGN KEY `_GroupToUser_B_fkey`;

-- DropTable
DROP TABLE `_GroupToUser`;
