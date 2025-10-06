import styles from "./about.module.css";
import Image from "next/image";
import Header from "../../components/header/Header";
import ContactButton from "../../components/contactButton/contactButton";

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
                <div className={styles.authorImageContainer}>
                    <h2 className={styles.authorTitle}>Conheça a Desenvolvedora</h2>
                    <Image
                        src="/img/author.jpg"
                        alt="Foto da Autora"
                        width={400}
                        height={400}
                        quality={95}
                        priority={true}
                        sizes="(max-width: 768px) 300px, 400px"
                        className={styles.authorImage}
                    />
                    <div className={styles.contactContainer}>
                        <ContactButton
                            href={"https://www.linkedin.com/in/barrosalejandra/"}
                            iconSrc={"/icons/linkedin.png"}
                            iconAlt={"Ícone do LinkedIn"}
                        >
                            LinkedIn
                        </ContactButton>
                        <ContactButton
                            href={"mailto:alejandra.barros@aluno.senai.br"}
                            iconSrc={"/icons/gmail.png"}
                            iconAlt={"Ícone de Email"}
                        >
                            Email
                        </ContactButton>
                        <ContactButton
                            href={"https://github.com/4yob"}
                            iconSrc={"/icons/github.png"}
                            iconAlt={"Ícone do GitHub"}
                        >
                            GitHub
                        </ContactButton>
                    </div>
                </div>
                <div className={styles.infosContainer}>
                    
                    <h2 className={styles.authorName}>Alejandra Barros</h2>
                    <h4 className={styles.authorAge}>Idade - 17 anos</h4>
                    <Image
                            src="/img/senailogo.png"
                            alt="Ícone do SENAI"
                            width={70}
                            height={18}
                            className={styles.contactIcon}
                        />
                    <p className={styles.authorBio}>Curso Técnico em Desenvolvimento de Sistemas</p>
                    <p className={styles.authorBio}>SENAI Valinhos 564 - Turma 2TDS1</p>
                    <p className={styles.authorBio}>2025</p>
                    <div className={styles.descriptionContainer}>
                        <p className={styles.descriptionText}>
                            O projeto foi desenvolvido como um "Diário de Bordo de Viagens". Criei-o para funcionar como uma plataforma web onde
                            usuários pudessem registrar e organizar suas viagens passadas, proporcionando uma
                            espécie de arquivo de memórias digital.
                        </p> 
                        <p className={styles.descriptionText}>
                            A minha ideia era projetar em um trabalho escolar uma das minhas maiores paixões: descobrir lugares novos, suas culturas, histórias e povos - e assim poder compartilhar isso com outras pessoas. Ele conta com um Back-End simples mas bem estruturado, um Banco de Dados com as informações de todas as viagens e um Front-End com uma interface intuitiva e atraente.
                        </p>
                        <p className={styles.descriptionText}>
                            Obrigada pela atenção! Fique à vontade para navegar pelo site e explorar as funcionalidades que desenvolvi com tanto esforço!
                        </p>
                        
                    </div>
                </div>
            </main>
        </div>
    );
}