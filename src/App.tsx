import { useState } from 'react';
import { jobs } from './data/jobs';
// ...existing code...
import { useTranslation } from 'react-i18next';
// ...existing code...

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');
  const [showForm, setShowForm] = useState(false);
  const [formUrl, setFormUrl] = useState('');

  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  const handleJobClick = () => {
    setFormUrl(
      lang === 'fr'
        ? 'https://forms.gle/G4H83YajTVZxirpH8'
        : 'https://forms.gle/umeRdxSvk56cRUwm6',
    );
    setShowForm(true);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="is-flex is-align-items-center mb-5">
          <span className="has-text-weight-semibold mr-3">
            {t('language')}:
          </span>
          <button
            className={`button is-small mr-2 ${lang === 'en' ? 'is-link' : ''}`}
            onClick={() => switchLanguage('en')}
          >
            EN
          </button>
          <button
            className={`button is-small ${lang === 'fr' ? 'is-link' : ''}`}
            onClick={() => switchLanguage('fr')}
          >
            FR
          </button>
        </div>
        <h1 className="title is-2 has-text-primary mb-2">{t('title')}</h1>
        <h2 className="subtitle is-4 has-text-grey mb-6">{t('subtitle')}</h2>
        <h3 className="title is-4 mb-4">{t('jobs')}</h3>
        <div className="columns is-multiline">
          {jobs.map(job => (
            <div key={job.key} className="column is-one-third">
              <div
                className="box has-background-light job-card"
                style={{ cursor: 'pointer' }}
                onClick={handleJobClick}
              >
                <span className="icon-text">
                  <span className="icon">
                    <i className="fas fa-briefcase"></i>
                  </span>
                  <span className="has-text-weight-semibold ml-2">
                    {t(`job.${job.key}`)}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
        {showForm && (
          <div className="modal is-active">
            <div
              className="modal-background"
              onClick={() => setShowForm(false)}
            ></div>
            <div className="modal-content">
              <div className="box">
                <iframe
                  src={formUrl}
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  title="Application Form"
                />
              </div>
            </div>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={() => setShowForm(false)}
            ></button>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
