import styles from "./trips.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Trips() {
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
            </main>
        </div>
    );
}
