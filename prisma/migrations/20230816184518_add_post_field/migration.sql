/*
  Warnings:

  - You are about to alter the column `imagePosition` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - Made the column `content` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Post` ADD COLUMN `background` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `content` VARCHAR(191) NOT NULL,
    MODIFY `imagePosition` ENUM('LEFT', 'RIGHT') NOT NULL;
