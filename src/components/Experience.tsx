import { useLocale } from '../i18n/LocaleContext'
import { useReveal } from '../hooks/useReveal'

export function Experience() {
  const ref = useReveal()
  const { t } = useLocale()

  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="shell reveal" ref={ref}>
        <header className="section__header">
          <p className="section__label">{t.experienceSection.label}</p>
          <h2 className="section__title" id="work-title">
            {t.experienceSection.title}
          </h2>
          <p className="section__lede">{t.experienceSection.lede}</p>
        </header>
        <ol className="timeline">
          {t.experience.map((job) => (
            <li className="timeline__item" key={`${job.company}-${job.period}`}>
              <p className="timeline__period">
                {job.period}
                <span className="timeline__location"> · {job.location}</span>
              </p>
              <h3 className="timeline__role">{job.role}</h3>
              <p className="timeline__company">{job.company}</p>
              <ul className="timeline__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
