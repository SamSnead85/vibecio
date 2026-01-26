import { Link } from 'react-router-dom';
import { Smartphone, WifiOff, Download, Bell, Compass, Bookmark, TrendingUp } from 'lucide-react';

// Phase 1061-1070: Mobile Experience & PWA Features Page
// Showcasing mobile-optimized features and PWA capabilities

const features = [
    { icon: <WifiOff className="w-6 h-6" />, title: 'Offline Reading', description: 'Download articles for offline access. Read anywhere, even without internet.' },
    { icon: <Bell className="w-6 h-6" />, title: 'Push Notifications', description: 'Get notified about breaking news, trending articles, and personalized recommendations.' },
    { icon: <Download className="w-6 h-6" />, title: 'Install as App', description: 'Add VibeCIO to your home screen for a native app experience.' },
    { icon: <Compass className="w-6 h-6" />, title: 'Gesture Navigation', description: 'Swipe between articles, pull to refresh, and more intuitive mobile interactions.' },
    { icon: <Bookmark className="w-6 h-6" />, title: 'Sync Bookmarks', description: 'Your bookmarks and reading progress sync across all your devices.' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Personalized Feed', description: 'AI-powered recommendations tailored to your reading habits and interests.' }
];

const mobileScreens = [
    { title: 'Home Feed', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400', description: 'Beautiful card-based layout' },
    { title: 'Article View', image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=400', description: 'Optimized reading experience' },
    { title: 'Search & Discover', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400', description: 'Find content instantly' }
];

export default function MobileExperience() {
    const handleInstallPWA = () => {
        alert('PWA installation would be triggered here. On supported browsers, you can install VibeCIO as an app from the browser menu.');
    };

    return (
        <div className="min-h-screen bg-zinc-950 pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-purple-500/10" />
                <div className="container relative py-16">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
                            <Smartphone className="w-4 h-4" />
                            Mobile-First Experience
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-zinc-100 mb-6">
                            VibeCIO in Your Pocket
                        </h1>
                        <p className="text-xl text-zinc-400 mb-8">
                            Experience premium tech journalism optimized for mobile. Install our PWA for native app performance without the app store.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button onClick={handleInstallPWA} className="btn-primary">
                                <Download className="w-4 h-4" />
                                Install App
                            </button>
                            <Link to="/" className="btn-secondary">
                                <Compass className="w-4 h-4" />
                                Explore Content
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16">
                <div className="container">
                    <h2 className="text-3xl font-display font-bold text-zinc-100 text-center mb-12">
                        Built for Mobile Performance
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <div key={i} className="glass-card rounded-2xl p-6 hover:border-accent/30 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-amber-600/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-zinc-100 mb-2">{feature.title}</h3>
                                <p className="text-sm text-zinc-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Preview */}
            <section className="py-16 bg-zinc-900/50">
                <div className="container">
                    <h2 className="text-3xl font-display font-bold text-zinc-100 text-center mb-4">
                        Seamless Experience Across Screens
                    </h2>
                    <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
                        From your phone to tablet to desktop, VibeCIO provides a consistent, beautiful experience.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {mobileScreens.map((screen, i) => (
                            <div key={i} className="text-center">
                                <div className="relative inline-block mb-4">
                                    <div className="w-48 h-80 mx-auto bg-zinc-800 rounded-3xl p-2 shadow-2xl">
                                        <div className="w-full h-full bg-zinc-900 rounded-2xl overflow-hidden">
                                            <div className="h-6 bg-zinc-800 flex items-center justify-center">
                                                <div className="w-16 h-1 bg-zinc-600 rounded-full" />
                                            </div>
                                            <img src={screen.image} alt={screen.title} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-zinc-100 mb-1">{screen.title}</h3>
                                <p className="text-sm text-zinc-500">{screen.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16">
                <div className="container">
                    <div className="glass-card rounded-3xl p-8 md:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98</div>
                                <div className="text-sm text-zinc-400">Lighthouse Performance</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">&lt;1s</div>
                                <div className="text-sm text-zinc-400">First Contentful Paint</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
                                <div className="text-sm text-zinc-400">PWA Compliance</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">4.9★</div>
                                <div className="text-sm text-zinc-400">User Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="container text-center">
                    <h2 className="text-3xl font-display font-bold text-zinc-100 mb-4">
                        Ready to Go Mobile?
                    </h2>
                    <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                        Install VibeCIO now and never miss an important tech insight again.
                    </p>
                    <button onClick={handleInstallPWA} className="btn-primary text-lg px-8 py-4">
                        <Download className="w-5 h-5" />
                        Add to Home Screen
                    </button>
                </div>
            </section>
        </div>
    );
}
