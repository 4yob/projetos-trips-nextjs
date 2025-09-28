import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header({ className }) {
    return (
        <header className={`${styles.header} ${className}`}>
            <Link className={styles.left} href={"/"}>
                <Image
                    src="/icons/logo.png"
                    alt="Logo TRIPS.COM"
                    width={50}
                    height={50}
                    className={styles.logo}
                />
                <h2 className={styles.logoText}>TRIPS.COM</h2>
            </Link>
            <div className={styles.right}>
                <Link href="/" className={styles.navLink}>Home</Link>
                <Link href="/favorites" className={styles.navLink}>Destaques</Link>
                <Link href="/about" className={styles.navLink}>Sobre</Link>
            </div>
        </header>
    );
}