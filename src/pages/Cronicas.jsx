import Slider from '../components/Slider';
import FadeIn from '../components/FadeIn';
import styles from './Cronicas.module.css';

const Cronicas = () => {
    return (
        <div>
            <header className="hero" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/3b9a5ae8-22a3-47b5-8db5-e0e2f49de130/Auyan_helivopter9504.jpg')", height: '60vh', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 0 }}></div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <FadeIn>
                        <h1 style={{ fontStyle: 'italic', fontFamily: 'Playfair Display, serif', fontWeight: 'bold', fontSize: '6rem' }}>Crónicas de la Selva</h1>
                        <p style={{ fontSize: '1.4rem', opacity: 0.9 }}>Historias que nos harán viajar a lugares nunca imaginados.</p>
                    </FadeIn>
                </div>
            </header>

            <section className="section-light" style={{ padding: '60px 0 !important'}}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <FadeIn delay={0.2}>
                        <Slider/>
                    </FadeIn>
                </div>
            </section>

            {/* Prensa Grid */}
            <section className="section-dark">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <FadeIn>
                            <h2 className={styles.sectionTitle}>En la Prensa</h2>
                            <p className={styles.sectionText}>Entrevistas y menciones en medios nacionales e internacionales.</p>
                        </FadeIn>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                        <FadeIn delay={0.1} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
                            <img src="https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/56fcd51c-ee15-416f-a442-04d4ef2b106d/Screen+Shot+2020-07-01+at+11.45.50+AM.png" alt="Tocoma" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text)' }}>Rescate de fauna Tocoma</h3>
                                <a href="https://www.meer.com/es/28788-rescate-de-fauna-en-tocoma" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 'bold' }}>Sigue leyendo</a>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
                            <img src="https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/cdd117e8-75ee-4a8f-9455-5f35ab537922/R+riendo+cardenalito+.png" alt="Latitudes" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text)' }}>Distintas latitudes</h3>
                                <a href="https://distintaslatitudes.net/entrevistas/karen-brewer-exploradora-venezolana" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 'bold' }}>Lee más</a>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
                            <img src="https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/08c26abf-f083-4225-8389-d04765f9e4da/Screenshot_20200712-220409_Chrome.jpg" alt="El Diario" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text)' }}>El Diario</h3>
                                <a href="https://eldiario.com/2021/06/08/karen-brewer-carias-decisiones-tomamos-tienen-impacto-mundo/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 'bold' }}>Lee más</a>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
                            <img src="https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/18164e9b-3fef-4b9e-876c-97e77d7bed2e/20220708_142335.jpg" alt="Tertulia" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--text)' }}>La tertulia</h3>
                                <a href="https://www.youtube.com/watch?v=q3ZJv2rKWRM" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 'bold' }}>Mira la Entrevista</a>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cronicas;
