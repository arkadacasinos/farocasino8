'use client'

import { useState } from 'react'

const fr8Links = [
  { href: '#official', label: 'Официальный сайт' },
  { href: '#mirror', label: 'Зеркало' },
  { href: '#play', label: 'Играть' },
  { href: '#games', label: 'Игры' },
  { href: '#bonus', label: 'Бонусы' },
  { href: '#faq', label: 'Вопросы' },
]

export default function FaroNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fr8-topbar">
      <div className="fr8-shell fr8-topbar__inner">
        <a href="#top" className="fr8-brandmark" aria-label="Faro Casino — на главную">
          <span className="fr8-brandmark__seal" aria-hidden="true">
            F
          </span>
          <span>Faro Casino</span>
        </a>

        <nav aria-label="Основная навигация">
          <ul className="fr8-navlist">
            {fr8Links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="fr8-navlist__link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#play" className="fr8-cta fr8-cta--gold fr8-navcta">
          Играть сейчас
        </a>

        <button
          type="button"
          className="fr8-menubtn"
          aria-label="Открыть меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="fr8-menubtn__bar" aria-hidden="true" />
        </button>
      </div>

      <div className={`fr8-drawer${open ? ' is-open' : ''}`}>
        <div className="fr8-shell">
          <ul className="fr8-drawer__list">
            {fr8Links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="fr8-drawer__link" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#play"
                className="fr8-cta fr8-cta--gold"
                style={{ marginTop: 14, width: '100%' }}
                onClick={() => setOpen(false)}
              >
                Играть сейчас
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
