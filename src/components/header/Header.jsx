import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header({
    showBackButton = false, 
    backUrl = "/", 
    backLabel = "Voltar",
    customLinks = null 
}) {
    const defaultLinks = [
        { href: "/", label: "Home" },
        { href: "/favorites", label: "Destaques" },
        { href: "/about", label: "Sobre" }
    ];

    const navLinks = customLinks || defaultLinks;

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                {showBackButton && (
                    <Link href={backUrl} className={styles.backButton}>
                        <Image src="/icons/seta-esquerda.png" alt={backLabel} width={16} height={16} />
                        {backLabel}
                    </Link>
                )}
            </div>
            
            <Link 
                href={"/"} 
                className={showBackButton ? styles.logoContainerCentered : styles.logoContainer}
            >
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
                {navLinks.map((link, index) => (
                    <Link 
                        key={index}
                        href={link.href} 
                        className={styles.navLink}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </header>
    );
}