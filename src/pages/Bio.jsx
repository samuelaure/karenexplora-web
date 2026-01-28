import styles from './Bio.module.css';
import FadeIn from '../components/FadeIn';

const Bio = () => {
    return (
        <div>
            {/* Short Hero */}
            <header className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <FadeIn>
                        <h1 className={styles.heroTitle}>Karen<span>Explora</span></h1>
                        <p className={styles.heroSubtitle}>Exploradora. Fotógrafa. Divulgadora.</p>
                        <button
                            id="openChat"
                            className={styles.linkCard}
                            style={{ cursor: "pointer", maxWidth: "max-content", margin: "auto", marginTop: "80px", backgroundColor: "var(--accent)" }}
                            onClick={() => window.voiceflow?.chat?.open()}
                        >
                            <span>Encuentra mis publicaciones</span>
                        </button>
                    </FadeIn>
                </div>
            </header>

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
