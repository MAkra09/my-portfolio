/**
 * Types for Portfolio Pages
 * Following Page Object Model (POM) pattern
 */

// ============================================
// Cover Page Types
// ============================================

export interface CoverPageProps {
  /** Name to display on portfolio */
  name?: string;
  /** Phase number */
  phase?: string;
  /** Round label */
  round?: string;
  /** Role title */
  role?: string;
  /** Tagline quote */
  tagline?: string;
}

export interface PortfolioLetter {
  char: string;
  isHighlighted: boolean;
}

// ============================================
// Contents Page Types
// ============================================

export type DotColor = 'red' | 'mint' | 'black';

export interface ContentsItem {
  id: string;
  label: string;
  dotColor: DotColor;
  href?: string;
}

export interface ContentsPageProps {
  /** Date label to display */
  dateLabel?: string;
  /** ISO date string for datetime attribute */
  dateTime?: string;
  /** List of content items */
  items?: ContentsItem[];
}

// ============================================
// About Page Types
// ============================================

export interface AboutPageProps {
  dateLabel?: string;
  dateTime?: string;
  fullName?: string;
  address?: string;
  email?: string;
  phone?: string;
  about?: string;
  keywords?: string[];
}

// ============================================
// Common Types
// ============================================

export interface PageProps {
  className?: string;
  children?: React.ReactNode;
}
