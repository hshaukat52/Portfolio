import { useLocale } from '../i18n/LocaleContext'
import { useReveal } from '../hooks/useReveal'

export function Projects() {
  const ref = useReveal()
  const { t } = useLocale()

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="shell reveal" ref={ref}>
        <header className="section__header">
          <p className="section__label">{t.projectsSection.label}</p>
          <h2 className="section__title" id="projects-title">
            {t.projectsSection.title}
          </h2>
          <p className="section__lede">{t.projectsSection.lede}</p>
        </header>
        <div className="project-list">
          {t.projects.map((project) => (
            <article className="project" key={project.name}>
              <div>
                <h3 className="project__name">{project.name}</h3>
                <p className="project__tag">{project.tag}</p>
              </div>
              <div>
                <p className="project__description">{project.description}</p>
                <p className="project__outcome">{project.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
