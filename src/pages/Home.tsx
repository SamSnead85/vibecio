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
import ArticleModal from '../components/ArticleModal';
import { coverStory, leaders, transformationSpotlight } from '../data/content';
import type { Leader, Article } from '../types';

export default function Home() {
    const [isCoverStoryOpen, setIsCoverStoryOpen] = useState(false);
    const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    return (
        <>
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
