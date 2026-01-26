import { useState } from 'react';
import { Mail, Bell, BellOff, Check, ChevronDown, Clock, Zap, Book, TrendingUp, Users } from 'lucide-react';

// Phase 1081-1090: Newsletter Preferences Manager
// Customizable email digest and notification settings

interface NewsletterPreference {
    id: string;
    name: string;
    description: string;
    frequency: 'daily' | 'weekly' | 'monthly' | 'instant';
    enabled: boolean;
    icon: React.ReactNode;
    category: 'digest' | 'alerts' | 'updates';
}

const defaultPreferences: NewsletterPreference[] = [
    { id: 'daily-digest', name: 'Daily Digest', description: 'Top stories and insights delivered every morning', frequency: 'daily', enabled: true, icon: <Clock className="w-5 h-5" />, category: 'digest' },
    { id: 'weekly-roundup', name: 'Weekly Roundup', description: 'Comprehensive summary of the week\'s best content', frequency: 'weekly', enabled: true, icon: <Book className="w-5 h-5" />, category: 'digest' },
    { id: 'breaking-news', name: 'Breaking News', description: 'Instant alerts for major AI and tech announcements', frequency: 'instant', enabled: true, icon: <Zap className="w-5 h-5" />, category: 'alerts' },
    { id: 'trending-alerts', name: 'Trending Content', description: 'Notifications when articles go viral in your network', frequency: 'instant', enabled: false, icon: <TrendingUp className="w-5 h-5" />, category: 'alerts' },
    { id: 'leader-updates', name: 'Leader Spotlights', description: 'New profiles and interviews with CIO leaders', frequency: 'weekly', enabled: true, icon: <Users className="w-5 h-5" />, category: 'updates' },
    { id: 'events', name: 'Events & Webinars', description: 'Upcoming virtual and in-person events', frequency: 'weekly', enabled: false, icon: <Bell className="w-5 h-5" />, category: 'updates' }
];

const frequencyOptions = [
    { value: 'instant', label: 'Instant', description: 'As it happens' },
    { value: 'daily', label: 'Daily', description: 'Once per day' },
    { value: 'weekly', label: 'Weekly', description: 'Once per week' },
    { value: 'monthly', label: 'Monthly', description: 'Once per month' }
];

export default function NewsletterPreferences() {
    const [preferences, setPreferences] = useState<NewsletterPreference[]>(defaultPreferences);
    const [email] = useState('user@example.com');
    const [saved, setSaved] = useState(false);
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const togglePreference = (id: string) => {
        setPreferences(prev => prev.map(p => p.id === id ? { ...p, enabled: !p.enabled } : p));
    };

    const updateFrequency = (id: string, frequency: NewsletterPreference['frequency']) => {
        setPreferences(prev => prev.map(p => p.id === id ? { ...p, frequency } : p));
        setExpandedId(null);
    };

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const enabledCount = preferences.filter(p => p.enabled).length;

    const groupedPreferences = {
        digest: preferences.filter(p => p.category === 'digest'),
        alerts: preferences.filter(p => p.category === 'alerts'),
        updates: preferences.filter(p => p.category === 'updates')
    };

    return (
        <div className="min-h-screen bg-zinc-950 pt-24 pb-16">
            <div className="container max-w-3xl">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-display font-bold text-zinc-100 mb-2">Newsletter Preferences</h1>
                    <p className="text-zinc-400">Customize what you receive and how often</p>
                </div>

                {/* Email Preview */}
                <div className="glass-card rounded-2xl p-6 mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-sm font-medium text-zinc-400 mb-1">Delivering to:</h3>
                            <p className="text-lg text-zinc-100">{email}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-zinc-400">{enabledCount} subscriptions active</p>
                            <p className="text-xs text-zinc-500">~{enabledCount * 2} emails per week</p>
                        </div>
                    </div>
                </div>

                {/* Preference Groups */}
                {Object.entries(groupedPreferences).map(([category, prefs]) => (
                    <div key={category} className="mb-8">
                        <h2 className="text-lg font-semibold text-zinc-100 capitalize mb-4">
                            {category === 'digest' ? '📬 Digests' : category === 'alerts' ? '⚡ Alerts' : '📣 Updates'}
                        </h2>
                        <div className="space-y-3">
                            {prefs.map((pref) => (
                                <div key={pref.id} className={`glass-card rounded-xl transition-all ${pref.enabled ? 'border-accent/20' : 'opacity-60'}`}>
                                    <div className="p-4">
                                        <div className="flex items-start gap-4">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${pref.enabled ? 'bg-accent/20 text-accent' : 'bg-zinc-800 text-zinc-500'}`}>
                                                {pref.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="font-medium text-zinc-100">{pref.name}</h3>
                                                    <button onClick={() => togglePreference(pref.id)} className={`w-12 h-6 rounded-full transition-colors ${pref.enabled ? 'bg-accent' : 'bg-zinc-700'}`}>
                                                        <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${pref.enabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
                                                    </button>
                                                </div>
                                                <p className="text-sm text-zinc-500 mt-1">{pref.description}</p>
                                                {pref.enabled && (
                                                    <div className="mt-3">
                                                        <button onClick={() => setExpandedId(expandedId === pref.id ? null : pref.id)} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200">
                                                            <span>Frequency: <span className="text-accent capitalize">{pref.frequency}</span></span>
                                                            <ChevronDown className={`w-4 h-4 transition-transform ${expandedId === pref.id ? 'rotate-180' : ''}`} />
                                                        </button>
                                                        {expandedId === pref.id && (
                                                            <div className="mt-3 grid grid-cols-4 gap-2">
                                                                {frequencyOptions.map((opt) => (
                                                                    <button key={opt.value} onClick={() => updateFrequency(pref.id, opt.value as NewsletterPreference['frequency'])} className={`p-2 rounded-lg text-center transition-colors ${pref.frequency === opt.value ? 'bg-accent text-zinc-950' : 'bg-zinc-800 text-zinc-400 hover:text-zinc-100'}`}>
                                                                        <div className="text-sm font-medium">{opt.label}</div>
                                                                        <div className="text-[10px] opacity-70">{opt.description}</div>
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Quick Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
                    <div className="flex gap-3">
                        <button onClick={() => setPreferences(prev => prev.map(p => ({ ...p, enabled: true })))} className="text-sm text-zinc-400 hover:text-zinc-100">Enable All</button>
                        <span className="text-zinc-700">|</span>
                        <button onClick={() => setPreferences(prev => prev.map(p => ({ ...p, enabled: false })))} className="text-sm text-zinc-400 hover:text-zinc-100">Disable All</button>
                    </div>
                    <button onClick={handleSave} className="btn-primary">
                        {saved ? <><Check className="w-4 h-4" /> Saved!</> : 'Save Preferences'}
                    </button>
                </div>

                {/* Unsubscribe */}
                <div className="mt-8 text-center">
                    <button className="text-sm text-zinc-500 hover:text-red-400 transition-colors">
                        <BellOff className="w-4 h-4 inline mr-1" />
                        Unsubscribe from all emails
                    </button>
                </div>
            </div>
        </div>
    );
}
