import { Check } from 'lucide-react';
import styles from './Libro.module.css';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const Libro = () => {
    return (
        <div>
            <header className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    <FadeIn>
                        <span className={styles.heroSubtitle}>Edición Digital</span>
                        <h1 className={styles.heroTitle}>Antropología dental en los indios soto...</h1>
                        <p className={styles.heroDescription}>Adéntrate en la obra donde Charles Brewer-Carías documenta la vivencia pura en las tierras más antiguas del planeta.</p>
                        <Button href="#purchase" variant="accent">Descargar Libro Digital (PDF)</Button>
                    </FadeIn>
                </div>
            </header>



            <section className="section-light">
                <div className="container">
                    <div className={styles.grid2}>
                        <FadeIn direction="right" className="content-flex">
                            <h2 className={styles.sectionTitle}>🧭 Mucho más allá de la Antropología</h2>
                            <p className={`${styles.sectionText} ${styles.introText}`}>Aunque el rigor científico sobre la etnia Soto es fascinante, este libro abre una ventana única a las vivencias personales de Charles en el corazón de la Guayana.</p>
                        </FadeIn>
                        <FadeIn direction="left">
                            <img src="/images/libro-antropologia-dental-indios-soto.png" alt="Portada" className={styles.imgShadow} />
                        </FadeIn>
                    </div>

                    <div className={styles.discoverySection}>
                        <FadeIn>
                            <h2 className={`${styles.sectionTitle} ${styles.discoveryTitle}`}>¿Qué descubrirás?</h2>
                        </FadeIn>
                        <div className={styles.featuresGrid}>
                            <FadeIn delay={0.1} className={styles.featureBox}>
                                <h3>Crónicas de lo Inexplorado</h3>
                                <p>Relatos directos de expediciones en territorios donde los mapas aún tenían espacios en blanco.</p>
                            </FadeIn>
                            <FadeIn delay={0.2} className={styles.featureBox}>
                                <h3>Supervivencia y Adaptación</h3>
                                <p>La sabiduría adquirida al convivir con las comunidades indígenas.</p>
                            </FadeIn>
                            <FadeIn delay={0.3} className={styles.featureBox}>
                                <h3>La Mística del Macizo Guayanés</h3>
                                <p>Observaciones detalladas sobre la geografía y la atmósfera única de los tepuyes.</p>
                            </FadeIn>
                            <FadeIn delay={0.4} className={styles.featureBox}>
                                <h3>Fotografía y Registro</h3>
                                <p>El libro digital captura la esencia de una era dorada de la exploración venezolana.</p>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-dark">
                <div className="container">
                    <div className={`${styles.grid2} ${styles.reverse}`}>
                        <FadeIn direction="left" className="content-flex">
                            <h2 className={styles.sectionTitle}>🦷 El Enigma de los Indios Soto</h2>
                            <p className={`${styles.sectionText} ${styles.enigmaText}`}>Charles Brewer-Carías analiza la dentición de los Soto no solo como médico, sino como un observador de la pureza humana antes del impacto de la modernidad.</p>
                        </FadeIn>
                        <FadeIn direction="right">
                            <img src="/images/enigma-indios-soto-detail.png" alt="Soto" className={styles.imgShadow} />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="section-light" id="purchase">
                <div className="container">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className={styles.sectionTitle}>Un Legado compartido</h2>
                            <p className={`${styles.sectionText} ${styles.legacyText}`}>Este libro es una pieza fundamental del archivo familiar que Karen Brewer-Carías ha decidido digitalizar.</p>
                        </FadeIn>
                    </div>

                    <FadeIn direction="up" className={`${styles.grid2} ${styles.purchaseContainer}`}>
                        <div>
                            <h3 className={styles.downloadTitle}>Detalles de tu descarga</h3>
                            <ul className={styles.purchaseList}>
                                <li className={styles.purchaseListItem}><Check color="var(--accent)" size={20} /> <strong>Autor:</strong> Charles Brewer-Carías</li>
                                <li className={styles.purchaseListItem}><Check color="var(--accent)" size={20} /> <strong>Formato:</strong> PDF de alta calidad</li>
                                <li className={styles.purchaseListItem}><Check color="var(--accent)" size={20} /> <strong>Acceso:</strong> Inmediato tras la compra</li>
                            </ul>
                        </div>
                        <div className={styles.purchaseCard}>
                            <p className={styles.supportLabel}>Apoya el legado</p>
                            <div className={styles.priceTag}>$19.99</div>
                            <Button href="https://buy.stripe.com/6oUdRagxT68cdva2Gf7Zu01" target="_blank" rel="noreferrer" variant="accent" className={styles.purchaseButton}>Adquirir Edición Digital</Button>
                            <p className={styles.secureText}>Pago seguro procesado por Stripe</p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Libro;
