import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Slider.module.css';

const Slider = () => {
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

    const [current, setCurrent] = useState(0);

    const next = () => setCurrent(c => (c + 1) % slides.length);
    const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);

    return (
        <div className={styles.sliderWrapper}>
            <button className={`${styles.navBtn} ${styles.prev}`} onClick={prev}><ChevronLeft /></button>
            <div className={styles.slideContainer} style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide, idx) => (
                    <div key={idx} className={`${styles.slide} ${idx === current ? styles.slideActive : ''}`}>
                        {slide.content}
                    </div>
                ))}
            </div>
            <button className={`${styles.navBtn} ${styles.next}`} onClick={next}><ChevronRight /></button>
        </div>
    );
};

export default Slider;
