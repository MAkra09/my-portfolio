/**
 * QA Engineer Portfolio App
 * Page Object Model Architecture
 */

import { AboutPage, CoverPage, ContentsPage } from './pages';

export default function App() {
  return (
    <main className="portfolio-app">
      <CoverPage name="[YOUR NAME]" />
      <ContentsPage />
      <AboutPage />
    </main>
  );
}
