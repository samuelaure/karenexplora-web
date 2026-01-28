import FadeIn from '../components/FadeIn';
import styles from './Charles.module.css';

const videos = [
    { "title": "Gracias y feliz cumpleaños Charles Brewer-Carías!", "id": "o75Cm2cnmTI" },
    { "title": "La primera noche en el fondo de Sarisariñama Por Charles Brewer-Carías", "id": "EkWeTMHNFnQ" },
    { "title": "Expedición al Sarisariñama. Llegaron al fondo. Por Charles Brewer-Carías", "id": "u1hI5RuLd7E" },
    { "title": "El primer descenso a Sarisariñama, las simas de hundimiento, por Charles Brewer-Carías", "id": "gQ8XFMWBKpg" },
    { "title": "Sarisariñama cap2: empieza la primera expedición por Charles Brewer-Carías", "id": "pbRxJluwuzI" },
    { "title": "Sarisariñama parte 1: preparando la expedición, por Charles Brewer Carías", "id": "Ol9xJ_rMyII" },
    { "title": "Mapa de plantas carnívoras de los Tepuyes por Charles Brewer-Carías", "id": "Q6BlWjWTdcU" },
    { "title": "Feliz cumpleaños papá!! Charles Brewer-Carías", "id": "EuPSdCm9DbQ" },
    { "title": "Charles Brewer-Carías sobre plantas de los tepuyes", "id": "xqEhZwzWjqg" },
    { "title": "Charles Brewer-Carías: Calentamiento Global y Cambio climático", "id": "VdXRx1PrtyM" },
    { "title": "Extracto entrevista Karen Brewer y Charles Brewer-Carías -Improvisando", "id": "m-HSSdrBUes" },
    { "title": "Rey Charles en Venezuela", "id": "SEv3oLX_YH8" },
    { "title": "Relato Charles Brewer-Carías Yekuana", "id": "zlCvAhEkB3o" },
    { "title": "Nuevo libro de Charles Brewer-Carías sobre plantas de los tepuyes", "id": "fX-q-AGHJ3U" },
    { "title": "Fhíchu, flauta Yekuana por Charles Brewer-Carías", "id": "XkLkrLUPt9M" },
    { "title": "Me picó una hormiga 24. Charles Brewer-Carías", "id": "OKkKlEtzZVA" },
    { "title": "Hormiga 24 por Charles Brewer-Carías", "id": "A-TN9lHe_1s" },
    { "title": "Yanomami por Charles Brewer Carías", "id": "U1H8skiBzIg" },
    { "title": "Sarisariñama Expedición por Charles Brewer Carias", "id": "PCupPKOzjBw" },
    { "title": "Hierba Caracas, Pira o Amaranto por Charles Brewer Carias", "id": "du8nKOHcrVg" },
    { "title": "Sonido de serpientes  Charles Brewer Carias", "id": "JqIA3Iy5j94" },
    { "title": "Charles Brewer Carias. Anécdotas: los yekuana y su filosofía de vida", "id": "IUSHwsZ8vzM" },
    { "title": "Charles Brewer Carias. Anécdotas: La paciencia", "id": "MK6y7_dPW2o" },
    { "title": "Charles Brewer Carias haciendo barras", "id": "U7fjpZWFl-4" }
];

const Charles = () => {
    return (
        <div>
            <header className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <FadeIn>
                        <h1 className={styles.heroTitle}>Charles Brewer-Carías</h1>
                        <p className={styles.heroSubtitle}>Escribiendo la historia natural de Venezuela a través de la exploración pura.</p>
                    </FadeIn>
                </div>
            </header>

            <section className="section-light" style={{ padding: '60px 0', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <h2 className={styles.sectionTitle} style={{ color: 'var(--primary)' }}>El Legado del Explorador</h2>
                    <p className={styles.sectionText} style={{ color: 'var(--dark)', textAlign: 'center' }}>Estamos digitalizando décadas de expediciones, hallazgos científicos y bitácoras de campo para compartir el conocimiento de una vida dedicada a la naturaleza.</p>
                </div>
            </section>

            <section className="section-dark">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <FadeIn>
                            <h2 className={styles.sectionTitle}>Videoteca</h2>
                            <p className={styles.sectionText}>Documentos audiovisuales de las expediciones y anécdotas.</p>
                        </FadeIn>
                    </div>

                    <div className={styles.videoGrid}>
                        {videos.map((video, idx) => (
                            <FadeIn key={video.id} delay={idx * 0.05} className={styles.videoCard}>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id}`}
                                        title={video.title}
                                        allowFullScreen
                                        loading="lazy"
                                        className={styles.videoIframe}
                                    ></iframe>
                                </div>
                                <div className={styles.videoTitle}>
                                    {video.title}
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Charles;
