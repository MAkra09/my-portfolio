/**
 * Pages Index
 * Page Object Model - Export all pages
 */

export { default as CoverPage } from './CoverPage';
export { default as ContentsPage } from './ContentsPage';
export { default as AboutPage } from './AboutPage';

// Re-export types
export type { CoverPageProps } from './CoverPage';
export type { ContentsPageProps, ContentsItem, DotColor } from './ContentsPage';
export type { AboutPageProps } from './AboutPage';
