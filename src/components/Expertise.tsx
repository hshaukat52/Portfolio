import { useLocale } from '../i18n/LocaleContext'
import { useReveal } from '../hooks/useReveal'

export function Expertise() {
  const ref = useReveal()
  const { t } = useLocale()

  return (
    <section className="section" id="expertise" aria-labelledby="expertise-title">
      <div className="shell reveal" ref={ref}>
        <header className="section__header">
          <p className="section__label">{t.expertise.label}</p>
          <h2 className="section__title" id="expertise-title">
            {t.expertise.title}
          </h2>
          <p className="section__lede">{t.expertise.lede}</p>
        </header>
        <div className="skill-grid">
          {t.skills.map((group) => (
            <div className="skill-block" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
