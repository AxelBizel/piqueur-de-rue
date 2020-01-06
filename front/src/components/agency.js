import React from 'react';
import CarrouselAgency from './carrouselAgency'
import './agency.css'

export default function Agency() {
    return (
        <div className="SectionContainer">
            <h1 className="HeaderSection">L'AGENCE</h1>
            <CarrouselAgency />
            <p className="aboutAgency"><h2>"Une agence de tatouage au service de vos projets"</h2><br/>Conçu comme une agence de design, le tattoo shop PIQUEUR DE RUE se veut être à l'écoute des clients et offrir un suivi de qualité.
            Vous rentrez, vous vous asseyez et nous élaborons ensemble la meilleure approche de votre projet tattoo autour d'un café. Nous tenterons de répondre à toutes vos questions et vous expliquerons toutes les étapes de réalisation de votre projet.<br/><br/>
            Pour que vous puissiez avoir le meilleur recul sur ce que pourra rendre votre tatouage une fois terminé, nous réaliserons une simulation à l'aide de photos de vous "type studio" qui seront prises dans le shop.
            Une fois le projet validé, et votre tatouage terminé, vous repartirez avec un "paper bag" contenant la plaquette de soins une crème pour vos premières semaines ainsi qu’une collation.</p>
        </div>
    )
}