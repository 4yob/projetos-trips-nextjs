"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import MapComponent from "../../../components/mapComponent/mapComponent";
import axios from "axios";
import styles from "./[id].module.css";
import Header from "../../../components/header/Header";

export default function TripDetailsPage({ params }) {
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);

    const resolvedParams = use(params);

    const fetchTrip = async (tripId) => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/trips/${tripId}`
            );
            setTrip(response.data);
        } catch (error) {
            console.error("Erro ao buscar viagem:", error);
            setTrip(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (resolvedParams?.id) {
            fetchTrip(resolvedParams.id);
        }
    }, [resolvedParams?.id]);

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loadingWrapper}>
                    <p className={styles.loadingText}>Carregando detalhes da viagem...</p>
                </div>
            </div>
        );
    }

    if (!trip) {
        return (
            <div className={styles.container}>
                <div className={styles.errorWrapper}>
                    <h3>Viagem não encontrada</h3>
                    <Link href="/trips">Voltar para lista</Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <Header className={styles.header} />
            <div className={styles.tripImageContainer}>
                <img
                    src={`/img/${trip.photo}`}
                    alt={trip.title}
                    className={styles.tripImage}
                />
                <div className={styles.tripTitleContainer}>
                    <h1 className={styles.tripTitle}>{trip.title}</h1>
                </div>
            </div>
            <main className={styles.main}>
                <div className={styles.timelineContainer}>
                    <h2 className={styles.timelineTitle}>Duração da Viagem</h2>

                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineMarker}>1</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineItemTitle}>Chegada</h3>
                                <span className={styles.timelineTime}>{trip.start_date}</span>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineMarker}>2</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineItemTitle}>Principais Atrações</h3>
                                <p className={styles.timelineItemDescription}>
                                    {trip.main_attractions}
                                </p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineMarker}>3</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineItemTitle}>Experiência Local</h3>
                                <p className={styles.timelineItemDescription}>
                                    {trip.local_experience}
                                </p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineMarker}>4</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineItemTitle}>Partida</h3>
                                <span className={styles.timelineTime}>{trip.end_date}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mapContainer}>
                    <h2 className={styles.mapTitle}>Localização</h2>
                    <div className={styles.map}>
                        <MapComponent 
                            place={trip.place}
                            country={trip.country}
                            height="450px"
                            zoom={12}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
