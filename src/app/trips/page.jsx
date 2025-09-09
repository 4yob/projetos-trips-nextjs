"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./trips.module.css";
import Image from "next/image";
import Link from "next/link";

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
            <header className={styles.header}>
                <Image
                        src="/icons/logo.png"
                        alt="Logo TRIPS.COM"
                        width={50}
                        height={50}
                        className={styles.logo}
                    />
                <Link href="/" className={styles.navLink}>Home</Link>
                <Link href="/favorites" className={styles.navLink}>Destaques</Link>
                <Link href="/about" className={styles.navLink}>Sobre</Link>
            </header>
            <main className={styles.main}>
                <h1 className={styles.title}>Minhas Viagens</h1>

                {loading ? (
                    <div className={styles.loading}>
                        <p>Carregando Viagens . . .</p>
                    </div>
                ) : (
                    <>
                        <div className={styles.tripsContainer}>
                            {trips.map((trip) => (
                                <Link
                                key={trip.id}
                                href={`/trips/${trip.id}`}
                                className={styles.tripLink}
                                >
                                <div className={styles.tripCard}>
                                    <img className={styles.tripImage} src={`/img/${trip.photo}`} alt={trip.title} />
                                    <h3>{trip.title}</h3>
                                    <h4>{trip.place} - {trip.country}</h4>
                                    <p>{trip.start_date}</p>
                                    <p>{trip.end_date}</p>
                                    <p>{trip.created_at}</p>
                                </div>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}
