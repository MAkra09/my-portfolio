/**
 * AboutPage Component
 * Page Object Model - About Me / Profile Section
 */

import type { AboutPageProps } from '../../types';
import './AboutPage.styles.css';

const GALLUP_TOP5 = [
  {
    rank: 1,
    themeTh: 'นักพัฒนา',
    themeEn: 'Developer',
    summary:
      'มองเห็นศักยภาพของผู้อื่นและช่วยเสริมการเติบโต ชอบเห็นพัฒนาการทีละขั้นอย่างชัดเจน',
    color: 'blue',
  },
  {
    rank: 2,
    themeTh: 'ผู้ไม่ทอดทิ้ง',
    themeEn: 'Includer',
    summary:
      'เปิดรับผู้คนและใส่ใจความรู้สึกของคนรอบตัว พยายามดึงทุกคนให้มีส่วนร่วมในทีม',
    color: 'blue',
  },
  {
    rank: 3,
    themeTh: 'ผู้สร้างสัมพันธ์',
    themeEn: 'Relator',
    summary:
      'ให้ความสำคัญกับความสัมพันธ์ที่จริงใจ ทำงานร่วมกับคนที่ไว้ใจกันได้ดี',
    color: 'blue',
  },
  {
    rank: 4,
    themeTh: 'ผู้มีความรับผิดชอบ',
    themeEn: 'Responsibility',
    summary:
      'ให้คุณค่ากับคำมั่นสัญญา ความน่าเชื่อถือ และความรับผิดชอบต่อสิ่งที่ได้รับมอบหมาย',
    color: 'purple',
  },
  {
    rank: 5,
    themeTh: 'ผู้มีความยุติธรรม',
    themeEn: 'Consistency',
    summary:
      'มองหาแนวทางและกติกาที่ชัดเจน เป็นธรรม และปฏิบัติได้อย่างสม่ำเสมอ',
    color: 'purple',
  },
] as const;

const DEFAULT_PROPS: Required<AboutPageProps> = {
  dateLabel: 'Feb 22, 2026',
  dateTime: '2026-02-22',
  fullName: 'Akaracheewin Bualuang',
  address:
    '1/1 Rama 6 Road Alley 41 Phaya Thai Subdistrict, Phaya Thai District Bangkok 10400',
  email: 'amadilo13@gmail.com',
  phone: '093-3026703',
  about:
    'Quality Assurance with 4+ years of experience connecting business requirements to testing and delivery. Coordinates with cross-functional teams to align work with business value, and supports stakeholders with updates on quality, risk, and delivery progress.',
  keywords: [],
};

