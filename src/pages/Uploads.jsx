import { useState, useRef, useEffect } from 'react';
import { UploadCloud, CheckCircle, Copy, X, Lock, FileText, Loader2 } from 'lucide-react';
import styles from './Uploads.module.css';
import Button from '../components/Button';
import SEO from '../components/SEO';

const Uploads = () => {
    const [secret, setSecret] = useState(() => sessionStorage.getItem('upload_secret') || '');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [files, setFiles] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadedUrls, setUploadedUrls] = useState([]);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [copied, setCopied] = useState(false);
    const fileInputRef = useRef(null);

    // Auto-verify stored secret on mount if present
    useEffect(() => {
        const storedSecret = sessionStorage.getItem('upload_secret');
        if (storedSecret) {
            verifyPassword(storedSecret);
        }
    }, []);

    const verifyPassword = async (pwd) => {
        setIsVerifying(true);
        setError('');
        try {
            const res = await fetch('/api/upload.php?action=verify', {
                method: 'POST',
                headers: {
                    'X-Upload-Secret': pwd
                }
            });
            const data = await res.json();
            if (res.ok && data.success) {
                setIsAuthenticated(true);
                sessionStorage.setItem('upload_secret', pwd);
            } else {
                setIsAuthenticated(false);
                sessionStorage.removeItem('upload_secret');
                setError(data.message || 'Contraseña incorrecta.');
            }
        } catch (err) {
            console.error('Auth verification error:', err);
            setError('Error al conectar con el servidor.');
        } finally {
            setIsVerifying(false);
        }
    };

    const handleAuthSubmit = (e) => {
        e.preventDefault();
        if (!secret.trim()) {
            setError('Ingresa la contraseña.');
            return;
        }
        verifyPassword(secret.trim());
    };

    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files || []);
        if (selectedFiles.length > 0) {
            setFiles((prev) => [...prev, ...selectedFiles]);
            setError('');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const droppedFiles = Array.from(e.dataTransfer.files || []);
        if (droppedFiles.length > 0) {
            setFiles((prev) => [...prev, ...droppedFiles]);
            setError('');
        }
    };

    const removeFile = (index) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleUpload = async () => {
        if (files.length === 0) {
            setError('Selecciona al menos un archivo para subir.');
            return;
        }

        setIsUploading(true);
        setError('');
        setSuccessMessage('');

        const formData = new FormData();
        files.forEach((file) => {
            formData.append('files[]', file);
        });

        try {
            const response = await fetch('/api/upload.php', {
                method: 'POST',
                headers: {
                    'X-Upload-Secret': secret
                },
                body: formData
            });

            const data = await response.json();

            if (data.success && data.files) {
                const newUrls = data.files.map((f) => f.url);
                setUploadedUrls((prev) => [...prev, ...newUrls]);
                setSuccessMessage(`${data.files.length} archivo(s) subido(s) con éxito.`);
                setFiles([]);
                if (data.errors && data.errors.length > 0) {
                    setError(data.errors.join(' '));
                }
            } else {
                setError(data.message || 'Error al procesar la carga.');
                if (response.status === 401) {
                    setIsAuthenticated(false);
                    sessionStorage.removeItem('upload_secret');
                }
            }
        } catch (err) {
            console.error('Upload Error:', err);
            setError('Error de conexión o fallo en el servidor.');
        } finally {
            setIsUploading(false);
        }
    };

    const copyAllUrls = () => {
        if (uploadedUrls.length === 0) return;
        const textToCopy = uploadedUrls.join('\n');
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const formatBytes = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div className={styles.container}>
            <SEO title="Gestor de Archivos" noindex={true} />

            <h1 className={styles.title}>Gestor de Archivos</h1>
            <p className={styles.subtitle}>
                Subida y gestión de imágenes y documentos para el sitio web.
            </p>

            {error && <div className={`${styles.alert} ${styles.alertError}`}>{error}</div>}
            {successMessage && <div className={`${styles.alert} ${styles.alertSuccess}`}>{successMessage}</div>}

            {!isAuthenticated ? (
                <div className={styles.card}>
                    <form onSubmit={handleAuthSubmit} className={styles.authForm}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>
                                <Lock size={16} style={{ display: 'inline', marginRight: '6px' }} />
                                Contraseña
                            </label>
                            <input
                                type="password"
                                className={styles.input}
                                value={secret}
                                onChange={(e) => setSecret(e.target.value)}
                                placeholder="Ingresa tu contraseña"
                                required
                            />
                        </div>
                        <Button type="submit" variant="primary" full disabled={isVerifying}>
                            {isVerifying ? (
                                <>
                                    <Loader2 size={18} className="spin" style={{ marginRight: '8px' }} />
                                    Verificando...
                                </>
                            ) : (
                                'Ingresar'
                            )}
                        </Button>
                    </form>
                </div>
            ) : (
                <>
                    <div className={styles.card}>
                        <div
                            className={styles.dropzone}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileSelect}
                                multiple
                                style={{ display: 'none' }}
                            />
                            <UploadCloud size={48} className={styles.dropIcon} />
                            <div className={styles.dropText}>
                                Arrastra y suelta tus archivos aquí o <span style={{ color: 'var(--accent)' }}>haz clic para explorar</span>
                            </div>
                            <div className={styles.dropSubtext}>
                                Formatos permitidos: JPG, PNG, WEBP, GIF, SVG, PDF, DOCX, MP4, ZIP
                            </div>
                        </div>

                        {files.length > 0 && (
                            <div className={styles.fileList}>
                                {files.map((file, idx) => (
                                    <div key={idx} className={styles.fileItem}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <FileText size={18} color="var(--accent)" />
                                            <span className={styles.fileName}>{file.name}</span>
                                            <span className={styles.fileSize}>({formatBytes(file.size)})</span>
                                        </div>
                                        <button
                                            className={styles.removeBtn}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                removeFile(idx);
                                            }}
                                            title="Remover"
                                        >
                                            <X size={18} />
                                        </button>
                                    </div>
                                ))}

                                <div className={styles.actionsRow}>
                                    <Button
                                        onClick={handleUpload}
                                        disabled={isUploading}
                                        variant="primary"
                                        full
                                    >
                                        {isUploading ? (
                                            <>
                                                <Loader2 size={18} className="spin" style={{ marginRight: '8px' }} />
                                                Subiendo archivos...
                                            </>
                                        ) : (
                                            `Subir ${files.length} archivo(s)`
                                        )}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>

                    {uploadedUrls.length > 0 && (
                        <div className={`${styles.card} ${styles.outputSection}`}>
                            <div className={styles.outputHeader}>
                                <div className={styles.outputTitle}>URLs públicas generadas:</div>
                                <Button onClick={copyAllUrls} variant="accent" size="small">
                                    {copied ? (
                                        <>
                                            <CheckCircle size={16} style={{ marginRight: '6px' }} /> Copiado!
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={16} style={{ marginRight: '6px' }} /> Copiar todas las URLs
                                        </>
                                    )}
                                </Button>
                            </div>
                            <textarea
                                className={styles.textarea}
                                value={uploadedUrls.join('\n')}
                                readOnly
                                onClick={(e) => e.target.select()}
                            />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Uploads;
