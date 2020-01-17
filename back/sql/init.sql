-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema piqueurderue
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema piqueurderue
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `piqueurderue` DEFAULT CHARACTER SET utf8 ;
USE `piqueurderue` ;

-- -----------------------------------------------------
-- Table `piqueurderue`.`portfolio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `piqueurderue`.`portfolio` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `pseudo` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NULL DEFAULT NULL,
  `presentation` VARCHAR(255) NULL DEFAULT NULL,
  `insta` VARCHAR(255) NULL DEFAULT NULL,
  `active` TINYINT(4) NOT NULL,
  `startdate` VARCHAR(255) NULL DEFAULT NULL,
  `enddate` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `piqueurderue`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `piqueurderue`.`images` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `alt_text` VARCHAR(255) NULL DEFAULT NULL,
  `active` TINYINT(4) NOT NULL,
  `path` VARCHAR(255) NOT NULL,
  `main_img` VARCHAR(255) NULL DEFAULT NULL,
  `portfolio_id` INT(11) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_images_portfolio1_idx` (`portfolio_id` ASC) ,
    FOREIGN KEY (`portfolio_id`)
    REFERENCES `piqueurderue`.`portfolio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `piqueurderue`.`users_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `piqueurderue`.`users_status` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `permanent` TINYINT(4) NULL DEFAULT NULL,
  `guest` TINYINT(4) NULL DEFAULT NULL,
  `inactive` TINYINT(4) NULL DEFAULT NULL,
  `admin` TINYINT(4) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `piqueurderue`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `piqueurderue`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(70) NULL,
  `password` VARCHAR(70) NULL,
  `users_status_id1` INT(11) NULL,
  `portfolio_id` INT(11) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_users_status1_idx` (`users_status_id1` ASC) ,
  INDEX `fk_users_portfolio1_idx` (`portfolio_id` ASC) ,
  CONSTRAINT `fk_users_portfolio1`
    FOREIGN KEY (`portfolio_id`)
    REFERENCES `piqueurderue`.`portfolio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_users_status1`
    FOREIGN KEY (`users_status_id1`)
    REFERENCES `piqueurderue`.`users_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Table `piqueurderue`.`users_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `piqueurderue`.`users_status` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `permanent` TINYINT(4) NULL DEFAULT NULL,
  `guest` TINYINT(4) NULL DEFAULT NULL,
  `inactive` TINYINT(4) NULL DEFAULT NULL,
  `admin` TINYINT(4) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `piqueurderue`.`customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `piqueurderue`.`customers` (
  `id` INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(70) NOT NULL,
  `lastName` VARCHAR(70) NOT NULL,
  `age` INT(11) NULL,
  `phone` VARCHAR(15) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `tattoolocation` TEXT NULL,
  `hauteur` INT NULL,
  `largeur` INT NULL,
  `budget` INT NULL,
  `story` TEXT NULL
);

-- -----------------------------------------------------
-- Table `piqueurderue`.`guests`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `piqueurderue`.`guests` (
  `id` INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstNameG` VARCHAR(70) NOT NULL,
  `lastNameG` VARCHAR(70) NOT NULL,
  `pseudoG` VARCHAR(70) NULL,
  `phoneG` VARCHAR(15) NOT NULL,
  `emailG` VARCHAR(150) NOT NULL,
  `compteG` VARCHAR(70) NULL,
  `storyG` TEXT NULL
);


-- -----------------------------------------------------
-- Modifs
-- -----------------------------------------------------
ALTER TABLE portfolio ADD style TEXT;
ALTER TABLE portfolio MODIFY presentation text;
ALTER TABLE portfolio ADD photo TEXT;