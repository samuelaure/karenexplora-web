import { Check } from 'lucide-react';
import styles from './Tienda.module.css';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const Tienda = () => {
    return (
        <div>
            <header className="hero" style={{
                backgroundImage: "url('/images/Charles-Brewer-C-1.jpg')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                position: 'relative'
            }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 0 }}></div>
                <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
                    <FadeIn>
                        <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)', fontWeight: 'bold', display: 'block', marginBottom: '15px' }}>Edición Digital</span>
                        <h1 style={{ fontStyle: 'italic', fontFamily: 'Playfair Display, serif', fontWeight: 'bold', fontSize: '6rem', lineHeight: '1.1', marginBottom: '20px' }}>Antropología dental en los indios soto...</h1>
                        <p style={{ fontSize: '1.4rem', opacity: 0.9, marginBottom: '40px' }}>Adéntrate en la obra donde Charles Brewer-Carías documenta la vivencia pura en las tierras más antiguas del planeta.</p>
                        <Button href="#purchase" variant="accent">Descargar Libro Digital (PDF)</Button>
                    </FadeIn>
                </div>
            </header>

            <section className="section-light">
                <div className="container">
                    <div className={styles.grid2}>
                        <FadeIn direction="right" className="content-flex">
                            <h2 className={styles.sectionTitle} style={{ color: 'var(--primary)' }}>🧭 Mucho más allá de la Antropología</h2>
                            <p className={styles.sectionText} style={{ color: 'var(--text-dark)', margin: 0, paddingLeft: 0 }}>Aunque el rigor científico sobre la etnia Soto es fascinante, este libro abre una ventana única a las vivencias personales de Charles en el corazón de la Guayana.</p>
                        </FadeIn>
                        <FadeIn direction="left">
                            <img src="/images/antropologia_dental.png" alt="Portada" className={styles.imgShadow} />
                        </FadeIn>
                    </div>

                    <div style={{ marginTop: '100px' }}>
                        <FadeIn>
                            <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '50px', color: 'var(--primary)' }}>¿Qué descubrirás?</h2>
                        </FadeIn>
                        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
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
                            <h2 className={styles.sectionTitle} style={{ color: 'white' }}>🦷 El Enigma de los Indios Soto</h2>
                            <p className={styles.sectionText} style={{ margin: 0, textAlign: 'left' }}>Charles Brewer-Carías analiza la dentición de los Soto no solo como médico, sino como un observador de la pureza humana antes del impacto de la modernidad.</p>
                        </FadeIn>
                        <FadeIn direction="right">
                            <img src="/images/enigma_soto.png" alt="Soto" className={styles.imgShadow} />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="section-light" id="purchase">
                <div className="container">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className={styles.sectionTitle} style={{ color: 'var(--primary)' }}>Un Legado compartido</h2>
                            <p className={styles.sectionText} style={{ color: 'var(--text-dark)', opacity: 0.8 }}>Este libro es una pieza fundamental del archivo familiar que Karen Brewer-Carías ha decidido digitalizar.</p>
                        </FadeIn>
                    </div>

                    <FadeIn direction="up" className={styles.grid2} style={{ background: '#f8f9fa', borderRadius: '20px', padding: '60px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--primary)', fontFamily: 'Outfit' }}>Detalles de tu descarga</h3>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ marginBottom: '15px', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}><Check color="var(--accent)" size={20} /> <strong>Autor:</strong> Charles Brewer-Carías</li>
                                <li style={{ marginBottom: '15px', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}><Check color="var(--accent)" size={20} /> <strong>Formato:</strong> PDF de alta calidad</li>
                                <li style={{ marginBottom: '15px', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}><Check color="var(--accent)" size={20} /> <strong>Acceso:</strong> Inmediato tras la compra</li>
                            </ul>
                        </div>
                        <div className={styles.purchaseCard}>
                            <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', opacity: 0.6, letterSpacing: '1px', color: 'black' }}>Apoya el legado</p>
                            <div className={styles.priceTag}>$19.99</div>
                            <Button variant="accent" style={{ background: '#635bff', borderColor: '#635bff' }}>Adquirir Edición Digital</Button>
                            <p style={{ fontSize: '0.75rem', marginTop: '20px', color: '#888' }}>Pago seguro procesado por Stripe</p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Tienda;
