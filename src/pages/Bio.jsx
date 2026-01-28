import styles from './Bio.module.css';
import FadeIn from '../components/FadeIn';
import { ExternalLink, Youtube, Instagram, BookOpen } from 'lucide-react';

const links = [
    { title: "Plant trees in Brazil’s Atlantic Rainforest", url: "https://www.karenexplora.com/bio", icon: <ExternalLink size={20} /> }, // Placeholder URL as per request content, though the text implies a different link usually. I'll point to the bio for now or a generic one if I don't have it.
    { title: "Canal de YouTube", url: "https://youtube.com/@karenexplora", icon: <Youtube size={20} /> },
    { title: "Entrevista con National Geographic Esp.", url: "#", icon: <BookOpen size={20} /> },
    { title: "Entrevista Distintas Latitudes", url: "#", icon: <BookOpen size={20} /> },
    { title: "Encuentra mis publicaciones", url: "#", icon: <Instagram size={20} /> }
];

const Bio = () => {
    return (
        <div>
            {/* Short Hero */}
            <header className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <FadeIn>
                        <h1 className={styles.heroTitle}>Karen Explora</h1>
                        <p className={styles.heroSubtitle}>Exploradora. Fotógrafa. Divulgadora.</p>
                    </FadeIn>
                </div>
            </header>

            {/* Links Section (Bio Style) */}
            <section className={styles.linksSection}>
                <div className="container">
                    <FadeIn>
                        <div className={styles.linksGrid}>
                            {links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.linkCard}
                                >
                                    {link.icon}
                                    <span>{link.title}</span>
                                </a>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Extended Biography Section */}
            <section className={styles.bioSection}>
                <div className="container">
                    <FadeIn>
                        <h2 className={styles.sectionTitle}>Sobre mí</h2>
                        <div className={styles.bioContent}>
                            <p className="mb-8">
                                Karen Brewer-Carías es una exploradora, divulgadora naturalista y defensora de la biodiversidad venezolana.
                                Hija del legendario explorador Charles Brewer-Carías, ha dedicado su vida a documentar y proteger
                                los ecosistemas más remotos del planeta.
                            </p>
                            <p className="mb-8">
                                Como presentadora de "Explorando Maravillas con Río Verde", Karen ha llevado a la pantalla
                                la belleza salvaje de Venezuela, desde las profundidades del Amazonas hasta las cumbres de los Tepuyes.
                                Su trabajo combina la rigurosidad científica con una narrativa apasionada que busca reconectar
                                a las personas con su entorno natural.
                            </p>
                            <p>
                                <em>"Mi objetivo es simple: despertar la curiosidad. Porque solo podemos proteger aquello que amamos,
                                    y solo amamos aquello que conocemos."</em>
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Bio;
