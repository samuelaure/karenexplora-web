import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Slider.module.css';

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent(c => (c + 1) % slides.length);
    const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);

    return (
        <div className={styles.sliderWrapper}>
            <button className={`${styles.navBtn} ${styles.prev}`} onClick={prev}><ChevronLeft /></button>
            <div className={styles.slideContainer} style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide, idx) => (
                    <div key={idx} className={`${styles.slide} ${idx === current ? styles.slideActive : ''}`}>
                        {/* Render based on slide type or just pass JSX? 
                             Let's assume text/image prop or render function.
                             Wait, the existing site has specific HTML for each slide (reverse grids, centered text, etc).
                             I'll pass a 'render' function or 'content' component for each slide in data?
                             Or just make this a wrapper and map children?
                             Mapping children is awkward with the transform logic if I want to animate specific parts.
                             But `translateX` wrapper works for any width content if flex.
                          */}
                        {slide.content}
                    </div>
                ))}
            </div>
            <button className={`${styles.navBtn} ${styles.next}`} onClick={next}><ChevronRight /></button>
        </div>
    );
};

export default Slider;
