import styles from './Supervivencia.module.css';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { ArrowRight, Check } from 'lucide-react';


const Supervivencia = () => {
    return (
        <div className="page-wrapper">
            {/* Hero Section */}
            <header className={styles.hero} style={{ backgroundImage: "url('/images/sarisarinama-simas-landscape.jpg')" }}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <FadeIn delay={0.2}>
                        <div className={styles.heroDate}>21 de Marzo | En Vivo</div>
                        <h1 className={styles.heroTitle}>Guía de Supervivencia para el día a día</h1>
                        <p className={styles.sectionText}>Recupera lo humano: criterio, calma y autonomía en un mundo caótico.</p>
                        <Button href="#pricing" variant="accent">Reservar Mi Cupo</Button>
                    </FadeIn>
                </div>
            </header>

            {/* Concept Section */}
            <section className="section-dark">
                <div className="container">
                    <div className={styles.grid2}>
                        <FadeIn direction="right">
                            <h2 className={styles.sectionTitle}>¿Qué es realmente este taller?</h2>
                            <p className={styles.sectionText} style={{ textAlign: 'left', margin: 0 }}>
                                Este taller nace de una pregunta simple: <strong>¿Qué pasaría si dejáramos de vivir en modo supervivencia?</strong>
                                <br /><br />
                                En este espacio de 2 horas, además de prepararte para sobrevivir en la naturaleza, te compartiré las herramientas para recuperar algo profundamente humano y fundamental para el explorador: criterio, calma y autonomía.
                                <br /><br />
                                No se trata de endurecerse, ni de escapar del mundo, sino de aprender a habitarlo mejor, con menos fricción interna y más recursos propios.
                            </p>
                        </FadeIn>
                        <FadeIn direction="left">
                            <p className={styles.sectionText} style={{ textAlign: 'left', margin: 0, opacity: 0.8, fontStyle: 'italic', borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
                                "Olvidamos que nuestro cuerpo es nuestra herramienta principal y que el entorno, por hostil que parezca, tiene recursos si sabes dónde mirar."
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="section-light">
                <div className="container">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className={styles.sectionTitle} style={{ color: 'var(--primary-dark)' }}>Este taller es para ti si...</h2>
                        </FadeIn>
                    </div>
                    <div className={styles.pricingGrid} style={{ marginTop: 0 }}>
                        {[
                            "Sientes que vives siempre 'resolviendo'.",
                            "Quieres más calma mental y claridad práctica.",
                            "Tienes curiosidad por el cuerpo, la naturaleza y la autosuficiencia básica.",
                            "Intuyes que la verdadera seguridad no viene de afuera.",
                            "Quieres volver a confiar en tu criterio y en tu cuerpo.",
                            "No necesitas experiencia previa ni conocimientos técnicos."
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1} className={styles.pillarCardLight}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Check size={20} color="var(--primary)" />
                                    <p style={{ margin: 0, fontWeight: 500 }}>{item}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Syllabus - 5 Pillars */}
            <section className="section-dark">
                <div className="container">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className={styles.sectionTitle}>Lo que vamos a integrar</h2>
                            <p className={styles.sectionText}>Los 5 pilares fundamentales de la supervivencia aplicada al siglo XXI</p>
                        </FadeIn>
                    </div>

                    <div className={styles.pricingGrid}>
                        <FadeIn className={styles.pillarCard} delay={0.1}>
                            <h3 className={styles.pillarTitle}>1. Mentalidad de Explorador</h3>
                            <p className={styles.pillarText}>Domina el método STOP para evitar el pánico y la Regla de los 3 para priorizar lo urgente sin vivir en alerta.</p>
                        </FadeIn>
                        <FadeIn className={styles.pillarCard} delay={0.2}>
                            <h3 className={styles.pillarTitle}>2. Tu Cuerpo como Herramienta</h3>
                            <p className={styles.pillarText}>Técnicas de "sueño táctico" (método militar) y rutinas de movimiento para que tu cuerpo no falle cuando lo necesites.</p>
                        </FadeIn>
                        <FadeIn className={styles.pillarCard} delay={0.3}>
                            <h3 className={styles.pillarTitle}>3. Kit del Explorador Moderno</h3>
                            <p className={styles.pillarText}>Qué llevar realmente en un bolso de emergencia y cómo usar herramientas básicas eficientemente (navaja, fuego, luz).</p>
                        </FadeIn>
                        <FadeIn className={styles.pillarCard} delay={0.4}>
                            <h3 className={styles.pillarTitle}>4. Lectura del Entorno</h3>
                            <p className={styles.pillarText}>Aprende a identificar recursos y gestionar situaciones de riesgo, en la calle o en la naturaleza.</p>
                        </FadeIn>
                        <FadeIn className={styles.pillarCard} delay={0.5}>
                            <h3 className={styles.pillarTitle}>5. Hogar Resiliente</h3>
                            <p className={styles.pillarText}>Preparativos para fallas de servicios, gestión de recursos y transformación de desechos en recursos.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Dynamics */}
            <section className="section-light" style={{ backgroundColor: '#F0F4F0' }}>
                <div className="container">
                    <div className={styles.grid2}>
                        <FadeIn direction="left">
                            <h2 className={styles.sectionTitle} style={{ color: 'var(--primary-dark)' }}>Dinámica del Encuentro</h2>
                            <p className={styles.sectionText} style={{ color: 'var(--text-dark)', textAlign: 'left', margin: 0 }}>
                                El taller es 100% online y en vivo.
                                <br /><br />
                                <strong>Contenido (~45 min):</strong> Una descarga de herramientas, técnicas y experiencias prácticas.
                                <br /><br />
                                <strong>Interacción (60+ min):</strong> Espacio abierto para conversar conmigo. Sin filtros, responderé preguntas para que el conocimiento se vuelva personal.
                            </p>
                        </FadeIn>
                        <FadeIn direction="right" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '3rem',
                                background: 'white',
                                borderRadius: '50%',
                                width: '300px',
                                height: '300px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                            }}>
                                <span style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--accent)', lineHeight: 1 }}>21</span>
                                <span style={{ fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary-dark)' }}>Marzo</span>
                                <span style={{ marginTop: '0.5rem', fontSize: '1rem', color: '#666' }}>Vía Google Meet</span>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="section-dark">
                <div className="container">
                    <div className="text-center mb-8">
                        <FadeIn>
                            <h2 className={styles.sectionTitle}>Elige tu inversión</h2>
                            <p className={styles.sectionText}>
                                El contenido es el mismo para todos. Si puedes aportar más, ayudas a que siga investigando.
                            </p>
                        </FadeIn>
                    </div>

                    <div className={styles.pricingGrid}>
                        {/* Seed */}
                        <FadeIn className={styles.pricingCard} delay={0.1}>
                            <h3 className={styles.pricingTitle}>Semilla</h3>
                            <div className={styles.pricingPrice}>$9</div>
                            <p className={styles.pricingFeatures}>Acceso básico y completo al taller.</p>
                            <Button href="https://buy.stripe.com/fZu3cw0yV7cg76MdkT7Zu02" target="_blank" variant="outline" style={{ marginTop: 'auto', borderColor: 'rgba(255,255,255,0.2)' }}>Inscribirme</Button>
                        </FadeIn>

                        {/* Support */}
                        <FadeIn className={`${styles.pricingCard} ${styles.featured}`} delay={0.2}>
                            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--accent)', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', color: '#000' }}>RECOMENDADO</div>
                            <h3 className={styles.pricingTitle}>Apoyo</h3>
                            <div className={styles.pricingPrice}>$18</div>
                            <p className={styles.pricingFeatures}>Impulsa la creación de contenido.</p>
                            <Button href="https://buy.stripe.com/7sY5kE5Tf7cg9eUbcL7Zu03" target="_blank" variant="accent" style={{ marginTop: 'auto' }}>Inscribirme</Button>
                        </FadeIn>

                        {/* Impulse */}
                        <FadeIn className={styles.pricingCard} delay={0.3}>
                            <h3 className={styles.pricingTitle}>Impulso</h3>
                            <div className={styles.pricingPrice}>$27</div>
                            <p className={styles.pricingFeatures}>Contribución máxima al proyecto.</p>
                            <Button href="https://buy.stripe.com/eVq7sM0yV9ko2QwbcL7Zu04" target="_blank" variant="outline" style={{ marginTop: 'auto', borderColor: 'rgba(255,255,255,0.2)' }}>Inscribirme</Button>
                        </FadeIn>
                    </div>

                    <div className="text-center mt-16">
                        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                            ¿Otros métodos de pago? <a href="https://wa.me/34656328436?text=Hola,%20me%20gustar%C3%ADa%20pagar%20el%20acceso%20al%20taller%20de%20Karen,%20%C2%BFQu%C3%A9%20otros%20m%C3%A9todos%20de%20pago%20tienen?" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'var(--accent)' }}>Contáctanos aquí</a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className={styles.ctaSection}>
                <div className="container" style={{ padding: '4rem 0' }}>
                    <FadeIn>
                        <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>No esperes una crisis para prepararte</h2>
                        <Button href="#pricing" variant="dark">Asegurar mi lugar ahora</Button>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Supervivencia;
