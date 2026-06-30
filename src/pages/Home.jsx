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

            <section className={styles.section}>
                <span className={styles.label}>Recursos verificados</span>
                <h2 className={styles.title}>Directorio de ayuda — Terremoto Venezuela</h2>
                <p className={styles.desc}>Directorio de páginas web y archivos verificados para ayudar a las víctimas del terremoto en Venezuela. Toda la información es revisada antes de publicarse.</p>
                <a
                    href="https://directorio-sismo.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.btn}
                >
                    Ir al directorio →
                </a>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <span className={styles.label}>Edo. La Guaira</span>
                <h2 className={styles.title}>
                    Mapas de relevamiento de la destrucción<br />
                    <span className={styles.accent}>tras el Terremoto en Venezuela 2026</span>
                </h2>
                <a
                    href={PDF_URL}
                    download={PDF_FILENAME}
                    className={styles.btn}
                    target="_blank"
                    rel="noreferrer"
                >
                    ↓ Descargar PDF
                </a>
            </section>
        </div>
    );
};

export default Home;
