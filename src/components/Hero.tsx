import { profileMeta } from '../i18n/content'
import { useLocale } from '../i18n/LocaleContext'

function ArchitectureDiagram() {
  return (
    <svg
      className="hero__diagram"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g className="mesh" fill="none" stroke="rgba(232,240,236,0.18)" strokeWidth="1">
        <path d="M80 120H520M80 200H460M80 280H500M80 360H420" />
        <path d="M160 80V420M240 80V460M320 60V400M400 100V440" />
        <rect x="620" y="100" width="220" height="140" rx="2" />
        <rect x="880" y="160" width="180" height="110" rx="2" />
        <rect x="700" y="320" width="260" height="160" rx="2" />
        <rect x="980" y="360" width="140" height="200" rx="2" />
        <path d="M730 240V320M940 270V320M830 480V560M1050 480V560" />
        <path d="M640 560H1120M640 620H1040M640 680H980" />
      </g>

      <g className="trace" fill="none" stroke="#b08d4a" strokeWidth="1.5">
        <path d="M200 180C320 180 360 260 480 260S640 200 760 200 900 280 1020 280" />
        <path d="M280 340C400 340 460 420 600 420S780 360 920 360" />
      </g>

      <g className="node" fill="#0a6b5c">
        <circle cx="200" cy="180" r="5" />
        <circle cx="480" cy="260" r="5" />
        <circle cx="760" cy="200" r="5" />
        <circle cx="1020" cy="280" r="5" />
        <circle cx="600" cy="420" r="5" fill="#b08d4a" />
        <circle cx="920" cy="360" r="5" fill="#b08d4a" />
      </g>

      <g fill="rgba(232,240,236,0.08)" stroke="rgba(232,240,236,0.25)" strokeWidth="1">
        <rect x="140" y="480" width="160" height="72" rx="2" />
        <rect x="330" y="500" width="160" height="72" rx="2" />
        <rect x="520" y="520" width="160" height="72" rx="2" />
      </g>

      <text
        x="160"
        y="522"
        fill="rgba(232,240,236,0.55)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="14"
      >
        API
      </text>
      <text
        x="350"
        y="542"
        fill="rgba(232,240,236,0.55)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="14"
      >
        Domain
      </text>
      <text
        x="540"
        y="562"
        fill="rgba(232,240,236,0.55)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="14"
      >
        Data
      </text>
    </svg>
  )
}

export function Hero() {
  const { t } = useLocale()

  return (
    <section className="hero" id="top" aria-labelledby="hero-brand">
      <div className="hero__plane">
        <ArchitectureDiagram />
      </div>
      <div className="hero__content">
        <p className="hero__role">{t.profile.role}</p>
        <h1 className="hero__brand" id="hero-brand">
          {profileMeta.name}
        </h1>
        <p className="hero__headline">{t.profile.headline}</p>
        <p className="hero__lede">{t.profile.lede}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#contact">
            {t.hero.ctaPrimary}
          </a>
          <a className="button button--ghost" href="#projects">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
