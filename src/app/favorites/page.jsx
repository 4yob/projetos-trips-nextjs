"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './favorites.module.css';
import Image from "next/image";
import Header from '../../components/header/Header';
import TripCard from '../../components/tripCard/TripCard';
import FavoriteButton from '../../components/favoriteButton/favoriteButton';

export default function Favorites() {
    const [favoriteTrips, setFavoriteTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchFavoriteTrips = async () => {
        try {
            setError(false);
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/trips/favorites`
            );
            setFavoriteTrips(response.data);
        } catch (error) {
            console.error('Erro ao buscar viagens favoritas:', error);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFavoriteTrips();
    }, []);

    return (
        <div className={styles.page}>
            <Header
                showBackButton={true}
                backUrl="/trips"
                backLabel="Voltar para Viagens"
                customLinks={[
                    { href: "/about", label: "Sobre" }
                ]}
            />
            <main className={styles.main}>
                <h1 className={styles.title}>⭐ Viagens Favoritadas ⭐</h1>

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
                ) : error ? (
                    <div className={styles.errorContainer}>
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
                        <h2 className={styles.errorTitle}>Algum problema está acontecendo!</h2>
                        <p className={styles.errorMessage}>
                            Não foi possível carregar as viagens no momento.
                            Verifique sua conexão e tente novamente.
                        </p>
                        <button
                            className={styles.retryButton}
                            onClick={() => {
                                setLoading(true);
                                fetchTrips();
                            }}
                        >
                            Tente Novamente
                        </button>
                    </div>
                ) : (
                    <>
                        <div className={styles.tripsContainer}>
                            {favoriteTrips.map((favoriteTrip) => (
                                <TripCard key={favoriteTrip.id} trip={favoriteTrip} favoriteButton />
                            ))}
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}
