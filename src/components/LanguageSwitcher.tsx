import { useEffect, useId, useRef, useState } from 'react'
import { useLocale } from '../i18n/LocaleContext'
import type { Locale } from '../i18n/content'

const options: { value: Locale; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Français' },
]

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()
  const active = options.find((o) => o.value === locale) ?? options[0]

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className={`lang-dropdown${open ? ' is-open' : ''}`} ref={rootRef}>
      <button
        type="button"
        className="lang-dropdown__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="lang-dropdown__label">{active.label}</span>
        <svg
          className="lang-dropdown__chevron"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path
            d="M2.5 4.25L6 7.75L9.5 4.25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>
      </button>

      {open ? (
        <ul
          className="lang-dropdown__menu"
          id={listId}
          role="listbox"
          aria-label={locale === 'en' ? 'Language' : 'Langue'}
        >
          {options.map((option) => {
            const selected = locale === option.value
            return (
              <li key={option.value} role="option" aria-selected={selected}>
                <button
                  type="button"
                  className={`lang-dropdown__option${selected ? ' is-selected' : ''}`}
                  onClick={() => {
                    setLocale(option.value)
                    setOpen(false)
                  }}
                >
                  {option.label}
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
