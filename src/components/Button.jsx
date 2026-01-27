import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({
    children,
    variant = 'light', /* light, dark, accent, outline */
    href,
    to,
    onClick,
    className = '',
    full = false,
    ...props
}) => {
    const rootClasses = `
    ${styles.btn} 
    ${styles[variant]} 
    ${full ? styles.full : ''} 
    ${className}
  `.trim();

    // Internal Link
    if (to) {
        return (
            <Link to={to} className={rootClasses} {...props}>
                {children}
            </Link>
        );
    }

    // External Link or Hash Link
    if (href) {
        return (
            <a href={href} className={rootClasses} {...props}>
                {children}
            </a>
        );
    }

    // Action Button
    return (
        <button onClick={onClick} className={rootClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
