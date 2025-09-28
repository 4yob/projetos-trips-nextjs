"use client";

import React from 'react';
import styles from './mapComponent.module.css';

const MapComponent = ({ 
    location,
    place,
    country,
    destination,
    width = "100%", 
    height = "400px",
    zoom = 13,
    className = ""
}) => {
    const getMapLocation = () => {
        if (location && location.trim() !== "") {
            return location.trim();
        }
        
        if (place && country) {
            const countryMap = {
                'FR': 'França',
                'BR': 'Brasil', 
                'JP': 'Japão',
                'PE': 'Peru',
                'GR': 'Grécia',
                'US': 'Estados Unidos',
                'ES': 'Espanha',
                'IS': 'Islândia',
                'IT': 'Itália',
                'TH': 'Tailândia'
            };
            
            const countryName = countryMap[country] || country;
            
            const placeKey = place.toLowerCase();
            const locationMap = {
                "paris": "Paris, França",
                "ipanema": "Ipanema, Rio de Janeiro, Brasil",
                "kyoto": "Kyoto, Japão", 
                "machu picchu": "Machu Picchu, Peru",
                "machupicchu": "Machu Picchu, Peru",
                "macchu picchu": "Machu Picchu, Peru",
                "santorini": "Santorini, Grécia",
                "nova york": "New York, NY, USA",
                "barcelona": "Barcelona, Espanha",
                "islandia": "Reykjavik, Islândia",
                "roma": "Roma, Itália",
                "bangkok": "Bangkok, Tailândia"
            };
            
            return locationMap[placeKey] || `${place.trim()}, ${countryName}`;
        }
        
        if (place && place.trim() !== "") {
            const placeKey = place.trim().toLowerCase();
            
            const locationMap = {
                "paris": "Paris, França",
                "ipanema": "Ipanema, Rio de Janeiro, Brasil",
                "kyoto": "Kyoto, Japão",
                "machu picchu": "Machu Picchu, Peru",
                "santorini": "Santorini, Grécia", 
                "nova york": "New York, NY, USA",
                "barcelona": "Barcelona, Espanha",
                "islandia": "Reykjavik, Islândia",
                "roma": "Roma, Itália",
                "bangkok": "Bangkok, Tailândia"
            };
            
            return locationMap[placeKey] || place.trim();
        }
        
        if (destination && destination.trim() !== "") {
            return destination.trim();
        }
        
        return "Paris, França";
    };
    
    const mapLocation = getMapLocation();
    const encodedLocation = encodeURIComponent(mapLocation);
    
    const mapSrc = `https://maps.google.com/maps?q=${encodedLocation}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    
    return (
        <div className={`${styles.mapContainer} ${className}`}>
            <div className={styles.mapWrapper}>
                <iframe
                    src={mapSrc}
                    width={width}
                    height={height}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${mapLocation}`}
                    className={styles.mapFrame}
                ></iframe>
            </div>

            <div className={styles.mapInfo}>
                <div className={styles.locationName}>
                    📍 {mapLocation}
                </div>
            </div>
        </div>
    );
};

export default MapComponent;