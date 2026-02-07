import { useState } from 'react';
import Hero from '../components/Hero';
import BreakingNewsTicker from '../components/BreakingNewsTicker';
import DailyFeature from '../components/DailyFeature';
import CIOLeaderboard from '../components/CIOLeaderboard';
import ArticleGrid from '../components/ArticleGrid';
import TransformationSpotlight from '../components/TransformationSpotlight';
import Newsletter from '../components/Newsletter';
import CoverStoryModal from '../components/CoverStoryModal';
import LeaderModal from '../components/LeaderModal';
import { coverStory, leaders, transformationSpotlight } from '../data/content';
import type { Leader } from '../types';

export default function Home() {
    const [isCoverStoryOpen, setIsCoverStoryOpen] = useState(false);
    const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

    return (
        <>
            <Hero onOpenCoverStory={() => setIsCoverStoryOpen(true)} />

            {/* Breaking News Ticker */}
            <div id="breaking">
                <BreakingNewsTicker />
            </div>

            {/* Today's Featured Article */}
            <DailyFeature />

            {/* Deep Dive Articles Grid - Primary Content */}
            <ArticleGrid />

            {/* Featured CIO Leaders */}
            <CIOLeaderboard
                leaders={leaders}
                onSelectLeader={(leader) => setSelectedLeader(leader)}
            />

            <TransformationSpotlight spotlight={transformationSpotlight} />

            <Newsletter />

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
