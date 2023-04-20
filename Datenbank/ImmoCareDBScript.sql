/*--------------------------------------------------------------------------
Setup ImmoCare 
This script completely sets up the ImmoCare database including all tables, 
attributes and indexes. It can be used for an automatic deployment.

Author: Severin Mathis, IMS 
Date: 15.4.2023
History:
Version	Date 	Who 			Changes
1.0 	15.4.23 Severin Mathis created

Copyright © 2023 IMS, Frauenfeld, Switzerland. All rights reserved.
---------------------------------------------------------------*/


-- -----------------------------------------------------
-- Schema ImmoCare
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS ImmoCare DEFAULT CHARACTER SET utf8 ;
USE ImmoCare ;

-- -----------------------------------------------------
-- Table TImmoEigenschaften
-- -----------------------------------------------------
DROP TABLE IF EXISTS TImmoEigenschaften ;

CREATE TABLE IF NOT EXISTS TImmoEigenschaften (
  ImmoEigId INT NOT NULL AUTO_INCREMENT,
  ImmoEigBezeichnung VARCHAR(50) NOT NULL,
  ImmoEigTypen ENUM("Einfamilienhaus", "Reiheneinfamilienhaus", "Mehrfamilienhaus", "Gewerbeliegenschaft", "Wohnung") NOT NULL,
  ImmoEigBaujahr INT NOT NULL,
  ImmoEigGrundstueckflaeche INT NOT NULL,
  ImmoEigWohnflaeche INT NOT NULL,
  ImmoEigAusbaustandart ENUM("einfach", "normal", "luxuriös") NOT NULL,
  ImmoEigAnzahlZimmer INT NOT NULL,
  ImmoEigAndresse VARCHAR(50),
  ImmoEigOrt VARCHAR(30),
  ImmoEigBilder blob,
  PRIMARY KEY (ImmoEigId))
ENGINE = InnoDB AUTO_INCREMENT=1000;

