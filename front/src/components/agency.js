import React from "react";
import { Container, Row, Col } from "reactstrap";
import CarrouselAgency from "./carrouselAgency";
import "./agency.css";

export default function Agency() {
  return (
      <Container>
        <h1 className="HeaderSection">
          <div className="FirstLineAgency" data-aos="fade-right">
            Une agence
          </div>
          <div className="SecondLineAgency" data-aos="fade-left">
            de TATOUAGE
          </div>
          <div className="ThirdLineAgency" data-aos="fade-right">
            au service de vos projets
          </div>
        </h1>
        <div data-aos="zoom-in">
          <CarrouselAgency />
        </div>
        <Row>
          <Col xs="12" md="6" data-aos="fade-right">
            <div className="aboutAgency">
              <p className="TextSub-Agency">
                Conçu comme une agence de design, le tattoo shop PIQUEUR DE RUE
                se veut être à l'écoute des clients et offrir un suivi de
                qualité. Vous rentrez, vous vous asseyez et nous élaborons
                ensemble la meilleure approche de votre projet tattoo autour
                d'un café. Nous tenterons de répondre à toutes vos questions et
                vous expliquerons toutes les étapes de réalisation de votre
                projet.
              </p>
            </div>
          </Col>
          <Col xs="12" md="6">
            <div className="aboutAgency2" data-aos="fade-left">
              <p className="TextSub-Agency">
                Pour que vous puissiez avoir le meilleur recul sur ce que pourra
                rendre votre tatouage une fois terminé, nous réaliserons une
                simulation à l'aide de photos de vous "type studio" qui seront
                prises dans le shop. Une fois le projet validé, et votre
                tatouage terminé, vous repartirez avec un "paper bag" contenant
                la plaquette de soins une crème pour vos premières semaines
                ainsi qu’une collation.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
  );
}
