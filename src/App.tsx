import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BreakingNewsTicker from './components/BreakingNewsTicker';
import DailyFeature from './components/DailyFeature';
import CoverStoryModal from './components/CoverStoryModal';
import ArticleGrid from './components/ArticleGrid';
import ArticleModal from './components/ArticleModal';
import TransformationSpotlight from './components/TransformationSpotlight';
import CIOLeaderboard from './components/CIOLeaderboard';
import LeaderModal from './components/LeaderModal';
import Newsletter from './components/Newsletter';
import LoadingScreen from './components/LoadingScreen';
import { coverStory, leaders, transformationSpotlight } from './data/content';
import type { Leader, Article } from './types';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCoverStoryOpen, setIsCoverStoryOpen] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Loading screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Main app */}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />

        <main>
          <Hero onOpenCoverStory={() => setIsCoverStoryOpen(true)} />

          {/* Breaking News Ticker */}
          <div id="breaking">
            <BreakingNewsTicker />
          </div>

          {/* Today's Featured Article */}
          <DailyFeature onReadArticle={(article) => setSelectedArticle(article)} />

          {/* CIO Leaders - More Prominent Position */}
          <CIOLeaderboard
            leaders={leaders}
            onSelectLeader={(leader) => setSelectedLeader(leader)}
          />

          {/* Deep Dive Articles Grid */}
          <ArticleGrid onReadArticle={(article) => setSelectedArticle(article)} />

          <TransformationSpotlight spotlight={transformationSpotlight} />

          <Newsletter />
        </main>

        {/* Footer */}
        <footer className="py-12 border-t border-[var(--color-zinc-800)]">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="font-display text-xl font-bold tracking-tight mb-2">
                  Vibe<span className="text-[var(--color-accent)]">CIO</span>
                </div>
                <p className="text-sm text-[var(--color-zinc-500)]">
                  Thought Leadership for the Age of AI
                </p>
              </div>
              <div className="flex items-center gap-6 text-sm text-[var(--color-zinc-500)]">
                <span>© {new Date().getFullYear()} VibeCIO</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-zinc-700)]" />
                <span>Updated Daily</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Modals */}
      <CoverStoryModal
        story={coverStory}
        isOpen={isCoverStoryOpen}
        onClose={() => setIsCoverStoryOpen(false)}
      />

      <LeaderModal
        leader={selectedLeader}
        isOpen={selectedLeader !== null}
        onClose={() => setSelectedLeader(null)}
      />

      <ArticleModal
        article={selectedArticle}
        isOpen={selectedArticle !== null}
        onClose={() => setSelectedArticle(null)}
      />
    </>
  );
}

export default App;
