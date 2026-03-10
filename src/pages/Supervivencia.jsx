import { useState } from 'react';
import styles from './Supervivencia.module.css';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { ArrowRight, Check, X, CreditCard, Landmark, Globe } from 'lucide-react';
import SEO from '../components/SEO';

const PaymentModal = ({ isOpen, onClose, planName, planPrice }) => {
    const [activeTab, setActiveTab] = useState('paypal'); // paypal, vzla, otros

    if (!isOpen) return null;

    const whatsappLink = `https://wa.me/34656328436?text=Hola,%20me%20gustaría%20inscribirme%20en%20el%20plan%20${planName}%20($${planPrice}).%20Prefiero%20pagar%20con%20tarjeta%20o%20transferencia%20europea.`;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modalContent}>
                <button className={styles.modalClose} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Inscripción al Taller</h2>
                    <div className={styles.modalPlanSummary}>
                        Plan {planName} — ${planPrice}
                    </div>
                </div>

                <div className={styles.modalTabs}>
                    <button
                        className={`${styles.tabBtn} ${activeTab === 'paypal' ? styles.active : ''}`}
                        onClick={() => setActiveTab('paypal')}
                    >
                        <Globe size={16} /> PayPal
                    </button>
                    <button
                        className={`${styles.tabBtn} ${activeTab === 'vzla' ? styles.active : ''}`}
                        onClick={() => setActiveTab('vzla')}
                    >
                        <Landmark size={16} /> Venezuela
                    </button>
                    <button
                        className={`${styles.tabBtn} ${activeTab === 'otros' ? styles.active : ''}`}
                        onClick={() => setActiveTab('otros')}
                    >
                        <CreditCard size={16} /> Otros
                    </button>
                </div>

                <div className={styles.tabContent}>
                    {activeTab === 'paypal' && (
                        <div className="animate-fadeIn">
                            <div className={styles.paymentDetailRow}>
                                <span className={styles.detailLabel}>Enviar pago a (Email)</span>
                                <span className={styles.detailValue}>contacto@karenexplora.com</span>
                            </div>
                            <div className={styles.paymentDetailRow}>
                                <span className={styles.detailLabel}>Monto a enviar</span>
                                <span className={styles.detailValue}>${planPrice} USD</span>
                            </div>
                            <div className={styles.modalInstructions}>
                                <span className={styles.instructionTitle}>Pasos a seguir:</span>
                                <p className={styles.instructionText}>
                                    1. Envía el monto exacto vía PayPal.<br />
                                    2. Envía el comprobante por WhatsApp o al email de contacto.<br />
                                    3. Recibirás tu enlace de acceso en menos de 24h.
                                </p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'vzla' && (
                        <div className="animate-fadeIn">
                            <div className={styles.paymentDetailRow}>
                                <span className={styles.detailLabel}>Banco</span>
                                <span className={styles.detailValue}>[Tu Banco en Vzla]</span>
                            </div>
                            <div className={styles.paymentDetailRow}>
                                <span className={styles.detailLabel}>Datos de Pago Móvil / Transferencia</span>
                                <span className={styles.detailValue}>
                                    Cédula: [Tu Cédula]<br />
                                    Teléfono: [Tu Teléfono]<br />
                                    Cuenta: [Tu Número de Cuenta]
                                </span>
                            </div>
                            <div className={styles.paymentDetailRow}>
                                <span className={styles.detailLabel}>Monto aproximado</span>
                                <span className={styles.detailValue}>Equivalente a ${planPrice} USD (Tasa del día)</span>
                            </div>
                            <div className={styles.modalInstructions}>
                                <span className={styles.instructionTitle}>Confirmación:</span>
                                <p className={styles.instructionText}>
                                    Envía la captura de la transferencia por WhatsApp para validar tu cupo.
                                </p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'otros' && (
                        <div className="animate-fadeIn">
                            <p className={styles.sectionText} style={{ color: 'var(--text)', fontSize: '1rem', textAlign: 'center' }}>
                                Si prefieres pagar con <strong>Tarjeta de Crédito / Débito</strong> o vía <strong>transferencia bancaria en Europa (IBAN)</strong>, pulsa el botón para solicitar el enlace directo.
                            </p>
                            <div className={styles.whatsappAction}>
                                <Button href={whatsappLink} target="_blank" variant="accent" full>
                                    Solicitar enlace por WhatsApp
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Supervivencia = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState({ name: '', price: 0 });

    const openPayment = (name, price) => {
        setSelectedPlan({ name, price });
        setIsModalOpen(true);
    };

    return (
        <div className="page-wrapper">
            <SEO
                title="Taller: Guía de Supervivencia"
                description="Taller online EN VIVO con Karen Brewer-Carías para recuperar criterio, calma y autonomía en un mundo caótico."
            />
            {/* Hero Section */}
            <header className={styles.hero} style={{
                background: 'linear-gradient(135deg, rgba(26, 36, 26, 0.9) 0%, rgba(47, 62, 43, 0.8) 100%), url("/images/sarisarinama-sinkholes-discovery.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: 'calc(var(--navbar-height) + 8rem)',
                paddingBottom: '10rem'
            }}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <FadeIn delay={0.2}>
                        <div className={styles.heroDate}>21 de Marzo | EN VIVO</div>
                        <h1 className={styles.heroTitle}>Guía de Supervivencia para el día a día</h1>
                        <p className={styles.sectionText}>Taller online de 2 horas <strong>EN VIVO</strong> con Karen para recuperar lo humano: criterio, calma y autonomía en un mundo caótico.</p>
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
                            <p className={styles.quoteText}>
                                "Olvidamos que nuestro cuerpo es nuestra herramienta principal y que el entorno, por hostil que parezca, tiene recursos si sabes dónde mirar."
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="section-light" style={{ overflowX: 'hidden' }}>
                <div className="container">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className={styles.sectionTitle} style={{ color: 'var(--primary-dark)' }}>Este taller es para ti si...</h2>
                        </FadeIn>
                    </div>
                    <div className={styles.benefitsGrid}>
                        <FadeIn>
                            <ul className={styles.benefitList}>
                                {[
                                    "Deja de vivir en modo 'resolviendo' y recupera el mando de tu atención.",
                                    "Aprende a discernir lo urgente de lo importante bajo presión.",
                                    "Vuelve a confiar en tu criterio y en la capacidad de tu propio cuerpo.",
                                    "Entiende tu entorno no como algo hostil, sino como un mapa de recursos.",
                                    "Descubre que la verdadera seguridad no viene de afuera, sino de lo que sabes hacer.",
                                    "Disfruta de un taller diseñado para todos, sin necesidad de conocimientos técnicos."
                                ].map((item, i) => (
                                    <li key={i} className={styles.checkedItem}>
                                        <Check size={20} className={styles.checklistIcon} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    </div>

                    <div className="text-center mt-16">
                        <FadeIn delay={0.3}>
                            <Button href="#pricing" variant="accent">Quiero ver a Karen EN VIVO</Button>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Syllabus - 5 Pillars */}
            <section className="section-dark" style={{ overflowX: 'hidden' }}>
                <div className="container">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className={styles.sectionTitle}>Lo que vamos a integrar</h2>
                            <p className={styles.sectionText}>Los 5 pilares fundamentales de la supervivencia aplicada al siglo XXI</p>
                        </FadeIn>
                    </div>

                    <div className={styles.curriculumList}>
                        {[
                            { title: "Mentalidad de Explorador", text: "Domina el método STOP para evitar el pánico y la Regla de los 3 para priorizar lo urgente sin vivir en alerta." },
                            { title: "Tu Cuerpo como Herramienta", text: "Técnicas de 'sueño táctico' y rutinas de movimiento para que tu respuesta física sea eficiente." },
                            { title: "Kit del Explorador Moderno", text: "Qué llevar realmente en tu mochila y cómo usar eficientemente navaja, fuego y luz." },
                            { title: "Lectura del Entorno", text: "Identificación de recursos y gestión de riesgos, tanto en la ciudad como en la naturaleza." },
                            { title: "Hogar Resiliente", text: "Preparativos para fallas de servicios públicos y transformación de desechos en recursos útiles." }
                        ].map((item, i) => (
                            <FadeIn key={i} className={styles.curriculumItem} delay={i * 0.1}>
                                <div className={styles.curriculumNumber}>{String(i + 1).padStart(2, '0')}</div>
                                <div className={styles.curriculumContent}>
                                    <h3 className={styles.pillarTitle} style={{ fontSize: '1.75rem', marginTop: 0 }}>{item.title}</h3>
                                    <p className={styles.pillarText} style={{ fontSize: '1.1rem', marginBottom: 0 }}>{item.text}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dynamics */}
            <section className="section-light" style={{ backgroundColor: '#F0F4F0', padding: '10rem 0', overflowX: 'hidden' }}>
                <div className={`container ${styles.dynamicsMobileReorder}`}>
                    <div className={`text-center mb-12 ${styles.dynamicsTitleWrapper}`}>
                        <FadeIn>
                            <h2 className={styles.sectionTitle} style={{ color: 'var(--primary-dark)' }}>Dinámica del Encuentro</h2>
                        </FadeIn>
                    </div>

                    <div className={styles.grid2} style={{ gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
                        <FadeIn direction="left" className={`flex-center ${styles.dynamicsAgendaFade}`}>
                            <div className={styles.agendaBox}>
                                <div className={styles.agendaItem}>
                                    <div className={styles.agendaTime} style={{ fontSize: '1.25rem' }}>45 min</div>
                                    <div className={styles.agendaContent}>
                                        <h4 style={{ fontSize: '1.3rem' }}>Contenido</h4>
                                        <p style={{ fontSize: '1.05rem' }}>Una descarga intensiva de herramientas, técnicas y experiencias prácticas.</p>
                                    </div>
                                </div>
                                <div className={styles.agendaItem}>
                                    <div className={styles.agendaTime} style={{ fontSize: '1.25rem' }}>60+ min</div>
                                    <div className={styles.agendaContent}>
                                        <h4 style={{ fontSize: '1.3rem' }}>Preguntas y respuestas</h4>
                                        <p style={{ fontSize: '1.05rem' }}>Un espacio abierto para conversar conmigo. Responderé preguntas y profundizaré en los temas más interesantes</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="right" className={`flex-center ${styles.dynamicsCardFade}`}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '2.5rem 2rem',
                                background: 'white',
                                borderRadius: 'var(--radius-lg)',
                                width: '100%',
                                maxWidth: '280px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                                borderTop: '5px solid var(--accent)'
                            }}>
                                <span style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--primary-dark)', lineHeight: 1 }}>21</span>
                                <span style={{ fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', fontWeight: 800 }}>Marzo</span>
                                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                                    <span style={{ fontSize: '1rem', color: 'var(--primary-dark)', fontWeight: 600, display: 'block' }}>Vía Google Meet</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="section-dark" style={{ padding: '10rem 0', overflowX: 'hidden' }}>
                <div className="container">
                    <div className="text-center mb-12">
                        <FadeIn>
                            <h2 className={styles.sectionTitle}>Elige tu inversión</h2>
                            <p className={styles.investmentIntro}>
                                He diseñado este espacio para que sea accesible y que el conocimiento llegue a quien lo necesite, y como no quiero que el dinero sea la pared que les impida aprender a potabilizar su agua o a calmar su mente en una crisis, he decidido ofrecer opciones para acceder.
                            </p>
                            <p className={styles.investmentHint}>Todas las opciones tienen el mismo acceso, pero tú eliges con qué monto quieres sumarte a esta expedición:</p>
                        </FadeIn>
                    </div>

                    <div className={styles.pricingGrid}>
                        {/* Seed */}
                        <FadeIn className={styles.pricingCard} delay={0.1}>
                            <h3 className={styles.pricingTitle}>Semilla</h3>
                            <div className={styles.pricingPrice}>$9</div>
                            <p className={styles.pricingFeatures}>Acceso completo al taller.</p>
                            <Button onClick={() => openPayment('Semilla', 9)} variant="outline" style={{ marginTop: 'auto', borderColor: 'rgba(255,255,255,0.2)' }}>Inscribirme</Button>
                        </FadeIn>

                        {/* Support */}
                        <FadeIn className={`${styles.pricingCard} ${styles.featured}`} delay={0.2}>
                            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--accent)', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', color: '#000' }}>RECOMENDADO</div>
                            <h3 className={styles.pricingTitle}>Apoyo</h3>
                            <div className={styles.pricingPrice}>$18</div>
                            <p className={styles.pricingFeatures}>Impulsa la creación de contenido.</p>
                            <Button onClick={() => openPayment('Apoyo', 18)} variant="accent" style={{ marginTop: 'auto' }}>Inscribirme</Button>
                        </FadeIn>

                        {/* Impulse */}
                        <FadeIn className={styles.pricingCard} delay={0.3}>
                            <h3 className={styles.pricingTitle}>Impulso</h3>
                            <div className={styles.pricingPrice}>$27</div>
                            <p className={styles.pricingFeatures}>Contribución máxima para financiar mis investigaciones.</p>
                            <Button onClick={() => openPayment('Impulso', 27)} variant="outline" style={{ marginTop: 'auto', borderColor: 'rgba(255,255,255,0.2)' }}>Inscribirme</Button>
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
                <div className={styles.ctaOverlay}></div>
                <div className={styles.ctaContent}>
                    <FadeIn>
                        <span className={styles.ctaSubtitle}>Tu camino a la autonomía</span>
                        <h2 className={styles.ctaTitle}>No esperes una crisis para prepararte</h2>
                        <Button href="#pricing" variant="accent">Asegurar mi lugar ahora</Button>
                    </FadeIn>
                </div>
            </section>

            <PaymentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                planName={selectedPlan.name}
                planPrice={selectedPlan.price}
            />
        </div>
    );
};

export default Supervivencia;
