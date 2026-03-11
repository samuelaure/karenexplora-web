import { useState, useEffect } from 'react';
import { X, CreditCard, Landmark, Globe, MessageSquare, Wallet } from 'lucide-react';
import styles from './PaymentModal.module.css';
import Button from './Button';

const PaymentModal = ({ isOpen, onClose, planName, planPrice, stripeLink }) => {
    const [activeTab, setActiveTab] = useState('paypal'); // paypal, binance, vzla, card, iban
    const [rate, setRate] = useState(0);

    useEffect(() => {
        if (isOpen) {
            fetch('https://ve.dolarapi.com/v1/dolares/paralelo')
                .then(res => res.json())
                .then(data => {
                    if (data && data.promedio) {
                        // Rounding down to nearest 5 as requested (e.g. 615.63 -> 615)
                        const rawRate = data.promedio;
                        setRate(Math.floor(rawRate / 5) * 5);
                    }
                })
                .catch(err => console.error('Error fetching rate:', err));
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const vesAmount = rate > 0 ? (planPrice * rate).toLocaleString('es-VE') : '---';
    const displayRate = rate > 0 ? rate.toLocaleString('es-VE') : '---';

    const whatsappBase = "https://wa.me/34656328436?text=";
    const ibanMessage = `Hola, me gustaría inscribirme en "${planName}" ($${planPrice}). Prefiero pagar por transferencia bancaria en Europa (IBAN).`;
    const whatsappIbanLink = whatsappBase + encodeURIComponent(ibanMessage);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    const getReportMessage = () => {
        if (activeTab === 'vzla') {
            return `¡Hola! He realizado el pago de Bs. ${vesAmount} (equivalente a $${planPrice} USD, tasa ${displayRate}) por el plan "${planName}". Adjunto el comprobante.`;
        }
        return `¡Hola! He realizado el pago de $${planPrice} por el plan "${planName}" vía ${activeTab.toUpperCase()}. Adjunto el comprobante.`;
    };

    const ReportNote = () => {
        const whatsappReportLink = whatsappBase + encodeURIComponent(getReportMessage());

        return (
            <div className={styles.reportNote}>
                <strong>IMPORTANTE:</strong> Es imprescindible que envíes el comprobante por WhatsApp.
                Sin el reporte, no podemos identificar tu pago ni habilitar tu acceso.
                <div className={styles.whatsappAction} style={{ marginTop: '1rem' }}>
                    <Button href={whatsappReportLink} target="_blank" variant="accent" full>
                        <MessageSquare size={18} style={{ marginRight: '8px' }} /> Enviar Comprobante
                    </Button>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modalContent}>
                <button className={styles.modalClose} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Inscripción al Taller</h2>
                    <div className={styles.modalPlanSummary}>
                        Plan {planName} — ${planPrice}
                    </div>
                </div>

                <div className={styles.modalTabs}>
                    <button
                        className={`${styles.tabBtn} ${activeTab === 'paypal' ? styles.active : ''}`}
                        onClick={() => setActiveTab('paypal')}
                    >
                        <Globe size={18} /> PayPal
                    </button>
                    <button
                        className={`${styles.tabBtn} ${activeTab === 'binance' ? styles.active : ''}`}
                        onClick={() => setActiveTab('binance')}
                    >
                        <Wallet size={18} /> Binance
                    </button>
                    <button
                        className={`${styles.tabBtn} ${activeTab === 'vzla' ? styles.active : ''}`}
                        onClick={() => setActiveTab('vzla')}
                    >
                        <Landmark size={18} /> Vzla
                    </button>
                    <button
                        className={`${styles.tabBtn} ${activeTab === 'card' ? styles.active : ''}`}
                        onClick={() => setActiveTab('card')}
                    >
                        <CreditCard size={18} /> Tarjeta
                    </button>
                    <button
                        className={`${styles.tabBtn} ${activeTab === 'iban' ? styles.active : ''}`}
                        onClick={() => setActiveTab('iban')}
                    >
                        <Landmark size={18} /> IBAN
                    </button>
                </div>

                <div className={styles.tabContent}>
                    {activeTab === 'paypal' && (
                        <div className="animate-fadeIn">
                            <div className={styles.paymentDetailRow}>
                                <span className={styles.detailLabel}>Enviar pago a (Email)</span>
                                <span className={styles.detailValue}>johnbrewercarias@gmail.com</span>
                            </div>
                            <div className={styles.paymentDetailRow}>
                                <span className={styles.detailLabel}>Monto a enviar</span>
                                <span className={styles.detailValue}>${planPrice} USD</span>
                            </div>
                            <ReportNote />
                        </div>
                    )}

                    {activeTab === 'binance' && (
                        <div className="animate-fadeIn">
                            <div className={styles.paymentDetailRow}>
                                <span className={styles.detailLabel}>Binance ID</span>
                                <span className={styles.detailValue}>974 571 680</span>
                            </div>
                            <div className={styles.paymentDetailRow}>
                                <span className={styles.detailLabel}>Usuario Pay</span>
                                <span className={styles.detailValue}>@SamuelAure</span>
                            </div>
                            <ReportNote />
                        </div>
                    )}

                    {activeTab === 'vzla' && (
                        <div className="animate-fadeIn">
                            <div className={styles.paymentDetailRow}>
                                <span className={styles.detailLabel}>Monto a transferir</span>
                                <span className={styles.detailPrime}>Bs. {vesAmount}</span>
                                <span className={styles.detailSecondary}>
                                    Correspondiente a ${planPrice} USD <br />
                                    Tasa aplicada: 1 USD = {displayRate} Bs.
                                </span>
                            </div>
                            <div className={styles.paymentDetailRow}>
                                <span className={styles.detailLabel}>Banco</span>
                                <span className={styles.detailValue}>[Tu Banco en Vzla]</span>
                            </div>
                            <div className={styles.paymentDetailRow}>
                                <span className={styles.detailLabel}>Datos de Pago Móvil / Transferencia</span>
                                <span className={styles.detailValue}>
                                    Cédula: [Tu Cédula]<br />
                                    Teléfono: [Tu Teléfono]<br />
                                    Cuenta: [Tu Número de Cuenta]
                                </span>
                            </div>
                            <div className={styles.modalInstructions}>
                                <span className={styles.instructionTitle}>Tasa Referencial:</span>
                                <p className={styles.instructionText}>
                                    Estamos usando la tasa de <strong>Binance P2P</strong> (redondeada a favor del explorador) para que el proceso sea más transparente.
                                </p>
                            </div>
                            <ReportNote />
                        </div>
                    )}

                    {activeTab === 'card' && (
                        <div className="animate-fadeIn">
                            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '2rem' }}>
                                Pulsa el botón para ir a la plataforma segura de Stripe y realizar el pago con tu tarjeta.
                            </p>
                            <div style={{ textAlign: 'center' }}>
                                <Button href={stripeLink} target="_blank" variant="accent" full>
                                    Pagar con Tarjeta (Stripe)
                                </Button>
                            </div>
                            <ReportNote />
                        </div>
                    )}

                    {activeTab === 'iban' && (
                        <div className="animate-fadeIn">
                            <div className={styles.paymentDetailRow}>
                                <span className={styles.detailLabel}>IBAN (Bélgica)</span>
                                <span className={styles.detailValue}>BE32 9675 7698 8702</span>
                            </div>
                            <div className={styles.paymentDetailRow}>
                                <span className={styles.detailLabel}>Beneficiario</span>
                                <span className={styles.detailValue}>Samuel Aure</span>
                            </div>
                            <ReportNote />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