export default function AboutPage(props: AboutPageProps) {
  const profile = { ...DEFAULT_PROPS, ...props };

  return (
    <section id="about" className="about-page" aria-labelledby="about-heading">
      <div className="about-page__card screen-card">
        <header className="about-page__topbar">
          <p className="about-page__label">PORTFOLIO (QA)</p>
          <time className="about-page__date" dateTime={profile.dateTime}>
            {profile.dateLabel}
          </time>
        </header>

        <div className="about-page__grid">
          <div className="about-page__left">
            <div className="about-page__content">
              <h2 id="about-heading" className="about-page__heading">
                About Me
              </h2>

              <div className="about-page__detail-group">
                <p className="about-page__name">{profile.fullName}</p>
                <p className="about-page__address">{profile.address}</p>
                <p className="about-page__contact">
                  <span>Email: </span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <span>, Tel: </span>
                  <a href={`tel:${profile.phone.replace(/-/g, '')}`}>{profile.phone}</a>
                </p>
              </div>

              <div className="about-page__summary">
                <p className="about-page__summary-label">About me:</p>
                <p className="about-page__summary-text">{profile.about}</p>
              </div>
            </div>
          </div>

          <div className="about-page__right" aria-label="Visual mood board">
            <div className="about-page__gallery">
              <article className="about-page__poster about-page__poster--portrait" aria-hidden="true">
                <svg viewBox="0 0 240 360" className="about-page__portrait-svg">
                  <g fill="none" stroke="#111318" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M38 337 C52 292, 91 274, 120 274 C149 274, 188 292, 201 337" strokeWidth="3.5" />
                    <path d="M109 210 C111 233, 110 248, 100 265" strokeWidth="3" />
                    <path d="M131 209 C129 233, 130 248, 141 265" strokeWidth="3" />
                    <path d="M75 118 C74 87, 95 56, 124 56 C154 56, 176 88, 174 122" strokeWidth="3.5" />
                    <path d="M80 130 C80 176, 98 214, 124 214 C151 214, 169 176, 169 130" strokeWidth="3.5" />
                    <path d="M170 137 C180 138, 182 127, 177 122" strokeWidth="3" />
                    <path d="M78 137 C68 138, 66 127, 71 122" strokeWidth="3" />
                    <path d="M96 133 C103 129, 112 129, 118 133" strokeWidth="3" />
                    <path d="M130 133 C137 129, 146 129, 153 133" strokeWidth="3" />
                    <path d="M108 150 C112 146, 117 145, 121 149" strokeWidth="2.7" />
                    <path d="M130 149 C134 145, 139 146, 143 150" strokeWidth="2.7" />
                    <path d="M124 154 C122 165, 119 175, 124 178" strokeWidth="2.7" />
                    <path d="M108 188 C118 197, 132 198, 143 188" strokeWidth="2.8" />
                    <path d="M82 107 C94 87, 110 76, 139 73" strokeWidth="3.2" />
                    <path d="M82 108 C93 90, 76 85, 70 108" strokeWidth="3.2" />
                    <path d="M169 108 C161 91, 182 87, 179 112" strokeWidth="3.2" />
                    <path d="M99 74 C113 58, 137 53, 157 60" strokeWidth="3.2" />
                    <path d="M92 83 C97 65, 81 67, 79 82" strokeWidth="3.1" />
                    <path d="M158 67 C175 71, 184 83, 183 95" strokeWidth="3.1" />
                    <path d="M61 321 C87 292, 88 272, 92 254" strokeWidth="3.2" />
                    <path d="M187 321 C160 292, 160 271, 156 254" strokeWidth="3.2" />
                  </g>
                  <g stroke="#e51d1d" strokeLinecap="round" fill="none">
                    <path d="M34 302 C49 290, 61 285, 75 283" strokeWidth="4" />
                    <path d="M159 49 C176 54, 191 68, 197 86" strokeWidth="4" />
                    <path d="M79 237 C98 226, 114 225, 131 229" strokeWidth="3.5" />
                    <circle cx="47" cy="318" r="4.5" fill="#e51d1d" stroke="none" />
                  </g>
                </svg>
              </article>

              <article className="about-page__poster about-page__poster--strengths">
                <header className="about-page__strengths-header">
                  <div className="about-page__gallup-corners" aria-hidden="true">
                    <span className="sq sq--teal" />
                    <span className="sq sq--purple" />
                    <span className="sq sq--orange" />
                    <span className="sq sq--blue" />
                  </div>
                  <p className="about-page__strengths-title">
                    CliftonStrengths Top 5
                  </p>
                  <p className="about-page__strengths-name">
                    Akaracheewin Bualuang
                  </p>
                </header>

                <ol className="about-page__strengths-list" aria-label="Gallup CliftonStrengths top five">
                  {GALLUP_TOP5.map((item) => (
                    <li key={item.rank} className={`about-page__strengths-item about-page__strengths-item--${item.color}`}>
                      <p className="about-page__strengths-item-title">
                        <span className="about-page__strengths-rank">{item.rank}.</span>{' '}
                        {item.themeTh} <span>({item.themeEn})</span>
                      </p>
                      <p className="about-page__strengths-item-desc">{item.summary}</p>
                    </li>
                  ))}
                </ol>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
