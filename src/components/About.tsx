import { useLocale } from '../i18n/LocaleContext'
import { useReveal } from '../hooks/useReveal'

export function About() {
  const ref = useReveal()
  const { t } = useLocale()

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="shell reveal" ref={ref}>
        <header className="section__header">
          <p className="section__label">{t.about.label}</p>
          <h2 className="section__title" id="about-title">
            {t.about.title}
          </h2>
        </header>
        <div className="about-panel">
          <div>
            <p className="section__lede" style={{ maxWidth: '52ch' }}>
              {t.profile.summary}
            </p>
            <div className="principles">
              {t.principles.map((item) => (
                <div className="principle" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <dl className="about-panel__meta">
            <div>
              <dt>{t.about.basedIn}</dt>
              <dd>{t.profile.location}</dd>
            </div>
            <div>
              <dt>{t.about.focus}</dt>
              <dd>{t.about.focusValue}</dd>
            </div>
            <div>
              <dt>{t.about.educationLabel}</dt>
              <dd>
                {t.education.degree}
                <br />
                {t.education.school}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
