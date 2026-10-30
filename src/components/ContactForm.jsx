import { useRef, useState } from 'react';
import { SITE, WEB3FORMS_KEY, WEB3FORMS_URL } from '../config.js';

// État : idle | sending | ok | error | demo
export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const message = {
    idle: '',
    sending: '',
    demo: 'Démo : le formulaire n’est pas encore relié à une adresse email.',
    ok: 'Merci ! Votre message a bien été envoyé. Nous vous répondons rapidement.',
    error: `Une erreur est survenue. Écrivez-nous plutôt sur WhatsApp : ${SITE.phoneDisplay}.`,
  }[status];

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!WEB3FORMS_KEY || WEB3FORMS_KEY.startsWith('VOTRE_')) {
      setStatus('demo');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error('send');
      form.reset();
      setStatus('ok');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form ref={formRef} className="form-card" onSubmit={onSubmit} noValidate>
      <h2>Envoyez-nous un message</h2>
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value="Nouvelle demande — site Bethel Concept" />
      <input type="hidden" name="from_name" value="Site Bethel Concept" />
      <input type="checkbox" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="row">
        <div className="field">
          <label htmlFor="nom">Nom</label>
          <input id="nom" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="msg">Message</label>
        <textarea id="msg" name="message" rows="5" required />
      </div>
      <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>
      <p
        className={`form-status ${status === 'ok' ? 'is-ok' : status === 'error' ? 'is-err' : 'is-info'}`}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
