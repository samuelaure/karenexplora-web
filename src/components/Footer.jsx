import { Instagram, Youtube, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div>
                        <Link to="/" className={styles.logo}>Karen<span>Explora</span></Link>
                        <p className={styles.tagline}>Si la naturaleza está bien, nosotros también.</p>
                    </div>

                    <div>
                        <h4 className={styles.heading}>Navegación</h4>
                        <ul className={styles.linkList}>
                            <li><Link to="/" className={styles.link}>Inicio</Link></li>
                            <li><a href="/#biodiversidad" className={styles.link}>Biodiversidad</a></li>
                            <li><a href="/#exploracion" className={styles.link}>Exploración</a></li>
                            <li><Link to="/cronicas" className={styles.link}>Crónicas</Link></li>
                            <li><Link to="/charles" className={styles.link}>Charles</Link></li>
                            <li><Link to="/tienda" className={styles.link}>Tienda</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.heading}>Sígueme</h4>
                        <div className={styles.socialList}>
                            <a href="https://instagram.com/karenexplora" target="_blank" rel="noreferrer" className={styles.socialLink}>
                                <Instagram size={18} /> Instagram
                            </a>
                            <a href="https://youtube.com/@karenexplora" target="_blank" rel="noreferrer" className={styles.socialLink}>
                                <Youtube size={18} /> YouTube
                            </a>
                            {/* Added Twitter as placeholder for TikTok/Patreon if needed later */}
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; 2026 Karen Explora. Todos los derechos reservados.</p>
                    <p>Diseño por Samuel Aure</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
