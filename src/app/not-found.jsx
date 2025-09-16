import Link from 'next/link';
import Image from 'next/image';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Link href="/" className={styles.navLink}>Home</Link>
                <Link href="/about" className={styles.navLink}>Sobre</Link>
                <Link href="/trips" className={styles.navLink}>Viagens</Link>
                <Link href="/favorites" className={styles.navLink}>Favoritos</Link>
            </header>

            <div className={styles.container}>
                <div className={styles.article}>
                    <h1 className={styles.title}>Ops, destino não encontrado</h1>
                    <p className={styles.description}>
                        A página que você procura não existe ou foi movida. Explore novos destinos e continue sua jornada.
                    </p>

                    <div className={styles.actions}>
                        <Link href="/" className={styles.button}>Voltar para a Home</Link>
                        <Link href="/trips" className={styles.buttonOutline}>Ver Viagens</Link>
                    </div>
                </div>

                <div className={styles.aside}>
                    <span className={styles.badge404}>
                        404
                    </span>
                </div>
            </div>
        </div>
    );
}
