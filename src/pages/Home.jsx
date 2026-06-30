import styles from './HomeTerremoto.module.css';
import SEO from '../components/SEO';

const PDF_URL = 'https://karenexplora.com/uploads/mapas_de_relevamiento.pdf';
const PDF_FILENAME = 'Relevamiento-del-desastre-Edo-La-Guaira.pdf';

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <SEO
                title="Mapas de Relevamiento - Terremoto Venezuela 2026 | Edo. La Guaira"
                description="Mapas de relevamiento de la destrucción tras el Terremoto en Venezuela 2026, Estado La Guaira."
            />

            <section className={styles.section}>
                <span className={styles.label}>Recursos verificados</span>
                <h2 className={styles.title}>Directorio de ayuda — Terremoto Venezuela</h2>
                <p className={styles.desc}>Directorio de páginas web y archivos verificados para ayudar a las víctimas del terremoto en Venezuela. Toda la información es revisada antes de publicarse.</p>
                <a
                    href="https://directorio-sismo.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.btn}
                >
                    Ir al directorio →
                </a>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <span className={styles.label}>Edo. La Guaira</span>
                <h2 className={styles.title}>
                    Mapas de relevamiento de la destrucción<br />
                    <span className={styles.accent}>tras el Terremoto en Venezuela 2026</span>
                </h2>
                <a
                    href={PDF_URL}
                    download={PDF_FILENAME}
                    className={styles.btn}
                    target="_blank"
                    rel="noreferrer"
                >
                    ↓ Descargar PDF
                </a>
            </section>

            <div className={styles.divider} />

            <section className={styles.guide}>
                <span className={styles.label}>Protocolos internacionales</span>
                <h2 className={styles.title}>Guía Comunitaria y de Emergencia: Protocolos de Respuesta Ante Sismos</h2>
                <p className={styles.desc}>
                    Ante la crisis crítica causadas por terremotos y réplicas, la coordinación ciudadana y el apego a protocolos internacionales salvan vidas.
                    Esta guía consolida los lineamientos fundamentales de organización para voluntarios, rescatistas no profesionales y personal de soporte en zonas de desastre.
                </p>

                {/* Sección 1 */}
                <div className={styles.guideBlock}>
                    <h3 className={styles.guideH3}>1. División de Espacios de Acción</h3>
                    <p className={styles.guideP}>Para optimizar los recursos y garantizar la seguridad, las operaciones se dividen estrictamente en dos áreas independientes que jamás deben mezclarse:</p>

                    <div className={styles.zoneGrid}>
                        <div className={styles.zoneCard}>
                            <h4 className={styles.zoneTitle}>A. Zona Cero <span>(Área de Impacto y Derrumbes)</span></h4>
                            <p className={styles.guideP}><strong>Objetivo:</strong> Búsqueda, rescate y estabilización de víctimas atrapadas en estructuras colapsadas.</p>
                            <p className={styles.guideP}><strong>Restricciones:</strong> No ingresar alimentos, ropa ni personal civil sin tareas específicas asignadas para evitar estorbar o generar sobrepeso en estructuras inestables.</p>
                            <p className={styles.guideP}><strong>Insumos Críticos Inmediatos:</strong></p>
                            <ul className={styles.guideList}>
                                <li>Herramientas pesadas: Palas, picos, tobos, cuerdas pesadas, mandarrias, discos de corte.</li>
                                <li>Iluminación: Linternas con pilas de repuesto.</li>
                                <li>Protección e Higiene Biológica: Mascarillas para polvo de concreto, guantes de carnaza/rescate, bolsas para cadáveres.</li>
                            </ul>
                            <p className={styles.guideP}><strong>Personal Requerido:</strong> Rescatistas certificados y equipos médicos de emergencia avanzados en trauma.</p>
                        </div>

                        <div className={styles.zoneCard}>
                            <h4 className={styles.zoneTitle}>B. Zona de Soporte <span>(Centros de Acopio y Refugios)</span></h4>
                            <p className={styles.guideP}><strong>Objetivo:</strong> Atención integral a la crisis humanitaria de personas damnificadas y gestión logística de recursos.</p>
                            <p className={styles.guideP}><strong>Insumos Críticos:</strong> Alimentos no perecederos (sin aditivos propensos a descomposición rápida como la mayonesa), agua potable embotellada, mantas, colchonetas, kits de higiene personal.</p>
                            <p className={styles.guideP}><strong>Personal Requerido:</strong> Médicos generales, enfermeros, psicólogos de emergencia y voluntarios civiles sin experiencia técnica previa.</p>
                        </div>
                    </div>
                </div>

                {/* Sección 2 */}
                <div className={styles.guideBlock}>
                    <h3 className={styles.guideH3}>2. Protocolos de Seguridad y Dinámicas en la Zona Cero</h3>
                    <p className={styles.guideP}>El trabajo en estructuras colapsadas presenta altos riesgos sanitarios y físicos. Se deben seguir las siguientes directrices:</p>

                    <div className={styles.table}>
                        <div className={styles.tableRow + ' ' + styles.tableHeader}>
                            <div className={styles.tableCell}>Aspecto</div>
                            <div className={styles.tableCell}>Protocolo e Instrucciones Estrictas</div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCellHead}>Equipo de Protección Individual (EPI)</div>
                            <div className={styles.tableCell}>Uso obligatorio de casco asegurado, lentes de protección contra fluidos/polvo, zapatos o botas cerradas de suela gruesa, mascarilla (el polvo de concreto es altamente tóxico) y doble guante (guantes de látex primero, cubiertos por guantes de carnaza).</div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCellHead}>Remoción de Escombros</div>
                            <div className={styles.tableCell}>Organizar a los civiles en una cadena humana de escombros para agilizar la limpieza de forma lineal. Evitar que multitud de personas caminen sobre estructuras colapsadas para prevenir nuevos derrumbes sobre espacios con posibles sobrevivientes.</div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCellHead}>Localización y Alerta</div>
                            <div className={styles.tableCell}>Prestar atención absoluta a las órdenes de los equipos profesionales. Si se solicita silencio total, replicar y exigir la orden inmediatamente para permitir la escucha de señales de vida bajo las estructuras.</div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCellHead}>Atención de Víctimas</div>
                            <div className={styles.tableCell}>No jalar bruscamente a las personas atrapadas. El aplastamiento prolongado libera toxinas que provocan paros cardíacos fulminantes al restablecerse la circulación de golpe (Síndrome de Aplastamiento). Se requiere hidratación intravenosa previa aplicada por personal médico de trauma.</div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={styles.tableCellHead}>Logística Crítica</div>
                            <div className={styles.tableCell}>Mantener permanentemente despejadas las vías de acceso y tránsito de ambulancias. Dar prioridad vehicular y peatonal absoluta a las unidades de emergencia.</div>
                        </div>
                    </div>
                </div>

                {/* Sección 3 */}
                <div className={styles.guideBlock}>
                    <h3 className={styles.guideH3}>3. Gestión de Centros de Acopio (Los Tres Pasos del Donante)</h3>
                    <p className={styles.guideP}>El flujo logístico eficiente para donaciones consta de tres etapas obligatorias:</p>

                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.stepNum}>1</div>
                            <div>
                                <h4 className={styles.stepTitle}>Recolección</h4>
                                <p className={styles.guideP}>Centralizar la recepción de suministros única y exclusivamente en los centros de acopio autorizados.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNum}>2</div>
                            <div>
                                <h4 className={styles.stepTitle}>Clasificación Interna</h4>
                                <p className={styles.guideP}>Los centros de acopio deben organizarse rígidamente en tres áreas físicas independientes:</p>
                                <ul className={styles.guideList}>
                                    <li><strong>Área de Recepción y Filtro:</strong> Se inspeccionan los insumos. Es obligatorio revisar y anotar visiblemente las fechas de vencimiento de medicinas y enlatados. Medida de seguridad obligatoria: Tachar con marcador permanente los códigos de barra de las donaciones para inhabilitar su reventa ilegal.</li>
                                    <li><strong>Área de Clasificación (Islas de Trabajo):</strong> Separar los suministros por categorías herméticas para evitar contaminaciones cruzadas (por ejemplo, mantener los químicos y productos de limpieza totalmente aislados de los alimentos). Las islas principales son: Alimentos, Higiene/Limpieza y Ropa/Textiles.</li>
                                    <li><strong>Área de Despacho:</strong> Preparar bultos o cajas herméticamente cerradas y rotular de forma clara y detallada su contenido exacto en el exterior (ej. "Caja N° 12: 14 latas de atún, Vence: 2028"). Esto evita demoras críticas en los destinos de entrega.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNum}>3</div>
                            <div>
                                <h4 className={styles.stepTitle}>Distribución</h4>
                                <p className={styles.guideP}>Coordinar el transporte de manera centralizada. Los vehículos y camiones de voluntarios deben reportarse al centro de acopio para asignación de rutas despejadas y seguras. Las herramientas e insumos de rescate se dirigen a la Zona Cero; los alimentos, ropa y medicamentos van a la Zona de Soporte.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección 4 */}
                <div className={styles.guideBlock}>
                    <h3 className={styles.guideH3}>4. Especificaciones Técnicas de Insumos</h3>
                    <div className={styles.insumos}>
                        <div className={styles.insumoItem}>
                            <h4 className={styles.insumoTitle}>🥫 Alimentos</h4>
                            <p className={styles.guideP}>No perecederos, de alto valor nutricional y fácil apertura (preferiblemente con sistema abrefácil). Proteínas listas (atún, sardinas, granos precocidos), carbohidratos secos (arroz, pasta, harina de maíz, avena), alimentos energéticos inmediatos (galletas, barras de cereales, frutos secos, leche en polvo, miel) y agua mineral embotellada.</p>
                        </div>
                        <div className={styles.insumoItem}>
                            <h4 className={styles.insumoTitle}>👕 Ropa y Textiles</h4>
                            <p className={styles.guideP}>Sábanas limpias, colchonetas, toallas y ropa interior (esta última debe ser estrictamente nueva). La ropa de segunda mano debe entregarse limpia, doblada y clasificada por tallas. <em>Evitar donar calzado de tacón o vestidos de fiesta inadecuados para situaciones de desastre.</em></p>
                        </div>
                        <div className={styles.insumoItem}>
                            <h4 className={styles.insumoTitle}>🧴 Higiene y Mantenimiento</h4>
                            <p className={styles.guideP}>Toallas sanitarias, pañales infantiles de diversas tallas, toallitas húmedas, jabón, pasta de dientes. Para el mantenimiento de los refugios: cloro, desinfectante y bolsas de basura de alta resistencia para prevenir brotes bacterianos o infecciones gastrointestinales.</p>
                        </div>
                    </div>
                </div>

                {/* Sección 5 */}
                <div className={styles.guideBlock}>
                    <h3 className={styles.guideH3}>5. Protocolo Estricto de Protección Infantil en Refugios</h3>
                    <p className={styles.guideP}>El desorden sociológico e institucional de los refugios incrementa exponencialmente la vulnerabilidad de los menores de edad. Se implementan de forma obligatoria los siguientes controles comunitarios:</p>
                    <ul className={styles.guideList}>
                        <li><strong>Espacio Seguro para la Infancia:</strong> Delimitar un área física protegida y vigilada de forma ininterrumpida, exclusiva para la recreación, descanso y contención psicológica de niños y niñas.</li>
                        <li><strong>Personal Autorizado:</strong> Este espacio estará a cargo únicamente de voluntarios previamente registrados, verificados e identificados (ej. maestros, psicólogos licenciados o líderes comunitarios acreditados).</li>
                        <li><strong>Control de Movilización Rígido:</strong> Queda terminantemente prohibido que un menor de edad abandone el refugio con particulares, vecinos o familiares allegados sin una verificación estricta de identidad. Cada salida o movimiento de un menor debe ser asentado obligatoriamente en una bitácora física de control de novedades detallando la identidad plena del adulto responsable.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Home;
