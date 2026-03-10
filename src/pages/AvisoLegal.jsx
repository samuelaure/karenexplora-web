import React from 'react';
import styles from './Privacidad.module.css'; // Consistent styling with Privacy
import FadeIn from '../components/FadeIn';

const AvisoLegal = () => {
    return (
        <div className="page-wrapper">
            <section className={styles.container}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <FadeIn direction="up">
                        <h1 className={styles.title}>Aviso Legal</h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className={styles.intro}>
                            <p>Este documento regula el uso de la plataforma Karen Explora y cumple con la Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>1. Datos del Titular</h2>
                            <div className={styles.sectionContent}>
                                <p>En cumplimiento de la legislación aplicable, se informa que el sitio web es gestionado por:</p>
                                <ul className={styles.list}>
                                    <li><strong>Titular:</strong> Samuel Aure</li>
                                    <li><strong>Contacto Principal:</strong> contacto@karenexplora.com</li>
                                    <li><strong>Actividad:</strong> Exploración, educación ambiental y divulgación de biodiversidad.</li>
                                    <li><strong>Operaciones:</strong> Gestión digital internacional.</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>2. Condiciones de Uso</h2>
                            <div className={styles.sectionContent}>
                                <p>El usuario se compromete de manera irrevocable a hacer uso de los servicios y contenidos conforme a la ley, la moral y el orden público. Queda prohibida la reproducción parcial o total del contenido multimedia, textos y expediciones sin el consentimiento expreso de la titular.</p>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>3. Responsabilidad</h2>
                            <div className={styles.sectionContent}>
                                <p>karenexplora.com no se hace responsable de las opiniones vertidas en canales externos o por colaboradores ajenos. Asimismo, no se garantiza la disponibilidad técnica absoluta de la plataforma debido a factores externos del hosting u otros servicios digitales.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default AvisoLegal;
