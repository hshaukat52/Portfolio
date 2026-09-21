import { profileMeta } from '../i18n/content'
import { useLocale } from '../i18n/LocaleContext'

export function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLocale()

  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p>
          <strong>{profileMeta.name}</strong> — {t.footer.role}
        </p>
        <p>© {year}</p>
      </div>
    </footer>
  )
}
