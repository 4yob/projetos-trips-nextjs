import Image from 'next/image';
import Link from 'next/link';
import styles from './TripCard.module.css';
import FavoriteButton from '../favoriteButton/FavoriteButton';

export default function TripCard({ trip, favoriteButton = false }) {
    return (
        <div className={styles.tripCard}>
            <div className={styles.cardContent}>
                <div className={styles.tripImageWrapper}>
                    <Image
                        src={`/img/${trip.photo}`}
                        alt={trip.title}
                        fill
                        className={styles.tripImage}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                <div className={styles.titleOverlay}>
                    <h3>{trip.title}</h3>
                </div>
                
                <div className={styles.cardInfo}>
                    <div className={styles.cardDetails}>
                        <h3>{trip.title}</h3>
                        <h4>{trip.place} - {trip.country}</h4>
                        <p>Chegada: {trip.start_date}</p>
                        <p>Partida: {trip.end_date}</p>
                    </div>
                    <div className={styles.cardActions}>
                        <Link
                            href={`/trips/${trip.id}`}
                            className={styles.cardButton}
                        >
                            Ver Detalhes
                        </Link>
                        {favoriteButton && (
                            <div className={styles.favoriteButtonContainer}>
                                <FavoriteButton />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}