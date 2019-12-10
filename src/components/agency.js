import React from 'react';
import CarrouselAgency from './carrouselAgency'
import './agency.css'

export default function Agency() {
    return (
        <div className="agencyContainer">
            <h1 className="title">L'AGENCE</h1>
            <CarrouselAgency />
        </div>
    )
}