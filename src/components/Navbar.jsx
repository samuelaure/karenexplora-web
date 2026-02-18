import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube } from 'lucide-react';
import { FaTiktok, FaPatreon } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from './Navbar.module.css';

const Navbar = ({ onHeightChange }) => {
    const ref = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (ref.current && onHeightChange) {
            onHeightChange(ref.current.offsetHeight);
        }
    }, [scrolled, onHeightChange]);

    useEffect(() => {
        const handleResize = () => {
            if (ref.current && onHeightChange) {
                onHeightChange(ref.current.offsetHeight);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [onHeightChange]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    const navLinks = [
        { name: 'Inicio', path: isHome ? '#' : '/' },
        // Handle hash links. If on home, regular hash. If not, full path with hash.
        { name: 'Biodiversidad', path: isHome ? '#biodiversidad' : '/#biodiversidad' },
        { name: 'Exploración', path: isHome ? '#exploracion' : '/#exploracion' },
        { name: 'Crónicas de la selva', path: '/cronicas' },
        { name: 'Charles', path: '/charles' },
        { name: 'Tienda', path: '/tienda' },
    ];

    return (
        <nav ref={ref} className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    Karen<span>Explora</span>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className={styles.navLink}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Social Icons Desktop */}
                <div className={styles.social}>
                    <a href="https://instagram.com/karenexplora" target="_blank" rel="noreferrer" className={styles.socialIcon}>
                        <Instagram size={20} />
                    </a>
                    <a href="https://youtube.com/@karenexplora" target="_blank" rel="noreferrer" className={styles.socialIcon}>
                        <Youtube size={20} />
                    </a>
                    <a href="https://x.com/karenexplora" target="_blank" rel="noreferrer" className={styles.socialIcon}>
                        <FaXTwitter size={20} />
                    </a>
                    <a href="https://www.tiktok.com/@karenexplora" target="_blank" rel="noreferrer" className={styles.socialIcon}>
                        <FaTiktok size={20} />
                    </a>
                    <a href="https://www.patreon.com/Karenexplora" target="_blank" rel="noreferrer" className={styles.socialIcon}>
                        <FaPatreon size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className={styles.mobileBtn} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className={styles.mobileLink}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
