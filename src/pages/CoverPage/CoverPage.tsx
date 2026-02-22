/**
 * CoverPage Component
 * Page Object Model - Cover/Title Page
 */

import type { CoverPageProps } from '../../types';
import './CoverPage.styles.css';

// Constants
const PORTFOLIO_LETTERS = ['P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O'] as const;
const HIGHLIGHTED_INDICES = [1, 4]; // O and F

// Default Props
const DEFAULT_PROPS: Required<CoverPageProps> = {
  name: '[YOUR NAME]',
  phase: '01',
  round: 'QA',
  role: 'QA ENGINEER / QA ANALYST',
  tagline: '"EVIDENCE-DRIVEN QA WITH A CREATIVE MIND."',
};

/**
 * Cover Page - Title/Landing section of portfolio
 */
export default function CoverPage(props: CoverPageProps) {
  const { name, phase, round, role, tagline } = { ...DEFAULT_PROPS, ...props };

  return (
    <section
      id="cover"
      className="cover-page screen-card"
      aria-labelledby="cover-title"
    >
      {/* Left Panel - Information */}
      <section className="cover-page__left">
        <div className="cover-page__content">
          {/* Main Title */}
          <h1 id="cover-title" className="cover-page__title">
            PORTFOLIO
          </h1>

          {/* Meta Information */}
          <div className="cover-page__meta">
            <div className="cover-page__meta-row">
              <span className="cover-page__meta-label">PHASE: {phase}</span>
              <span className="cover-page__meta-label">ROUND: {round}</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="cover-page__intro">
            <p className="cover-page__intro-type">QA ENGINEER PORTFOLIO</p>
            <p className="cover-page__intro-name">{name}</p>
            <p className="cover-page__intro-role">{role}</p>
            <p className="cover-page__intro-tagline">{tagline}</p>
          </div>

          {/* Navigation Hint */}
          <nav className="cover-page__nav" aria-label="Scroll hint">
            <a className="cover-page__nav-link" href="#contents">
              <span className="cover-page__nav-hint">Scroll to explore</span>
              <span className="cover-page__nav-indicator" aria-hidden="true">
                <span />
              </span>
            </a>
          </nav>
        </div>
      </section>

      {/* Right Panel - Art */}
      <section className="cover-page__right" aria-label="Cover art">
        <div className="cover-page__texture" />

        {/* Torn Paper with Letters */}
        <div className="cover-page__torn-paper" aria-hidden="true">
          <div className="cover-page__letters">
            {PORTFOLIO_LETTERS.map((letter, index) => (
              <span
                key={`letter-${index}`}
                className={`cover-page__letter cover-page__letter--${index + 1}${
                  HIGHLIGHTED_INDICES.includes(index) ? ' cover-page__letter--highlight' : ''
                }`}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Sketch Illustration */}
        <SketchIllustration />
      </section>
    </section>
  );
}

/**
 * Sketch Illustration Component
 * Abstract face drawing for cover art
 */
function SketchIllustration() {
  return (
    <div className="cover-page__sketch" aria-hidden="true">
      <svg viewBox="0 0 120 120" className="cover-page__sketch-svg">
        {/* Profile outline */}
        <path
          d="M28 92 C25 83, 31 74, 41 70 C47 67, 49 62, 47 56 C44 46, 51 36, 64 34 C75 33, 83 39, 81 48 C79 57, 71 59, 69 66 C67 73, 74 76, 84 76 C94 76, 101 82, 102 93"
          fill="none"
          stroke="#141414"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Hair outline */}
        <path
          d="M58 35 C53 27, 40 29, 33 37 C28 43, 26 52, 31 60 C36 67, 36 76, 31 84"
          fill="none"
          stroke="#141414"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Nose */}
        <path
          d="M54 59 C59 58, 61 61, 60 65"
          fill="none"
          stroke="#141414"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* Mouth */}
        <path
          d="M48 72 C54 74, 58 73, 62 70"
          fill="none"
          stroke="#141414"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {/* Chin/Neck */}
        <path
          d="M45 94 C54 103, 63 103, 74 92"
          fill="none"
          stroke="#141414"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* Red accent lines */}
        <line x1="27" y1="58" x2="34" y2="78" stroke="#d83a34" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="21" y1="62" x2="27" y2="82" stroke="#d83a34" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="71" y1="25" x2="39" y2="86" stroke="#d83a34" strokeWidth="2.6" strokeLinecap="round" />
        <line x1="90" y1="50" x2="72" y2="72" stroke="#d83a34" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="79" cy="72" r="1.7" fill="#d83a34" />
      </svg>
    </div>
  );
}
