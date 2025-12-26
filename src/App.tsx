import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoverStoryModal from './components/CoverStoryModal';
import NewsFeed from './components/NewsFeed';
import TransformationSpotlight from './components/TransformationSpotlight';
import CIOLeaderboard from './components/CIOLeaderboard';
import LeaderModal from './components/LeaderModal';
import Newsletter from './components/Newsletter';
import LoadingScreen from './components/LoadingScreen';
import { coverStory, leaders, transformationSpotlight } from './data/content';
import { Leader } from './types';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCoverStoryOpen, setIsCoverStoryOpen] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

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

          <NewsFeed />

          <TransformationSpotlight spotlight={transformationSpotlight} />

          <CIOLeaderboard
            leaders={leaders}
            onSelectLeader={(leader) => setSelectedLeader(leader)}
          />

          <Newsletter />
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-[var(--color-zinc-800)]">
          <div className="container text-center">
            <div className="font-display text-lg font-bold tracking-tight mb-2">
              Vibe<span className="text-[var(--color-accent)]">CIO</span>
            </div>
            <p className="text-sm text-[var(--color-zinc-500)]">
              © {new Date().getFullYear()} VibeCIO. Thought Leadership for the Age of AI.
            </p>
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
    </>
  );
}

export default App;
