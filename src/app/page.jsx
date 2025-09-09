import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/about" className={styles.navLink}>Sobre</Link>
      </header>
      <div className={styles.container}>
        <div className={styles.article}>
          <h1 className={styles.title}>Bem-vindo ao TRIPS.COM</h1>
          <p className={styles.description}>
            Seu diário de viagens online para compartilhar suas aventuras pelo mundo!
          </p>
          <Link href="/trips" className={styles.button}>Ver Viagens</Link>
        </div>
        <div className={styles.aside}>
          <Image
            src="/icons/logo.png"
            alt="Logo TRIPS.COM"
            width={350}
            height={350}
            className={styles.logo}
          />
        </div>
      </div>
      <main className={styles.main}>

      </main>
    </div>
  );
}
