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

            <div className={styles.viewerWrapper}>
                <object
                    data={`${PDF_URL}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                    type="application/pdf"
                    className={styles.viewer}
                    aria-label="Mapas de relevamiento - Terremoto Venezuela 2026"
                >
                    <div className={styles.fallback}>
                        <p>El documento no pudo cargarse en el visor.</p>
                        <a href={PDF_URL} download={PDF_FILENAME} className={styles.downloadBtn}>
                            ↓ Descargar PDF directamente
                        </a>
                    </div>
                </object>
            </div>
        </div>
    );
};

export default Home;
