import { profileMeta } from '../i18n/content'
import { useLocale } from '../i18n/LocaleContext'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Nav() {
  const { t } = useLocale()

  return (
    <header className="site-nav">
      <nav className="shell site-nav__inner" aria-label={t.navAria}>
        <a className="site-nav__brand" href="#top">
          {profileMeta.name}
        </a>
        <div className="site-nav__end">
          <ul className="site-nav__links">
            {t.nav.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  )
}
