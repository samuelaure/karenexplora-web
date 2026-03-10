import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <FadeIn delay={0.2}>
                    <h1 className={styles.title}>404</h1>
                </FadeIn>
                <FadeIn delay={0.4}>
                    <h2 className={styles.subtitle}>Te has perdido en la selva.</h2>
                </FadeIn>
                <FadeIn delay={0.6}>
                    <p className={styles.description}>
                        Parece que has tomado un sendero que no te lleva a ninguna parte.
                        A veces perderse es parte de la exploración, pero aquí no hay nada que ver excepto maleza virtual.
                    </p>
                    <Button to="/" variant="accent">Volver al campamento base</Button>
                </FadeIn>
            </div>
        </div>
    );
};

export default NotFound;
