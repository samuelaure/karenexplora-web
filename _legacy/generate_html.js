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

let html = `    <section class="section-dark">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Videoteca</h2>
                <p>Documentos audiovisuales de las expediciones, anécdotas y reflexiones de Charles Brewer-Carías.</p>
            </div>
            <div class="video-grid">
`;

videos.forEach(v => {
    html += `                <div class="video-card">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/${v.id}" title="${v.title}" allowfullscreen loading="lazy"></iframe>
                    </div>
                    <div class="video-title">${v.title}</div>
                </div>
`;
});

html += `            </div>
        </div>
    </section>
`;

console.log(html);
