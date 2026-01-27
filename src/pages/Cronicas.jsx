import { useState } from 'react';
import styles from '../components/Slider.module.css';
import Slider from '../components/Slider';
import FadeIn from '../components/FadeIn';

// Define slides content
const slides = [
    {
        content: (
            <div className={styles.grid}>
                <div className="content-flex">
                    <span className={styles.cincoHeader}>Entrevista con Cinco.8 | Cooltura</span>
                    <h2 className={styles.playfair}>Las personas que están cambiando a Venezuela: Karen Brewer</h2>
                    <p className={styles.text}>"Karen Brewer referencia a la hora de entender la cultura ecológica de Venezuela. Su vocación para enseñar y transmitir sus conocimientos nacieron a partir de las expediciones en las que acompañó a su padre."</p>
                    <p style={{ fontStyle: 'italic', color: 'var(--accent)', marginTop: '15px' }}>— Cinco.8</p>
                </div>
                <img src="https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/e23708a7-8c51-4ac1-991d-e223b153bbcf/Screen+Shot+2023-02-07+at+1.10.26+AM.png" alt="Karen" className={styles.img} />
            </div>
        )
    },
    {
        content: (
            <div className={`${styles.grid} ${styles.reverse}`}>
                <div className="content-flex">
                    <span className={styles.cincoHeader}>Sobre la Biodiversidad</span>
                    <p className={styles.text}>"Me apasiona difundir sobre la biodiversidad y el medio ambiente porque veo cambios y veo que a la gente le interesa aprender y descubrir conmigo muchas cosas nuevas. Este interés se puede transformar en acciones."</p>
                </div>
                <img src="/images/R+riendo+cardenalito+.png" alt="Karen y Cardenalito" className={styles.img} />
            </div>
        )
    },
    {
        content: (
            <div className={styles.grid}>
                <div className="content-flex">
                    <span className={styles.cincoHeader}>¿Cuál ha sido tu mayor logro?</span>
                    <p className={styles.text}>"Desde el premio por los documentales que hicimos con Rio Verde, hasta padres que me pasan las preguntas de sus hijos. Todo lo aprecio muchísimo. Sorprenderme cada día con los regalos de la vida creo que es mi mayor logro."</p>
                </div>
                <img src="/images/Screenshot_20200712-220409_Chrome.jpg" alt="Logros" className={styles.img} />
            </div>
        )
    },
    {
        content: (
            <div className={`${styles.grid} ${styles.reverse}`}>
                <div className="content-flex">
                    <span className={styles.cincoHeader}>Quiénes son tus referentes?</span>
                    <p className={styles.text}>"Principalmente mi familia. De mi papá he aprendido perseverancia. De mi hermano John he aprendido la excelencia; es brillante y cuando hay algún problema busca las soluciones y no el conflicto."</p>
                </div>
                <img src="/images/20220708_142335.jpg" alt="Referentes" className={styles.img} />
            </div>
        )
    },
    {
        content: (
            <div className={styles.grid}>
                <div className="content-flex">
                    <span className={styles.cincoHeader}>Lecciones de Mamá</span>
                    <p className={styles.text}>"De mi mami Fanny Mendoza aprendí a celebrar la vida, a amar la naturaleza y a transformar temas complejos en algo sencillo. Ella dedicó su vida a mostrarnos la belleza de las cosas."</p>
                </div>
                <img src="/images/WhatsApp+Image+2023-01-30+at+12.20.42.jpeg" alt="Mamá" className={styles.img} />
            </div>
        )
    },
    {
        content: (
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '40px 0' }}>
                <span className={styles.cincoHeader}>Aprender de todos</span>
                <p style={{ fontSize: '1.3rem', opacity: 0.9, marginBottom: '20px', fontFamily: 'Playfair Display, serif' }}>"Fuera de mi círculo familiar siempre estoy buscando referentes, personas que están haciendo las cosas bien. Hay muchas y todos debemos buscar con ojos para aprender."</p>
                <p style={{ fontSize: '1.1rem', color: 'var(--accent)', fontWeight: 600 }}>"Nadie se las sabe todas pero siempre hay alguien que es bueno en algo, aprende de ellos."</p>
            </div>
        )
    },
    {
        content: (
            <div className={`${styles.grid} ${styles.reverse}`}>
                <div className="content-flex">
                    <span className={styles.cincoHeader}>¿Cuál es tu meta a corto plazo?</span>
                    <p className={styles.text}>"Cada día trato de educar a los que me rodean con problemas y soluciones. Quiero que la gente sea más feliz y tenga mejor calidad de vida, y entender cómo funciona la naturaleza para aplicar soluciones."</p>
                </div>
                <img src="/images/Screen+Shot+2020-06-30+at+11.57.08+AM.jpg" alt="Metas" className={styles.img} />
            </div>
        )
    },
    {
        content: (
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '40px 0' }}>
                <span className={styles.cincoHeader}>Obstáculos y Retos</span>
                <h3 className={styles.playfair}>¿Qué obstáculos encuentras en Venezuela?</h3>
                <p className={styles.text}>"Muchas personas creen que las cosas son problema de otros. Pero si no confiamos en quienes pueden tomar acciones, debemos tomarlas nosotros mismos. Otro obstáculo es que la educación ambiental no está en el sistema educativo. Necesitamos entender que si la naturaleza está bien, nosotros también."</p>
            </div>
        )
    }
];

const Cronicas = () => {
    return (
        <div>
            <header className="hero" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/3b9a5ae8-22a3-47b5-8db5-e0e2f49de130/Auyan_helivopter9504.jpg')", height: '60vh', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 0 }}></div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <FadeIn>
                        <h1 style={{ fontFamily: 'Playfair Display', fontSize: '3rem' }}>Crónicas de la Selva</h1>
                        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Historias que nos harán viajar a lugares nunca imaginados.</p>
                    </FadeIn>
                </div>
            </header>

            <section className="section-light">
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <FadeIn delay={0.2}>
                        <Slider slides={slides} />
                    </FadeIn>
                </div>
            </section>

            {/* Prensa Grid */}
            <section className="section-dark">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <FadeIn>
                            <h2 style={{ fontFamily: 'Outfit', fontSize: '2.5rem', marginBottom: '10px', color: 'white' }}>En la Prensa</h2>
                            <p style={{ opacity: 0.8 }}>Entrevistas y menciones en medios nacionales e internacionales.</p>
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
