"use client";

import { useState, useEffect, use } from "react";
import { Card, Spin, Button, Descriptions } from "antd";
import { ArrowLeftOutlined, UserOutlined, EnvironmentOutlined, BankOutlined } from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";
import styles from "./[id].module.css";

export default function TripDetailsPage({ params }) {
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);

    const resolvedParams = use(params);

    const fetchTrip = async (tripId) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/trips/${tripId}`);
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
                    <Spin size="large" />
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
                    <Link href="/trips">
                        <Button type="primary" icon={<ArrowLeftOutlined />}>
                            Voltar para lista
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
        </div>
    );
}