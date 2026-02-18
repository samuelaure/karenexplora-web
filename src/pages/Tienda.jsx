import { Check } from 'lucide-react';
import styles from './Tienda.module.css';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const Tienda = () => {
    return (
        <div className="page-wrapper">
            <header className={styles.hero} style={{ height: '60vh', minHeight: '400px' }}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <FadeIn>
                        <h1 className={styles.heroTitle}>Tienda Oficial</h1>
                        <p className={styles.heroDescription}>Herramientas, conocimiento y experiencias para tu vida.</p>
                    </FadeIn>
                </div>
            </header>

            <section className="section-light">
                <div className="container">
                    <div className={styles.grid2}>
                        {/* Workshop Card */}
                        <FadeIn delay={0.1} className={styles.productCard}>
                            <div className={styles.productImageWrapper}>
                                <img src="/images/sarisarinama-simas-landscape.jpg" alt="Taller de Supervivencia" className={styles.productImage} />
                                <div className={styles.productTag}>Nuevo</div>
                            </div>
                            <div className={styles.productContent}>
                                <span className={styles.productCategory}>Evento en Vivo</span>
                                <h2 className={styles.productTitle}>Guía de Supervivencia</h2>
                                <p className={styles.productDescription}>
                                    Taller online de 2 horas con Karen para transformar el caos en calma. Aprende mentalidad de explorador, gestión de crisis, recursos del hogar y autonomía física para habitar mejor el mundo actual.
                                </p>
                                <div className={styles.productMeta}>
                                    <span>21 de Marzo Via Google Meet</span>
                                </div>
                                <Button to="/supervivencia" variant="accent" style={{ width: '100%' }}>Ver Detalles</Button>
                            </div>
                        </FadeIn>

                        {/* Book Card */}
                        <FadeIn delay={0.2} className={styles.productCard}>
                            <div className={styles.productImageWrapper}>
                                <img src="/images/libro-antropologia-dental-indios-soto.png" alt="Libro Antropología Dental" className={styles.productImage} style={{ objectFit: 'contain', padding: '2rem', background: '#f5f5f5' }} />
                                <div className={styles.productTag} style={{ background: 'var(--primary)' }}>Libro Digital</div>
                            </div>
                            <div className={styles.productContent}>
                                <span className={styles.productCategory}>Edición Especial</span>
                                <h2 className={styles.productTitle}>Antropología Dental en los Indios Soto</h2>
                                <p className={styles.productDescription}>
                                    Una obra fundamental de Charles Brewer-Carías sobre la vivencia pura en las tierras más antiguas.
                                </p>
                                <div className={styles.productMeta}>
                                    <span>PDF de Alta Calidad</span>
                                </div>
                                <Button to="/libro" variant="outline" style={{ width: '100%' }}>Ver Libro</Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tienda;
