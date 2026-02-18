import styles from './Supervivencia.module.css';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { CheckCircle } from 'lucide-react';

const SupervivenciaGracias = () => {
    return (
        <div className={styles.hero} style={{ height: '80vh', minHeight: '500px', backgroundImage: 'radial-gradient(circle at 50% 50%, #2F3E2B 0%, #050805 100%)' }}>
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroContent} style={{ maxWidth: '600px' }}>
                <FadeIn>
                    <CheckCircle size={64} color="var(--accent)" style={{ margin: '0 auto 2rem' }} />
                    <h1 className={styles.heroTitle} style={{ fontSize: '3rem' }}>¡Bienvenido a la tribu!</h1>
                    <p className={styles.sectionText}>
                        Tu cupo para la "Guía de Supervivencia" ha sido reservado con éxito.
                        <br /><br />
                        Recibirás un correo electrónico con el enlace de acceso y los detalles para prepararte.
                    </p>
                    <div style={{ marginTop: '3rem' }}>
                        <Button to="/" variant="outline">Volver al Inicio</Button>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default SupervivenciaGracias;
