import Slider from '../components/Slider';
import FadeIn from '../components/FadeIn';
import styles from './Cronicas.module.css';

const Cronicas = () => {
    return (
        <div>
            <header className="hero" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/3b9a5ae8-22a3-47b5-8db5-e0e2f49de130/Auyan_helivopter9504.jpg')", height: '60vh', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 0 }}></div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <FadeIn>
                        <h1 style={{ fontStyle: 'italic', fontFamily: 'Playfair Display, serif', fontWeight: 'bold', fontSize: '6rem' }}>Crónicas de la Selva</h1>
                        <p style={{ fontSize: '1.4rem', opacity: 0.9 }}>Historias que nos harán viajar a lugares nunca imaginados.</p>
                    </FadeIn>
                </div>
            </header>

            <section className="section-light" style={{ padding: '60px 0 !important' }}>
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

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            {
                                title: "Distintas latitudes",
                                description: "Karen Brewer, una exploradora venezolana que lucha por defender la biodiversidad desde el aprendizaje",
                                link: "https://distintaslatitudes.net/entrevistas/karen-brewer-exploradora-venezolana",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/3b15023a-1a4b-4983-bb90-d7532c1424fc/distintas+latitudes.jpeg",
                                buttonText: "Lee más"
                            },
                            {
                                title: "El Diario",
                                description: "Karen Brewer-Carías: “Todas las decisiones que tomamos, por más mínimas que sean, tienen un impacto en el mundo”",
                                link: "https://eldiario.com/2021/06/08/karen-brewer-carias-decisiones-tomamos-tienen-impacto-mundo/",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/e6038422-1656-46e4-98e7-57c11b97f5e5/el+diario.jpg",
                                buttonText: "Lee más"
                            },
                            {
                                title: "La tertulia",
                                description: "A través de sus estudios se convirtió en divulgadora naturalista y representante de la preservación de los animales en la fauna venezolana.",
                                link: "https://www.youtube.com/watch?v=q3ZJv2rKWRM",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/7d49ae5c-cd01-495b-bca9-e6f4deaddcf4/Screen+Shot+2023-02-06+at+11.59.24+PM.jpg",
                                buttonText: "Mira la entrevista"
                            },
                            {
                                title: "Ararauna",
                                description: "Entrevista a la hija del explorador e investigador Charles Brewer Carías tras el incendio de su estudio donde se perdieron 70 años de trabajo sobre Venezuela",
                                link: "https://www.youtube.com/watch?v=nXgP4Htek9E",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/1726113e-d13b-4a03-8206-38df02d557eb/Screen+Shot+2023-02-07+at+12.04.28+AM.png",
                                buttonText: "Mira la entrevista"
                            },
                            {
                                title: "Hato Las Caretas",
                                description: "Pasión por la naturaleza Karen Brewer, exploradora y naturalista",
                                link: "http://hatolascaretas.com/pasion-por-la-naturaleza-karen-brewer-exploradora-y-naturalista/",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/d4e1ba2c-44de-4d8c-b472-831a4083f893/Screen+Shot+2023-02-07+at+12.09.02+AM.png",
                                buttonText: "Lee más"
                            },
                            {
                                title: "Agenda Exitos",
                                description: "El mundo según Karen Brewer",
                                link: "https://www.youtube.com/watch?v=D9ryhDWC27w",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/e46e202a-cfdc-4d4a-bc63-db86dd4c6510/exitos.jpeg",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "Viajando y contando",
                                description: "Apasionada exploradora venezolana que junto a su Padre y familia han recorrido todo el territorio de Venezuela investigándolo.",
                                link: "https://www.youtube.com/watch?v=KnVZLVfqCKo",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/a59f4628-2e34-425f-bb88-093f19468b85/Screen+Shot+2023-02-07+at+12.16.42+AM.png",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "La Cátedra del Pop",
                                description: "Entrevista a Karen Brewer sobre ambientalismo en Venezuela.",
                                link: "https://www.youtube.com/watch?v=qSpT744hf60",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/44cad55b-f754-4e84-b222-ae5281cfe8ec/Screen+Shot+2023-02-07+at+12.23.34+AM.png",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "Qué Vaina",
                                description: "El Valor del Patrimonio Arqueológico de Charles Brewer-Carias",
                                link: "https://www.facebook.com/queVaina.es/videos/el-valor-del-patrimonio-arqueologico-de-charles-brewer-carias/896428427797064/",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/687f9b63-6187-4cd7-a9b7-8267ce32f072/que+vaina.jpeg",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "UNIMET",
                                description: "Especialistas proponen acciones individuales y colectivas para saldar deuda de Venezuela con el Planeta",
                                link: "https://www.unimet.edu.ve/especialistas-proponen-acciones-individuales-y-colectivas-para-saldar-deuda-de-venezuela-con-el-planeta/",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/4aa49c54-978c-4ba3-80ea-733df4cf5929/Sustentabilidad-2-1030x508.jpeg",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "La Mega 107.3 FM",
                                description: "Entrevista con Karen Brewer que nos cuenta del caso de Ralph el conejo",
                                link: "https://www.youtube.com/watch?v=YHUjBmyGGmk",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/0b70be06-ca99-470c-ae55-78337b738d67/5minutosmas.jpeg",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "Arrobas de culto",
                                description: "Karen Brewer: polémica en los tepuyes deja claro que debemos conocer más nuestra biodiversidad para que nos importe",
                                link: "https://mundour.com/index.php/2022/02/10/karen-brewer-mi-papa-me-enseno-que-somos-parte-de-la-naturaleza/",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/4c280685-0ef7-4c67-b1b8-a575d9f66b24/exitos2.jpeg",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "IFISA online",
                                description: "Detallamos algunos cambios que cada persona puede hacer para el beneficio de los ecosistemas, que hoy en día son destruidos y amenazados.",
                                link: "https://www.youtube.com/watch?v=z4j1zz-ibzI",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/74a287a2-a200-4ac3-9193-509a33fb2120/Screen+Shot+2023-02-07+at+12.39.53+AM.png",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "cinco.8",
                                description: "Queremos celebrar a las personas que están cambiando Venezuela y convirtiéndola en un mejor lugar. @karenexplora es una de ellas.",
                                link: "https://www.instagram.com/p/Cj0qW_YKI6T/?igshid=YmMyMTA2M2Y%3D",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/c317702e-0c8b-486c-9f00-22fcaa28025a/Screen+Shot+2023-02-07+at+12.46.35+AM.png",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "Dale la vuelta",
                                description: "Karen Brewer: Exploradora ¿Quieres saber su opinión del \"Rustiqueo\" en Mérida?",
                                link: "https://www.youtube.com/watch?v=A2DY-CHCk8g",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/4f243dfb-8f71-41d7-9091-6c8da1147dd0/Screen+Shot+2023-02-07+at+12.49.08+AM.png",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "Onda la superestación",
                                description: "Karen Brewer: Lo que ocurrió en el páramo de Mérida demuestra que no tenemos educación ambiental",
                                link: "https://mundour.com/index.php/2022/06/06/karen-brewer-lo-que-ocurrio-en-el-paramo-de-merida-demuestra-que-no-tenemos-educacion-ambiental/",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/24b72029-b9b3-4d01-b026-5e038f6bcf1b/Screen+Shot+2023-02-07+at+12.52.43+AM.png",
                                buttonText: "Haz clic aquí"
                            },
                            {
                                title: "Unión Radio",
                                description: "Te Tengo Un Cuento: «Los hombres que vinieron desde el cielo», leído por Karen Brewer",
                                link: "https://mundour.com/index.php/2021/07/14/tetengouncuento-los-hombres-que-vinieron-desde-el-cielo-leido-por-karen-brewer/",
                                image: "https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/baa345e9-c9b9-4c01-bd9e-0f764c2d30c9/Screen+Shot+2023-02-07+at+12.56.06+AM.png",
                                buttonText: "Haz clic aquí"
                            }
                        ].map((item, index) => (
                            <FadeIn key={index} delay={index * 0.1} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div style={{ padding: '20px' }}>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', fontFamily: 'Outfit', marginBottom: '10px', color: 'var(--text)' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '15px', opacity: 0.8, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</p>
                                    <a href={item.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 'bold' }}>{item.buttonText}</a>
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

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {/* Sierra de Imataca */}
                        <FadeIn delay={0.1} style={{ background: 'rgba(0,0,0,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
                            <img src="https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/cbc73761-0304-4e7b-972f-0697232ab131/16_Incendio_dentro.jpg" alt="Sierra de Imataca" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', fontFamily: 'Outfit', marginBottom: '10px', color: '#000' }}>Sierra de Imataca</h3>
                                <p style={{ fontSize: '0.9rem', marginBottom: '15px', color: '#333' }}>La selva más hermosa y abundante que he visto, hogar del águila harpía y mariposas danzantes en llamas</p>
                            </div>
                        </FadeIn>

                        {/* Rescate de fauna Tocoma */}
                        <FadeIn delay={0.2} style={{ background: 'rgba(0,0,0,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
                            <img src="https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/56fcd51c-ee15-416f-a442-04d4ef2b106d/Screen+Shot+2020-07-01+at+11.45.50+AM.png" alt="Rescate de fauna Tocoma" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', fontFamily: 'Outfit', marginBottom: '10px', color: '#000' }}>Rescate de fauna Tocoma</h3>
                                <p style={{ fontSize: '0.9rem', marginBottom: '15px', color: '#333' }}>…Había un grupo de monos aulladores atrapados en la isla y era importante recuperarlos a todos juntos….</p>
                                <a href="https://www.meer.com/es/28788-rescate-de-fauna-en-tocoma" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 'bold' }}>Sigue leyendo</a>
                            </div>
                        </FadeIn>

                        {/* Cueva Charles Brewer */}
                        <FadeIn delay={0.3} style={{ background: 'rgba(0,0,0,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
                            <img src="https://images.squarespace-cdn.com/content/v1/63d6a06c1ec3d51b881f3ea7/e098d0e8-412d-4306-bc1e-656db263bebc/50_Charles+cueva+Charles+copy.jpg" alt="Cueva Charles Brewer" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', fontFamily: 'Outfit', marginBottom: '10px', color: '#000' }}>Cueva Charles Brewer</h3>
                                <p style={{ fontSize: '0.9rem', marginBottom: '15px', color: '#333' }}>La expedición Muchimuk</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cronicas;
