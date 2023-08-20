-- CreateTable
CREATE TABLE `ClientInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `screenSize` VARCHAR(191) NOT NULL,
    `idAddress` VARCHAR(191) NOT NULL,
    `userAgent` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Action` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `postId` INTEGER NOT NULL,
    `position` INTEGER NOT NULL,
    `clientInfoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
