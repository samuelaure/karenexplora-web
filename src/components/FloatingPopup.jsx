// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import styles from './FloatingPopup.module.css';

const FloatingPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // If we are on the workshop page (or thanks page), hide immediately
        if (location.pathname.startsWith('/supervivencia')) {
            return;
        }

        const dismissed = localStorage.getItem('supervivenciaPopupDismissed');
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;

        if (dismissed && (now - parseInt(dismissed, 10) < oneDay)) {
            // Dismissed less than 24 hours ago
            return;
        }

        // Show after 5 seconds delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, [location]);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('supervivenciaPopupDismissed', Date.now().toString());
    };

    if (location.pathname.startsWith('/supervivencia')) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className={styles.popup}
                >
                    <div className={styles.card}>
                        <button onClick={handleClose} className={styles.closeBtn} aria-label="Cerrar">
                            <X size={20} />
                        </button>
                        <h3 className={styles.title}>Nuevo Taller EN VIVO</h3>
                        <p className={styles.text}>
                            Taller online de 2 horas <strong>EN VIVO</strong> con Karen para transformar el caos en calma. Aprende mentalidad de explorador, gestión de crisis, recursos del hogar y autonomía física para habitar mejor el mundo actual.
                        </p>
                        <Link to="/supervivencia" className={styles.cta} onClick={handleClose}>
                            Ver detalles <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingPopup;
