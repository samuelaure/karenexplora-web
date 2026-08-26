import { useState } from 'react';

import { Github, Key, Loader2, Info } from 'lucide-react';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import styles from './GithubInvite.module.css';

const GithubInvite = () => {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !pin) return;

    setStatus('loading');
    setMessage('');

    try {
      // Usar la ruta absoluta al API de PHP en producción o desarrollo
      const apiUrl = import.meta.env.DEV ? 'http://localhost/api/github_invite.php' : '/api/github_invite.php';
      
      // En Vite dev mode, las llamadas a PHP pueden no funcionar a menos que haya un servidor PHP corriendo
      // Esto está diseñado para funcionar en el hosting de Hostinger.
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Upload-Secret': pin
        },
        body: JSON.stringify({ username, secret: pin })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setMessage(data.message || '¡Invitación enviada exitosamente!');
        setUsername('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Ocurrió un error al enviar la invitación.');
      }
    } catch (error) {
      console.error('Error al invitar a GitHub:', error);
      setStatus('error');
      setMessage('Error de conexión. Asegúrate de estar en el entorno de producción (Hostinger) para que el servidor PHP procese la solicitud.');
    }
  };

  return (
    <div className={styles.container}>
      <SEO 
        title="Acceso a GitHub" 
        description="Solicita acceso al repositorio de Karen Explora." 
        noindex={true} 
      />

      <FadeIn delay={0.1}>
        <div className={styles.card}>
          <div className="flex-center" style={{ marginBottom: '1rem' }}>
            <Github size={48} color="var(--accent)" />
          </div>
          <h1 className={styles.title}>Acceso al Proyecto</h1>
          <p className={styles.description}>
            Ingresa tu usuario de GitHub y el PIN de seguridad para recibir una invitación automática como colaborador del proyecto.
          </p>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="username" className={styles.label}>Usuario de GitHub</label>
              <input
                type="text"
                id="username"
                className={styles.input}
                placeholder="ej. samuelaure"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={status === 'loading'}
                required
              />
              
              <details className={styles.details}>
                <summary className={styles.summary}>
                  <Info size={16} style={{ marginRight: '8px', color: 'var(--accent)' }} />
                  ¿No encuentras tu usuario de GitHub? Sigue estos pasos
                </summary>
                <div className={styles.detailsContent}>
                  <p>Tu nombre de usuario es fundamental para darte acceso. Para encontrarlo:</p>
                  <ol>
                    <li>Inicia sesión en <a href="https://github.com" target="_blank" rel="noreferrer" style={{color: 'var(--accent)', textDecoration: 'underline'}}>GitHub.com</a>.</li>
                    <li>Haz clic en tu foto de perfil arriba a la derecha.</li>
                    <li>Tu usuario aparece justo debajo de tu nombre (ej. <strong>@tu-usuario</strong>).</li>
                    <li>Escribe <strong>solo</strong> el nombre, sin el símbolo @.</li>
                  </ol>
                </div>
              </details>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="pin" className={styles.label}>PIN de Seguridad</label>
              <div style={{ position: 'relative' }}>
                <Key size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="password"
                  id="pin"
                  className={styles.input}
                  style={{ paddingLeft: '2.5rem' }}
                  placeholder="El mismo PIN de las imágenes"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  disabled={status === 'loading'}
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className={styles.button}
              disabled={status === 'loading' || !username || !pin}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={20} className="spinner" style={{ animation: 'spin 1s linear infinite' }} />
                  Enviando invitación...
                </>
              ) : (
                'Solicitar Acceso'
              )}
            </button>
          </form>

          {message && (
            <div 
              className={`${styles.message} ${styles[status]} ${styles.animated}`}
            >
              {message}
            </div>
          )}
        </div>
      </FadeIn>
    </div>
  );
};

export default GithubInvite;
