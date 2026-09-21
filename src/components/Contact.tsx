import { profileMeta } from '../i18n/content'
import { useLocale } from '../i18n/LocaleContext'
import { useReveal } from '../hooks/useReveal'

export function Contact() {
  const ref = useReveal()
  const { t } = useLocale()

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="shell reveal" ref={ref}>
        <p className="section__label">{t.contact.label}</p>
        <h2 className="section__title" id="contact-title">
          {t.contact.title}
        </h2>
        <p className="section__lede">
          {t.contact.lede.replace('{location}', t.profile.location)}
        </p>
        <div className="contact__actions">
          <a className="button button--primary" href={`mailto:${profileMeta.email}`}>
            {profileMeta.email}
          </a>
          <a className="button button--ghost" href={`tel:${profileMeta.phone.replace(/\s/g, '')}`}>
            {profileMeta.phone}
          </a>
          <a
            className="button button--ghost"
            href={profileMeta.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
