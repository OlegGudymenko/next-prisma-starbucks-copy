/*
  Warnings:

  - You are about to drop the column `idAddress` on the `ClientInfo` table. All the data in the column will be lost.
  - Added the required column `ipAddress` to the `ClientInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ClientInfo` DROP COLUMN `idAddress`,
    ADD COLUMN `ipAddress` VARCHAR(191) NOT NULL;
