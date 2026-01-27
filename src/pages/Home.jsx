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
            <header className={styles.hero} style={{ backgroundImage: "url('/images/Auyantepuy_Rio_Arcoiris_Segunda_muralla_3006.jpg')" }}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <FadeIn delay={0.2}>
                        <h1 className={styles.heroTitle}>Si la naturaleza está bien, nosotros también.</h1>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <p className={styles.heroText}>Solo podemos proteger lo que conocemos, por eso te queremos mostrar cómo nuestro bienestar depende de la salud de nuestros ecosistemas.</p>
                        <Button href="#biodiversidad" variant="light">Explorar</Button>
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

            {/* Featured Book */}
            <section className="section-light">
                <div className="container">
                    <div className={styles.grid2}>
                        <FadeIn direction="right">
                            <img src="/images/antropologia_dental.png" alt="Antropología Dental" className={styles.imgShadow} />
                        </FadeIn>
                        <FadeIn direction="left">
                            <span className={styles.cardTag}>Obra Destacada</span>
                            <h2 className={styles.sectionTitle}>Antropología dental en los indios soto...</h2>
                            <p className={styles.textLg} style={{ color: 'var(--text-dark)' }}>
                                Más que un libro, un testimonio de la Venezuela inexplorada. Descubre este material invaluable digitalizado por primera vez.
                            </p>
                            <Button to="/tienda" variant="accent" style={{ color: 'white' }}>Saber más y Comprar</Button>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Amenazas Title */}
            <section className="section-dark text-center">
                <div className="container">
                    <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>Nuestros ecosistemas están en peligro</h2>
                    <p className={styles.heroText}>Conoce qué los amenaza y qué podemos hacer para protegerlos.</p>
                </div>
            </section>

            {/* Biodiversidad */}
            <section id="biodiversidad" className="section-light">
                <div className="container">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className={styles.sectionTitle}>Conocer es proteger</h2>
                        <p style={{ color: 'var(--text-dark)', opacity: 0.8 }}>Involucrarse es el paso necesario para que el conocimiento trascienda.</p>
                    </div>

                    <div className={styles.grid3}>
                        <a href="https://www.instagram.com/proyectosebrabavzla/" target="_blank" rel="noreferrer" className={styles.card}>
                            <img src="/images/jaguar.jpeg" alt="Jaguares" />
                            <div className={styles.cardContent}>
                                <span className={styles.cardTag}>Especies</span>
                                <h3 className={styles.cardTitle}>Jaguares</h3>
                                <p className={styles.cardSub}>Proyecto Sebrava Venezuela</p>
                            </div>
                        </a>
                        <a href="https://www.fundacion-esfera.org/" target="_blank" rel="noreferrer" className={styles.card}>
                            <img src="/images/aguila+harpia.jpeg" alt="Águila Harpía" />
                            <div className={styles.cardContent}>
                                <span className={styles.cardTag}>Especies</span>
                                <h3 className={styles.cardTitle}>Águila Harpía</h3>
                                <p className={styles.cardSub}>Fundación Esfera</p>
                            </div>
                        </a>
                        <a href="https://www.hatomasaguaral.org/" target="_blank" rel="noreferrer" className={styles.card}>
                            <img src="/images/caiman+del+orinoco.jpeg" alt="Caimán del Orinoco" />
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
            <section id="exploracion" className="section-dark">
                <div className="container space-y-32">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>Explora nuestra historia</h2>
                            <p style={{ opacity: 0.8 }}>Una mirada profunda a nuestras expediciones y descubrimientos.</p>
                        </FadeIn>
                    </div>

                    {/* Cronicas */}
                    <div className={styles.grid2}>
                        <FadeIn direction="right">
                            <h2 className={styles.sectionTitle} style={{ color: '#fff', fontSize: '2.5rem' }}>Crónicas de la Selva</h2>
                            <p className={styles.textLg}>Una expedición al corazón de los tepuyes venezolanos. Documentamos el misterio de las simas y la vida que en ellas florece.</p>
                        </FadeIn>
                        <FadeIn direction="left">
                            <img src="/images/B+Awidi.jpg" alt="Sarisariñama" className={styles.imgShadow} />
                        </FadeIn>
                    </div>

                    {/* Documentales */}
                    <div className={`${styles.grid2} ${styles.reverse}`}>
                        <FadeIn direction="left">
                            <h2 className={styles.sectionTitle} style={{ color: '#fff', fontSize: '2.5rem' }}>Documentales</h2>
                            <p className={styles.textLg}>Viajamos con Río Verde por todo el país para mostrar los proyectos de conservación.</p>
                        </FadeIn>
                        <FadeIn direction="right">
                            <img src="/images/Auyantepuy_Rio_Arcoiris_Segunda_muralla_3006.jpg" alt="Documentales" className={styles.imgShadow} />
                        </FadeIn>
                    </div>

                    {/* Descubrimientos */}
                    <div className={styles.grid2}>
                        <FadeIn direction="right">
                            <h2 className={styles.sectionTitle} style={{ color: '#fff', fontSize: '2.5rem' }}>Descubrimientos</h2>
                            <p className={styles.textLg}>Cada expedición nos revela secretos guardados por milenios, desde nuevas especies botánicas hasta formaciones geológicas.</p>
                        </FadeIn>
                        <FadeIn direction="left">
                            <img src="/images/Sarisarin.jpg" alt="Descubrimientos" className={styles.imgShadow} />
                        </FadeIn>
                    </div>

                    {/* Cesteria */}
                    <div className={`${styles.grid2} ${styles.reverse}`}>
                        <FadeIn direction="left">
                            <h2 className={styles.sectionTitle} style={{ color: '#fff', fontSize: '2.5rem' }}>Cestería Ye’Kwana</h2>
                            <p className={styles.textLg}>Las cestas Mawadi y Esadi son portadoras de la historia y cosmovisión del pueblo Ye'Kwana.</p>
                        </FadeIn>
                        <FadeIn direction="right" className="flex justify-center">
                            <img src="/images/Mawadi-esadiOK.jpg" alt="Cestería" style={{ borderRadius: '50%', width: '80%', aspectRatio: '1', objectFit: 'cover' }} />
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Libros Section */}
            <section id="libros" className="section-light">
                <div className="container">
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Otros Libros de la Colección</h2>
                    <div className={styles.grid3} style={{ marginTop: '60px' }}>
                        <div className={styles.bookCard}><img src="/images/Screen+Shot+2023-02-06+at+11.09.31+PM.png" alt="Libro 1" /></div>
                        <div className={styles.bookCard}><img src="/images/Screen+Shot+2023-02-06+at+11.11.52+PM.png" alt="Libro 2" /></div>
                        <div className={styles.bookCard}><img src="/images/Screen+Shot+2023-02-06+at+11.10.41+PM.png" alt="Libro 3" /></div>
                    </div>
                    <p className="text-center mt-8 italic opacity-60" style={{ color: 'var(--text-dark)' }}>Todavía no están disponibles para comprar</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
