import React from 'react';
import styles from './Privacidad.module.css'; // Consistent styling
import FadeIn from '../components/FadeIn';

const TerminostVenta = () => {
    return (
        <div className="page-wrapper">
            <section className={styles.container}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <FadeIn direction="up">
                        <h1 className={styles.title}>Términos de Venta</h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className={styles.intro}>
                            <p>Este documento es el contrato oficial de compra para productos digitales en la plataforma Karen Explora. Al realizar una compra, aceptas estos términos.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>1. Productos Digitales</h2>
                            <div className={styles.sectionContent}>
                                <p>Todos los libros, crónicas premium o accesos a cursos detallados en la web son de naturaleza digital. Una vez efectuada la compra, el sistema automatizado envía un enlace de acceso al correo electrónico proporcionado.</p>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>2. Envíos y Entregas</h2>
                            <div className={styles.sectionContent}>
                                <p>No existen cargos adicionales por envío físico, ya que la entrega es inmediata y digital. Si el enlace no llega en menos de 10 minutos, te recomendamos contactar a <strong>contacto@karenexplora.com</strong>.</p>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>3. Políticas de Devolución</h2>
                            <div className={styles.sectionContent}>
                                <p>Debido a que se trata de contenido descargable y consumible inmediatamente, no se admiten devoluciones de dinero salvo en casos de error técnico demostrado o imposibilidad de acceso por causas ajenas al comprador.</p>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>4. Uso Personal y Licencia</h2>
                            <div className={styles.sectionContent}>
                                <p>Cada compra otorga una licencia de uso personal e intransferible. Está terminantemente prohibida la redistribución, copia o reventa de los materiales sin autorización previa por escrito de Karen Explora.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default TerminostVenta;
