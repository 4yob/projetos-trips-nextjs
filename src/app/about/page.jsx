import styles from "./about.module.css";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header/Header";

export default function About() {
    return (
        <div className={styles.page}>
            <Header
                className={styles.header}
                showBackButton={true}
                backUrl="/trips"
                backLabel="Voltar para Viagens"
                customLinks={[
                    { href: "/favorites", label: "Favoritos" }
                ]}
            />
            <main className={styles.main}>
                <div className={styles.authorContainer}>
                    <Image
                        src="/img/author.jpg"
                        alt="Foto do Autor"
                        width={200}
                        height={200}
                        className={styles.authorImage}
                    />
                </div>
            </main>
        </div>
    );
}