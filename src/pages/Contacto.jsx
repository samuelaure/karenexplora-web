import React from 'react';
import { Mail } from 'lucide-react';
import styles from './Contacto.module.css';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

const Contacto = () => {
    return (
        <div className="page-wrapper">
            <SEO
                title="Contacto"
                description="¿Tienes alguna duda o propuesta de colaboración? Ponte en contacto con el equipo de Karen Explora."
            />
            <section className={styles.container}>
                <div className="container">
                    <FadeIn direction="up">
                        <h1 className={styles.title}>Contacto</h1>
                    </FadeIn>

                    <div className={styles.grid}>
                        <FadeIn direction="right" delay={0.2}>
                            <p className={styles.intro}>
                                ¿Tienes alguna duda, propuesta de colaboración o simplemente quieres saludar?
                                Estamos siempre abiertos a nuevas exploraciones y proyectos que ayuden a proteger y difundir nuestro mundo natural.
                            </p>
                            <p className={styles.intro}>
                                Respondemos a todos los correos electrónicos lo antes posible. Gracias por ser parte de esta comunidad de exploradores.
                            </p>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.4}>
                            <div className={styles.emailCard}>
                                <div className={styles.emailIcon}>
                                    <Mail size={32} />
                                </div>
                                <span className={styles.emailLabel}>Correo Electrónico</span>
                                <a href="mailto:contacto@karenexplora.com" className={styles.emailValue}>
                                    contacto@karenexplora.com
                                </a>
                                <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.6 }}>
                                    Para consultas oficiales o colaboraciones internacionales.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contacto;
