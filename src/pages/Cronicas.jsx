import Slider from '../components/Slider';
import FadeIn from '../components/FadeIn';
import styles from './Cronicas.module.css';

const Cronicas = () => {
    return (
        <div>
            <header className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <FadeIn>
                        <h1 className={styles.heroTitle}>Crónicas de la Selva</h1>
                        <p className={styles.heroSubtitle}>Historias que nos harán viajar a lugares nunca imaginados.</p>
                    </FadeIn>
                </div>
            </header>

            <section className="section-light" style={{ padding: '60px 0' }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <FadeIn delay={0.2}>
                        <Slider />
                    </FadeIn>
                </div>
            </section>

            {/* Prensa Grid */}
            <section className="section-dark">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <FadeIn>
                            <h2 className={styles.sectionTitle}>En la Prensa</h2>
                            <p className={styles.sectionText}>Entrevistas y menciones en medios nacionales e internacionales.</p>
                        </FadeIn>
                    </div>

                    <div className={styles.gridPrensa}>
                        {[
                            {
                                title: "Distintas latitudes",
                                description: "Karen Brewer, una exploradora venezolana que lucha por defender la biodiversidad desde el aprendizaje",
                                link: "https://distintaslatitudes.net/entrevistas/karen-brewer-exploradora-venezolana",
                                image: "/images/prensa-distintas-latitudes-karen.jpg",
                                buttonText: "Lee más"
                            },
                            {
                                title: "El Diario",
                                description: "Karen Brewer-Carías: “Todas las decisiones que tomamos, por más mínimas que sean, tienen un impacto en el mundo”",
                                link: "https://eldiario.com/2021/06/08/karen-brewer-carias-decisiones-tomamos-tienen-impacto-mundo/",
                                image: "/images/prensa-el-diario-karen.jpg",
                                buttonText: "Lee más"
                            },
                            {
                                title: "La tertulia",
                                description: "A través de sus estudios se convirtió en divulgadora naturalista y representante de la preservación de los animales en la fauna venezolana.",
                                link: "https://www.youtube.com/watch?v=q3ZJv2rKWRM",
                                image: "/images/prensa-la-tertulia.jpg",
                                buttonText: "Mira la entrevista"
                            },
                            {
                                title: "Ararauna",
                                description: "Entrevista a la hija del explorador e investigador Charles Brewer Carías tras el incendio de su estudio donde se perdieron 70 años de trabajo sobre Venezuela",
                                link: "https://www.youtube.com/watch?v=nXgP4Htek9E",
                                image: "/images/prensa-ararauna-charles-incendio.png",
                                buttonText: "Mira la entrevista"
                            },
                            {
                                title: "Hato Las Caretas",
                                description: "Pasión por la naturaleza Karen Brewer, exploradora y naturalista",
                                link: "http://hatolascaretas.com/pasion-por-la-naturaleza-karen-brewer-exploradora-y-naturalista/",
                                image: "/images/prensa-hato-las-caretas.png",
                                buttonText: "Lee más"
                            },
                            {
                                title: "Agenda Exitos",
                                description: "El mundo según Karen Brewer",
                                link: "https://www.youtube.com/watch?v=D9ryhDWC27w",
                                image: "/images/prensa-agenda-exitos.jpg",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "Viajando y contando",
                                description: "Apasionada exploradora venezolana que junto a su Padre y familia han recorrido todo el territorio de Venezuela investigándolo.",
                                link: "https://www.youtube.com/watch?v=KnVZLVfqCKo",
                                image: "/images/prensa-viajando-y-contando.png",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "La Cátedra del Pop",
                                description: "Entrevista a Karen Brewer sobre ambientalismo en Venezuela.",
                                link: "https://www.youtube.com/watch?v=qSpT744hf60",
                                image: "/images/prensa-catedra-del-pop.png",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "Qué Vaina",
                                description: "El Valor del Patrimonio Arqueológico de Charles Brewer-Carias",
                                link: "https://www.facebook.com/queVaina.es/videos/el-valor-del-patrimonio-arqueologico-de-charles-brewer-carias/896428427797064/",
                                image: "/images/prensa-que-vaina.jpg",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "UNIMET",
                                description: "Especialistas proponen acciones individuales y colectivas para saldar deuda de Venezuela con el Planeta",
                                link: "https://www.unimet.edu.ve/especialistas-proponen-acciones-individuales-y-colectivas-para-saldar-deuda-de-venezuela-con-el-planeta/",
                                image: "/images/prensa-unimet-sustentabilidad.jpg",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "La Mega 107.3 FM",
                                description: "Entrevista con Karen Brewer que nos cuenta del caso de Ralph el conejo",
                                link: "https://www.youtube.com/watch?v=YHUjBmyGGmk",
                                image: "/images/prensa-la-mega-ralph.jpg",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "Arrobas de culto",
                                description: "Karen Brewer: polémica en los tepuyes deja claro que debemos conocer más nuestra biodiversidad para que nos importe",
                                link: "https://mundour.com/index.php/2022/02/10/karen-brewer-mi-papa-me-enseno-que-somos-parte-de-la-naturaleza/",
                                image: "/images/prensa-arrobas-de-culto.jpg",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "IFISA online",
                                description: "Detallamos algunos cambios que cada persona puede hacer para el beneficio de los ecosistemas, que hoy en día son destruidos y amenazados.",
                                link: "https://www.youtube.com/watch?v=z4j1zz-ibzI",
                                image: "/images/prensa-ifisa-online.png",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "cinco.8",
                                description: "Queremos celebrar a las personas que están cambiando Venezuela y convirtiéndola en un mejor lugar. @karenexplora es una de ellas.",
                                link: "https://www.instagram.com/p/Cj0qW_YKI6T/?igshid=YmMyMTA2M2Y%3D",
                                image: "/images/prensa-cinco8.png",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "Dale la vuelta",
                                description: "Karen Brewer: Exploradora ¿Quieres saber su opinión del \"Rustiqueo\" en Mérida?",
                                link: "https://www.youtube.com/watch?v=A2DY-CHCk8g",
                                image: "/images/prensa-dale-la-vuelta.png",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "Onda la superestación",
                                description: "Karen Brewer: Lo que ocurrió en el páramo de Mérida demuestra que no tenemos educación ambiental",
                                link: "https://mundour.com/index.php/2022/06/06/karen-brewer-lo-que-ocurrio-en-el-paramo-de-merida-demuestra-que-no-tenemos-educacion-ambiental/",
                                image: "/images/prensa-onda-merida.png",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "Unión Radio",
                                description: "Te Tengo Un Cuento: «Los hombres que vinieron desde el cielo», leído por Karen Brewer",
                                link: "https://mundour.com/index.php/2021/07/14/tetengouncuento-los-hombres-que-vinieron-desde-el-cielo-leido-por-karen-brewer/",
                                image: "/images/prensa-union-radio-cuento.png",
                                buttonText: "Haz clic aquí"
                            }
                        ].map((item, index) => (
                            <FadeIn key={index} delay={index * 0.1} className={styles.cardDark}>
                                <img src={item.image} alt={item.title} className={styles.cardImage} />
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc} style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</p>
                                    <a href={item.link} target="_blank" rel="noreferrer" className={styles.cardLink}>{item.buttonText}</a>
                                </div>
                            </FadeIn>
                        ))}

                    </div>
                </div>
            </section>

            {/* Crónicas Section */}
            <section className="section-light">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <FadeIn>
                            <p className={styles.sectionText} style={{ color: '#333' }}>Historias, anécdotas y expediciones.</p>
                        </FadeIn>
                    </div>

                    <div className={styles.storiesGrid}>
                        {/* Sierra de Imataca */}
                        <FadeIn delay={0.1} className={styles.cardLight}>
                            <img src="/images/cronica-sierra-imataca-incendio.jpg" alt="Sierra de Imataca" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <h3 className={`${styles.cardTitle} ${styles.cardTitleDark}`}>Sierra de Imataca</h3>
                                <p className={styles.cardDesc} style={{ color: '#333' }}>La selva más hermosa y abundante que he visto, hogar del águila harpía y mariposas danzantes en llamas</p>
                            </div>
                        </FadeIn>

                        {/* Rescate de fauna Tocoma */}
                        <FadeIn delay={0.2} className={styles.cardLight}>
                            <img src="/images/cronica-rescate-fauna-tocoma.png" alt="Rescate de fauna Tocoma" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <h3 className={`${styles.cardTitle} ${styles.cardTitleDark}`}>Rescate de fauna Tocoma</h3>
                                <p className={styles.cardDesc} style={{ color: '#333' }}>…Había un grupo de monos aulladores atrapados en la isla y era importante recuperarlos a todos juntos….</p>
                                <a href="https://www.meer.com/es/28788-rescate-de-fauna-en-tocoma" target="_blank" rel="noreferrer" className={styles.cardLink}>Sigue leyendo</a>
                            </div>
                        </FadeIn>

                        {/* Cueva Charles Brewer */}
                        <FadeIn delay={0.3} className={styles.cardLight}>
                            <img src="/images/cronica-cueva-charles-brewer.jpg" alt="Cueva Charles Brewer" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <h3 className={`${styles.cardTitle} ${styles.cardTitleDark}`}>Cueva Charles Brewer</h3>
                                <p className={styles.cardDesc} style={{ color: '#333' }}>La expedición Muchimuk</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cronicas;
