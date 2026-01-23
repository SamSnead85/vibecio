import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, BookmarkProvider, ReadingHistoryProvider } from './hooks/usePreferences';
import Header from './components/Header';
import Footer from './components/Footer';
import ReadingProgress from './components/ReadingProgress';
import SearchModal from './components/SearchModal';
import Toast from './components/Toast';
import LoadingScreen from './components/LoadingScreen';

// Core Pages
import Home from './pages/Home';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';
import LeadersPage from './pages/LeadersPage';
import LeaderPage from './pages/LeaderPage';
import AboutPage from './pages/AboutPage';
import NewsArchive from './pages/NewsArchive';
import BookmarksPage from './pages/BookmarksPage';
import SettingsPage from './pages/SettingsPage';
import ContactPage from './pages/ContactPage';
import HistoryPage from './pages/HistoryPage';
import SubscribePage from './pages/SubscribePage';
import PrivacyPage from './pages/PrivacyPage';
import NotFound from './pages/NotFound';

// New Premium Pages
import EditorialTeamPage from './pages/EditorialTeamPage';
import CareersPage from './pages/CareersPage';
import ResearchPage from './pages/ResearchPage';
import PodcastPage from './pages/PodcastPage';
import EventsPage from './pages/EventsPage';
import AdvertisePage from './pages/AdvertisePage';
import TermsPage from './pages/TermsPage';
import AccessibilityPage from './pages/AccessibilityPage';

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const isArticlePage = location.pathname.startsWith('/article/');

  // ⌘K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Reading Progress (only on article pages) */}
      {isArticlePage && <ReadingProgress />}

      {/* Loading screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Main app */}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <ScrollToTop />
        <Header />

        <main>
          <Routes>
            {/* Core Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/leaders" element={<LeadersPage />} />
            <Route path="/leader/:id" element={<LeaderPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<NewsArchive />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/subscribe" element={<SubscribePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />

            {/* New Premium Routes */}
            <Route path="/team" element={<EditorialTeamPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/podcast" element={<PodcastPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/advertise" element={<AdvertisePage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Toast Notifications */}
      <Toast />
    </>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <BookmarkProvider>
          <ReadingHistoryProvider>
            <AppContent />
          </ReadingHistoryProvider>
        </BookmarkProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
