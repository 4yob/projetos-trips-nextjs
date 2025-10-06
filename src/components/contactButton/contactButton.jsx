import Image from 'next/image';
import Link from 'next/link';
import styles from './contactButton.module.css';

export default function ContactButton({ href, iconSrc, iconAlt, children }) {
    return (
        <Link 
            href={href} 
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                src={iconSrc}
                alt={iconAlt}
                width={25}
                height={25}
                className={styles.contactIcon}
            />
            {children}
        </Link>
    );
}