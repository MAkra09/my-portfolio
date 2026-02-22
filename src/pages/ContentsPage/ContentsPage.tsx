/**
 * ContentsPage Component
 * Page Object Model - Table of Contents Page
 */

import type { ContentsPageProps, ContentsItem } from '../../types';
import './ContentsPage.styles.css';

// Default content items
const DEFAULT_ITEMS: ContentsItem[] = [
  { id: 'about', label: 'About Me / เกี่ยวกับฉัน', dotColor: 'red' },
  { id: 'toolbox', label: 'QA Toolbox / เครื่องมือ', dotColor: 'mint' },
  { id: 'methodology', label: 'How I Test / วิธีคิด', dotColor: 'black' },
  { id: 'cases', label: 'Case Studies / เคส', dotColor: 'red' },
];

// Default Props
const DEFAULT_PROPS: Required<ContentsPageProps> = {
  dateLabel: 'Feb 22, 2026',
  dateTime: '2026-02-22',
  items: DEFAULT_ITEMS,
};

/**
 * Contents Page - Table of Contents section
 */
export default function ContentsPage(props: ContentsPageProps) {
  const { dateLabel, dateTime, items } = { ...DEFAULT_PROPS, ...props };

  return (
    <section
      id="contents"
      className="contents-page"
      aria-labelledby="contents-heading"
    >
      <div className="contents-page__card screen-card">
        {/* Top Bar */}
        <header className="contents-page__topbar">
          <p className="contents-page__label">PORTFOLIO (QA)</p>
          <time className="contents-page__date" dateTime={dateTime}>
            {dateLabel}
          </time>
        </header>

        {/* Content Grid */}
        <div className="contents-page__grid">
          {/* Left - Title */}
          <div className="contents-page__left">
            <h2 id="contents-heading" className="contents-page__title">
              CONTENTS
            </h2>
          </div>

          {/* Right - List */}
          <div className="contents-page__right">
            <ul className="contents-page__list" aria-label="Portfolio contents">
              {items.map((item) => (
                <ContentsListItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Contents List Item Component
 */
interface ContentsListItemProps {
  item: ContentsItem;
}

function ContentsListItem({ item }: ContentsListItemProps) {
  const content = (
    <>
      <span
        className={`contents-page__dot contents-page__dot--${item.dotColor}`}
        aria-hidden="true"
      />
      <span className="contents-page__item-text">{item.label}</span>
    </>
  );

  // If href is provided, wrap in link
  if (item.href) {
    return (
      <li className="contents-page__item">
        <a href={item.href} className="contents-page__item-link">
          {content}
        </a>
      </li>
    );
  }

  return <li className="contents-page__item">{content}</li>;
}
