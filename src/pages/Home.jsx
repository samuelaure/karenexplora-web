import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Home.module.css';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const elem = document.querySelector(location.hash);
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div>
            {/* Hero Section */}
            <header className={styles.hero} style={{ backgroundImage: "url('/images/auyantepuy-tepui-venezuela.jpg')" }}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <FadeIn delay={0.2}>
                        <h1 className={styles.heroTitle}>Si la naturaleza está bien, nosotros también.</h1>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <p className={styles.heroText}>Solo podemos proteger lo que conocemos, por eso te queremos mostrar cómo nuestro bienestar depende de la salud de nuestros ecosistemas.</p>
                        <Button href="#biodiversidad" variant="light" style={{ marginTop: '2rem' }}>Explorar</Button>
                    </FadeIn>
                </div>
            </header>

            {/* Quote Section */}
            <section className="section-dark text-center">
                <div className="container">
                    <FadeIn>
                        <h2 className={styles.quoteTitle}>
                            "Mantengamos la curiosidad de aprender sobre lo que nos rodea. Cuando creamos que ya somos grandes y que no hay nada que aprender entonces no aprenderemos más nada."
                        </h2>
                    </FadeIn>
                </div>
            </section>

            {/* Workshop Promo */}
            <section className="section-dark" style={{
                background: 'linear-gradient(135deg, rgba(26, 36, 26, 0.9) 0%, rgba(47, 62, 43, 0.8) 100%), url("/images/sarisarinama-sinkholes-discovery.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '12rem 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div className={styles.grid2}>
                        <FadeIn direction="right">
                            <span style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: '1rem' }}>Nuevo Taller Online</span>
                            <h2 className={styles.sectionTitle} style={{ color: '#fff', marginBottom: '2rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>Guía de Supervivencia para el día a día</h2>
                            <p className={styles.heroText} style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                                Taller online de 2 horas con Karen para transformar el caos en calma. Aprende mentalidad de explorador, gestión de crisis, recursos del hogar y autonomía física para habitar mejor el mundo actual.
                            </p>
                            <Button to="/supervivencia" variant="accent">Ver detalles y Reservar</Button>
                        </FadeIn>
                        <FadeIn direction="left" className="flex-center">
                            <div style={{
                                background: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--accent)' }}>21</div>
                                <div style={{ fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Marzo</div>
                                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Vía Google Meet</div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Featured Book */}
            <section className="section-light">
                <div className="container">
                    <div className={styles.grid2}>
                        <FadeIn direction="right">
                            <img src="/images/libro-antropologia-dental-indios-soto.png" alt="Antropología Dental" className={styles.imgShadow} />
                        </FadeIn>
                        <FadeIn direction="left">
                            <span className={styles.cardTag}>Obra Destacada</span>
                            <h2 className={styles.sectionTitle}>Antropología dental en los indios soto...</h2>
                            <p className={styles.textLg} style={{ color: 'var(--text-dark)' }}>
                                Más que un libro, un testimonio de la Venezuela inexplorada. Descubre este material invaluable digitalizado por primera vez.
                            </p>
                            <Button to="/libro" variant="accent" style={{ color: 'white' }}>Saber más y Comprar</Button>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Amenazas Title */}
            {/* 
            <section className={`${styles.amenazasSection} text-center`} style={{ backgroundImage: "url('/images/minas-guri-deforestacion-venezuela.jpg')" }}>
                <div className={styles.overlay}></div>
                <div className={`container ${styles.relativeContent}`}>
                    <FadeIn>
                        <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>Nuestros ecosistemas están en peligro</h2>
                        <p className={styles.heroText}>Conoce qué los amenaza y qué podemos hacer para protegerlos.</p>
                    </FadeIn>
                </div>
            </section>
            */}

            {/* Biodiversidad */}
            <section id="biodiversidad" className="section-dark" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div className="text-center mb-16 mx-auto">
                        <FadeIn>
                            <span className={styles.cardTag} style={{ marginBottom: '1rem' }}>Nuestro Compromiso</span>
                            <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>Conocer es proteger</h2>
                            <p className={styles.heroText} style={{ opacity: 0.8, maxWidth: '800px' }}>Involucrarse es el paso necesario para que el conocimiento trascienda.</p>
                        </FadeIn>
                    </div>

                    <div className={styles.grid3}>
                        <a href="https://www.instagram.com/proyectosebrabavzla/" target="_blank" rel="noreferrer" className={styles.card}>
                            <img src="/images/jaguar-sebrava-venezuela.jpg" alt="Jaguares" />
                            <div className={styles.cardContent}>
                                <span className={styles.cardTag}>Especies</span>
                                <h3 className={styles.cardTitle}>Jaguares</h3>
                                <p className={styles.cardSub}>Proyecto Sebrava Venezuela</p>
                            </div>
                        </a>
                        <a href="https://www.fundacion-esfera.org/" target="_blank" rel="noreferrer" className={styles.card}>
                            <img src="/images/aguila-harpia-venezuela.jpg" alt="Águila Harpía" />
                            <div className={styles.cardContent}>
                                <span className={styles.cardTag}>Especies</span>
                                <h3 className={styles.cardTitle}>Águila Harpía</h3>
                                <p className={styles.cardSub}>Fundación Esfera</p>
                            </div>
                        </a>
                        <a href="https://www.hatomasaguaral.org/" target="_blank" rel="noreferrer" className={styles.card}>
                            <img src="/images/caiman-orinoco-venezuela.jpg" alt="Caimán del Orinoco" />
                            <div className={styles.cardContent}>
                                <span className={styles.cardTag}>Especies</span>
                                <h3 className={styles.cardTitle}>Caimán del Orinoco</h3>
                                <p className={styles.cardSub}>Hato Masaguaral</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Exploracion Sections */}
            {/* 
            <section id="exploracion" className="section-dark">
                <div className="container space-y-32">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>Explora nuestra historia</h2>
                            <p className={styles.heroText} style={{ opacity: 0.8, marginBottom: '1rem' }}>Una mirada profunda a nuestras expediciones y descubrimientos.</p>
                        </FadeIn>
                    </div>

                    <div className={styles.grid2}>
                        <FadeIn direction="right">
                            <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>Crónicas de la Selva</h2>
                            <p className={styles.textLg}>Una expedición al corazón de los tepuyes venezolanos. Documentamos el misterio de las simas y la vida que en ellas florece.</p>
                        </FadeIn>
                        <FadeIn direction="left">
                            <img src="/images/sarisarinama-simas-landscape.jpg" alt="Sarisariñama" className={styles.imgShadow} />
                        </FadeIn>
                    </div>

                    <div className={`${styles.grid2} ${styles.reverse}`}>
                        <FadeIn direction="left">
                            <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>Documentales</h2>
                            <p className={styles.textLg}>Viajamos con Río Verde por todo el país para mostrar los proyectos de conservación.</p>
                        </FadeIn>
                        <FadeIn direction="right">
                            <img src="/images/auyantepuy-tepui-venezuela.jpg" alt="Documentales" className={styles.imgShadow} />
                        </FadeIn>
                    </div>

                    <div className={styles.grid2}>
                        <FadeIn direction="right">
                            <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>Descubrimientos</h2>
                            <p className={styles.textLg}>Cada expedición nos revela secretos guardados por milenios, desde nuevas especies botánicas hasta formaciones geológicas.</p>
                        </FadeIn>
                        <FadeIn direction="left">
                            <img src="/images/sarisarinama-sinkholes-discovery.jpg" alt="Descubrimientos" className={styles.imgShadow} />
                        </FadeIn>
                    </div>

                    <div className={`${styles.grid2} ${styles.reverse}`}>
                        <FadeIn direction="left">
                            <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>Cestería Ye’Kwana</h2>
                            <p className={styles.textLg}>Las cestas Mawadi y Esadi son portadoras de la historia y cosmovisión del pueblo Ye'Kwana.</p>
                        </FadeIn>
                        <FadeIn direction="right" className="flex justify-center">
                            <img src="/images/cesteria-yekwana-mawadi.jpg" alt="Cestería" style={{ borderRadius: '50%', width: '80%', aspectRatio: '1', objectFit: 'cover' }} />
                        </FadeIn>
                    </div>
                </div>
            </section>
            */}

            {/* 
            <section id="libros" className="section-light">
                <div className="container">
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Otros Libros de la Colección</h2>
                    <p className="text-center italic opacity-60" style={{ color: 'var(--text-dark)', marginBottom: '3rem' }}>Todavía no están disponibles para comprar</p>
                    <div className={styles.grid3}>
                        <div className={styles.bookCard}><img src="/images/libro-cerro-de-la-neblina.png" alt="Libro 1" /></div>
                        <div className={styles.bookCard}><img src="/images/libro-venezuela-es-mucho-mas.png" alt="Libro 2" /></div>
                        <div className={styles.bookCard}><img src="/images/libro-mundo-perdido.png" alt="Libro 3" /></div>
                    </div>
                </div>
            </section>
            */}
        </div>
    );
};

export default Home;
