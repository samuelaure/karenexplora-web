import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import styles from './TopBar.module.css';

const TopBar = ({ onHeightChange }) => {
    const [isVisible, setIsVisible] = useState(() => {
        return !sessionStorage.getItem('topBarHidden');
    });
    const ref = useRef(null);
    const location = useLocation();

    // Pages where the TopBar should NOT appear
    const hiddenRoutes = ['/supervivencia', '/supervivencia/gracias'];
    const shouldHide = hiddenRoutes.includes(location.pathname);

    useEffect(() => {
        if ((!isVisible || shouldHide) && onHeightChange) {
            onHeightChange(0);
        }
    }, [isVisible, shouldHide, onHeightChange]);

    useEffect(() => {
        if (isVisible && !shouldHide && ref.current) {
            if (onHeightChange) onHeightChange(ref.current.offsetHeight);
        } else {
            if (onHeightChange) onHeightChange(0);
        }

        // Resize listener could be added here
        const handleResize = () => {
            if (isVisible && !shouldHide && ref.current && onHeightChange) {
                onHeightChange(ref.current.offsetHeight);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isVisible, shouldHide, onHeightChange]);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('topBarHidden', 'true');
    };

    if (!isVisible || shouldHide) return null;

    return (
        <div className={styles.topBar} ref={ref}>
            <div className={styles.topBarContainer}>
                <div className={styles.topBarContent}>
                    <span>Nuevo Taller Online: Guía de Supervivencia <strong>EN VIVO</strong> - 21 de Marzo. </span>
                    <Link to="/supervivencia" className={styles.topBarLink}>Reserva tu cupo aquí</Link>
                </div>
                <button onClick={handleClose} className={styles.closeButton} aria-label="Cerrar aviso">
                    <X size={18} />
                </button>
            </div>
        </div>
    );
};

export default TopBar;
