import styles from './HomeTerremoto.module.css';
import SEO from '../components/SEO';

const PDF_URL = 'https://karenexplora.com/uploads/mapas_de_relevamiento.pdf';
const PDF_FILENAME = 'Relevamiento-del-desastre-Edo-La-Guaira.pdf';

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <SEO
                title="Mapas de Relevamiento - Terremoto Venezuela 2026 | Edo. La Guaira"
                description="Mapas de relevamiento de la destrucción tras el Terremoto en Venezuela 2026, Estado La Guaira."
            />

            <div className={styles.header}>
                <a
                    href="https://directorio-sismo.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.directoryCard}
                >
                    <span className={styles.directoryLabel}>Recursos verificados</span>
                    <span className={styles.directoryTitle}>Directorio de ayuda — Terremoto Venezuela</span>
                    <span className={styles.directoryDesc}>Directorio de páginas web y archivos verificados para ayudar a las víctimas del terremoto en Venezuela. Toda la información es revisada antes de publicarse.</span>
                    <span className={styles.directoryLink}>directorio-sismo.netlify.app →</span>
                </a>

                <div className={styles.divider} />

                <h1 className={styles.title}>
                    Mapas de relevamiento de la destrucción<br />
                    <span>tras el Terremoto en Venezuela 2026</span>
                </h1>
                <p className={styles.subtitle}>Edo. La Guaira</p>
                <a
                    href={PDF_URL}
                    download={PDF_FILENAME}
                    className={styles.downloadBtn}
                    target="_blank"
                    rel="noreferrer"
                >
                    ↓ Descargar PDF
                </a>
            </div>
        </div>
    );
};

export default Home;
