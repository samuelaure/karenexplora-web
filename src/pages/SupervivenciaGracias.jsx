import styles from './Supervivencia.module.css';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { CheckCircle } from 'lucide-react';

const SupervivenciaGracias = () => {
    return (
        <div className={styles.hero} style={{
            minHeight: '80vh',
            background: 'linear-gradient(135deg, rgba(26, 36, 26, 0.9) 0%, rgba(47, 62, 43, 0.8) 100%), url("/images/sarisarinama-sinkholes-discovery.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            paddingTop: 'calc(var(--navbar-height) + 4rem)',
            paddingBottom: '4rem'
        }}>
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
