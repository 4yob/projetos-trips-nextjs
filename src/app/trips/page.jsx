"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./trips.module.css";
import Image from "next/image";
import Header from '../../components/header/Header';
import TripCard from '../../components/tripCard/TripCard';

export default function Trips() {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTrips = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/trips`
            );
            setTrips(response.data);
        } catch (error) {
            console.error("Erro ao buscar viagens:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTrips();
    }, []);

    return (
        <div className={styles.page}>
            <Header 
                customLinks={[
                    { href: "/favorites", label: "Favoritos" },
                    { href: "/about", label: "Sobre" }
                ]}
            />

            <main className={styles.main}>
                <h1 className={styles.title}>Galeria de Viagens</h1>

                {loading ? (
                    <div className={styles.loading}>
                        <div className={styles.loadingPlane}>
                            <Image
                                src="/icons/logo.png"
                                alt="Avião carregando"
                                width={48}
                                height={48}
                                className={styles.loadingPlaneImage}
                            />
                        </div>
                        <div className={styles.loadingText}>
                            <span>Preparando as aventuras</span>
                        <p className={styles.loadingSubtext}>Relembrando destinos incríveis...</p>
                            <div className={styles.loadingDots}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className={styles.tripsContainer}>
                            {trips.map((trip) => (
                                <TripCard key={trip.id} trip={trip} />
                            ))}
                        </div>
                    </>
                )}
            </main>
            <div className={styles.planeContainer}>
                <div className={styles.plane} aria-hidden="true">
                    <Image
                        src="/icons/logo.png"
                        alt="TRIPS logo em voo"
                        width={64}
                        height={64}
                        className={styles.planeImage}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
