import React from 'react';
import styles from './Privacidad.module.css';
import FadeIn from '../components/FadeIn';

const Privacidad = () => {
    return (
        <div className="page-wrapper">
            <section className={styles.container}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <FadeIn direction="up">
                        <h1 className={styles.title}>Política de Privacidad</h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className={styles.intro}>
                            <p>Última actualización: 10 de Marzo de 2026. Esta política describe cómo recolectamos, usamos y protegemos sus datos bajo las normativas internacionales y europeas (RGPD).</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>1. Responsable del Tratamiento</h2>
                            <div className={styles.sectionContent}>
                                <p>Karen Explora es el responsable del tratamiento de los datos personales recopilados a través de este sitio web. Puedes contactarnos para cualquier duda relacionada con tu privacidad en <strong>contacto@karenexplora.com</strong>.</p>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>2. Datos que Recolectamos</h2>
                            <div className={styles.sectionContent}>
                                <p>Dependiendo de cómo interactúes con la web, podemos recopilar:</p>
                                <ul className={styles.list}>
                                    <li><strong>Identificación básica:</strong> Si nos escribes un correo, guardaremos tu dirección de email y nombre para responderte.</li>
                                    <li><strong>Datos de Navegación:</strong> Dirección IP, tipo de navegador y comportamiento de usuario a través de cookies propias o de terceros (como analíticas anónimas).</li>
                                    <li><strong>Transacciones:</strong> Si compras en nuestra tienda, recolectamos datos necesarios para la facturación y entrega del producto (como el nombre y el email para productos digitales).</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>3. Base Legal y Finalidad</h2>
                            <div className={styles.sectionContent}>
                                <p>Tratamos tus datos basándonos en:</p>
                                <ul className={styles.list}>
                                    <li><strong>Tu consentimiento:</strong> Para responder tus consultas o enviarte información solicitada.</li>
                                    <li><strong>Ejecución de contrato:</strong> Para gestionar tus compras en la tienda.</li>
                                    <li><strong>Interés legítimo:</strong> Para mejorar la seguridad y la experiencia de usuario en la web.</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>4. Tus Derechos (RGPD)</h2>
                            <div className={styles.sectionContent}>
                                <p>Como usuario residente en la Unión Europea o bajo marcos internacionales similares, tienes derecho a:</p>
                                <ul className={styles.list}>
                                    <li><strong>Acceso:</strong> Saber qué datos tenemos sobre ti.</li>
                                    <li><strong>Rectificación:</strong> Corregir información inexacta.</li>
                                    <li><strong>Supresión (Derecho al Olvido):</strong> Solicitar que eliminemos tus datos.</li>
                                    <li><strong>Oposición y Limitación:</strong> Oponerte al tratamiento en ciertos contextos.</li>
                                    <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado.</li>
                                </ul>
                                <p>Puedes ejercer estos derechos escribiéndonos a <strong>contacto@karenexplora.com</strong>.</p>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>5. Seguridad de la Información</h2>
                            <div className={styles.sectionContent}>
                                <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales, incluyendo el uso de protocolos cifrados (SSL/HTTPS) para todas las comunicaciones de la web.</p>
                            </div>
                        </div>

                        <div className={styles.footer}>
                            <p>Karen Explora © 2026. Todos los derechos reservados.</p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Privacidad;
