const videos = [
    { "title": "Gracias y feliz cumpleaños Charles Brewer-Carías!", "id": "o75Cm2cnmTI" },
    { "title": "La primera noche en el fondo de Sarisariñama Por Charles Brewer-Carías", "id": "EkWeTMHNFnQ" },
    { "title": "Expedición al Sarisariñama. Llegaron al fondo. Por Charles Brewer-Carías", "id": "u1hI5RuLd7E" },
    { "title": "El primer descenso a Sarisariñama, las simas de hundimiento, por Charles Brewer-Carías", "id": "gQ8XFMWBKpg" },
    { "title": "Sarisariñama cap2: empieza la primera expedición por Charles Brewer-Carías", "id": "pbRxJluwuzI" },
    { "title": "Sarisariñama parte 1: preparando la expedición, por Charles Brewer Carías", "id": "Ol9xJ_rMyII" },
    { "title": "Mapa de plantas carnívoras de los Tepuyes por Charles Brewer-Carías", "id": "Q6BlWjWTdcU" },
    { "title": "Feliz cumpleaños papá!! Charles Brewer-Carías", "id": "EuPSdCm9DbQ" },
    { "title": "Charles Brewer-Carías sobre plantas de los tepuyes", "id": "xqEhZwzWjqg" },
    { "title": "Charles Brewer-Carías: Calentamiento Global y Cambio climático", "id": "VdXRx1PrtyM" },
    { "title": "Extracto entrevista Karen Brewer y Charles Brewer-Carías -Improvisando", "id": "m-HSSdrBUes" },
    { "title": "Rey Charles en Venezuela", "id": "SEv3oLX_YH8" },
    { "title": "Relato Charles Brewer-Carías Yekuana", "id": "zlCvAhEkB3o" },
    { "title": "Nuevo libro de Charles Brewer-Carías sobre plantas de los tepuyes", "id": "fX-q-AGHJ3U" },
    { "title": "Fhíchu, flauta Yekuana por Charles Brewer-Carías", "id": "XkLkrLUPt9M" },
    { "title": "Me picó una hormiga 24. Charles Brewer-Carías", "id": "OKkKlEtzZVA" },
    { "title": "Hormiga 24 por Charles Brewer-Carías", "id": "A-TN9lHe_1s" },
    { "title": "Yanomami por Charles Brewer Carías", "id": "U1H8skiBzIg" },
    { "title": "Sarisariñama Expedición por Charles Brewer Carias", "id": "PCupPKOzjBw" },
    { "title": "Hierba Caracas, Pira o Amaranto por Charles Brewer Carias", "id": "du8nKOHcrVg" },
    { "title": "Sonido de serpientes  Charles Brewer Carias", "id": "JqIA3Iy5j94" },
    { "title": "Charles Brewer Carias. Anécdotas: los yekuana y su filosofía de vida", "id": "IUSHwsZ8vzM" },
    { "title": "Charles Brewer Carias. Anécdotas: La paciencia", "id": "MK6y7_dPW2o" },
    { "title": "Charles Brewer Carias haciendo barras", "id": "U7fjpZWFl-4" }
];

import FadeIn from '../components/FadeIn';

const Charles = () => {
    return (
        <div>
            <header className="hero" style={{ backgroundImage: "url('/images/50_Charles.jpg')", height: '60vh', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', textAlign: 'center', color: 'white' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }}></div>
                <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
                    <FadeIn>
                        <h1 style={{ fontFamily: 'Playfair Display', fontSize: '3rem' }}>Charles Brewer-Carías</h1>
                        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Escribiendo la historia natural de Venezuela a través de la exploración pura.</p>
                    </FadeIn>
                </div>
            </header>

            <section className="section-light text-center">
                <div className="container">
                    <FadeIn>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'Outfit', fontWeight: '600', marginBottom: '15px', color: 'var(--primary)' }}>El Legado del Explorador</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>Estamos digitalizando décadas de expediciones, hallazgos científicos y bitácoras de campo para compartir el conocimiento de una vida dedicada a la naturaleza.</p>
                    </FadeIn>
                </div>
            </section>

            <section className="section-dark">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <FadeIn>
                            <h2 style={{ fontFamily: 'Outfit', fontSize: '2.5rem', marginBottom: '10px', color: 'white' }}>Videoteca</h2>
                            <p style={{ opacity: 0.8 }}>Documentos audiovisuales de las expediciones y anécdotas.</p>
                        </FadeIn>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '30px'
                    }}>
                        {videos.map((video, idx) => (
                            <FadeIn key={video.id} delay={idx * 0.05} style={{
                                background: 'var(--glass)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                transition: 'transform 0.3s'
                            }}>
                                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id}`}
                                        title={video.title}
                                        allowFullScreen
                                        loading="lazy"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                    ></iframe>
                                </div>
                                <div style={{ padding: '15px', fontSize: '0.95rem', fontWeight: '600', color: 'var(--text)', lineHeight: '1.4' }}>
                                    {video.title}
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Charles;
