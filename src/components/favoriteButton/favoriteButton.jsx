import styles from './favoriteButton.module.css';

export default function FavoriteButton() {
    return (
        <div className={styles.favoriteButton}>
            <span className={styles.star}>⭐</span>
        </div>
    );
}