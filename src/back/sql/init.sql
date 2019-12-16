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
  `active` TINYINT(4) NOT NULL,
  `start-date` DATETIME NULL DEFAULT NULL,
  `end-date` DATETIME NULL DEFAULT NULL,
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
  `main_img` TINYINT(4) NULL DEFAULT NULL,
  `portfolio_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_images_portfolio1_idx` (`portfolio_id` ASC) ,
  CONSTRAINT `fk_images_portfolio1`
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
  `login` VARCHAR(70) NOT NULL,
  `password` VARCHAR(70) NOT NULL,
  `users_status_id1` INT(11) NOT NULL,
  `portfolio_id` INT(11) NOT NULL,
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
-- Ajout champ "style" dans table portfolio
-- -----------------------------------------------------
ALTER TABLE portfolio ADD style TEXT;