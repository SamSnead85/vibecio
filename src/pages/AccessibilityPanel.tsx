import { useState, useEffect } from 'react';
import { Type, Sun, Palette, Gauge, Check, RotateCcw, Accessibility as AccessibilityIcon } from 'lucide-react';

// Phase 1071-1080: Accessibility & Performance Settings
// Comprehensive accessibility controls and performance optimization

interface AccessibilitySettings {
    fontSize: 'small' | 'medium' | 'large' | 'xlarge';
    contrast: 'normal' | 'high' | 'highest';
    reducedMotion: boolean;
    screenReaderOptimized: boolean;
    textToSpeech: boolean;
    dyslexicFont: boolean;
    lineSpacing: 'compact' | 'normal' | 'relaxed';
    colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

const defaultSettings: AccessibilitySettings = {
    fontSize: 'medium',
    contrast: 'normal',
    reducedMotion: false,
    screenReaderOptimized: false,
    textToSpeech: false,
    dyslexicFont: false,
    lineSpacing: 'normal',
    colorBlindMode: 'none'
};

const fontSizes = [
    { value: 'small', label: 'Small', size: '14px' },
    { value: 'medium', label: 'Medium', size: '16px' },
    { value: 'large', label: 'Large', size: '18px' },
    { value: 'xlarge', label: 'Extra Large', size: '20px' }
];

const contrastOptions = [
    { value: 'normal', label: 'Normal', description: 'Standard contrast' },
    { value: 'high', label: 'High', description: 'Enhanced contrast' },
    { value: 'highest', label: 'Maximum', description: 'Maximum contrast' }
];

const colorBlindModes = [
    { value: 'none', label: 'None' },
    { value: 'protanopia', label: 'Protanopia (Red-weak)' },
    { value: 'deuteranopia', label: 'Deuteranopia (Green-weak)' },
    { value: 'tritanopia', label: 'Tritanopia (Blue-weak)' }
];

export default function AccessibilityPanel() {
    const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const savedSettings = localStorage.getItem('vibecio-accessibility');
        if (savedSettings) {
            setSettings(JSON.parse(savedSettings));
        }
    }, []);

    const updateSetting = <K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => {
        const newSettings = { ...settings, [key]: value };
        setSettings(newSettings);
        localStorage.setItem('vibecio-accessibility', JSON.stringify(newSettings));
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const resetToDefaults = () => {
        setSettings(defaultSettings);
        localStorage.setItem('vibecio-accessibility', JSON.stringify(defaultSettings));
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="min-h-screen bg-zinc-950 pt-24 pb-16">
            <div className="container max-w-4xl">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <AccessibilityIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-display font-bold text-zinc-100">Accessibility Settings</h1>
                        <p className="text-zinc-400">Customize your reading experience</p>
                    </div>
                </div>

                {/* Save Indicator */}
                {saved && (
                    <div className="fixed top-24 right-6 flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-emerald-400 text-sm animate-fade-in">
                        <Check className="w-4 h-4" />
                        Settings saved
                    </div>
                )}

                <div className="space-y-8">
                    {/* Text Size */}
                    <section className="glass-card rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <Type className="w-5 h-5 text-accent" />
                            <h2 className="text-xl font-semibold text-zinc-100">Text Size</h2>
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                            {fontSizes.map((size) => (
                                <button
                                    key={size.value}
                                    onClick={() => updateSetting('fontSize', size.value as AccessibilitySettings['fontSize'])}
                                    className={`p-4 rounded-xl border-2 transition-all ${settings.fontSize === size.value
                                            ? 'border-accent bg-accent/10'
                                            : 'border-zinc-700 hover:border-zinc-600'
                                        }`}
                                >
                                    <span className="block text-zinc-100 font-medium" style={{ fontSize: size.size }}>Aa</span>
                                    <span className="text-xs text-zinc-500 mt-1 block">{size.label}</span>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Contrast */}
                    <section className="glass-card rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <Sun className="w-5 h-5 text-accent" />
                            <h2 className="text-xl font-semibold text-zinc-100">Contrast</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {contrastOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => updateSetting('contrast', option.value as AccessibilitySettings['contrast'])}
                                    className={`p-4 rounded-xl border-2 text-left transition-all ${settings.contrast === option.value
                                            ? 'border-accent bg-accent/10'
                                            : 'border-zinc-700 hover:border-zinc-600'
                                        }`}
                                >
                                    <span className="block text-zinc-100 font-medium">{option.label}</span>
                                    <span className="text-xs text-zinc-500">{option.description}</span>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Motion & Audio */}
                    <section className="glass-card rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <Gauge className="w-5 h-5 text-accent" />
                            <h2 className="text-xl font-semibold text-zinc-100">Motion & Audio</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-800/50">
                                <div>
                                    <h3 className="text-zinc-100 font-medium">Reduce Motion</h3>
                                    <p className="text-sm text-zinc-500">Minimize animations and transitions</p>
                                </div>
                                <button
                                    onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                                    className={`w-12 h-6 rounded-full transition-colors ${settings.reducedMotion ? 'bg-accent' : 'bg-zinc-600'}`}
                                >
                                    <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${settings.reducedMotion ? 'translate-x-6' : 'translate-x-0.5'}`} />
                                </button>
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-800/50">
                                <div>
                                    <h3 className="text-zinc-100 font-medium">Text-to-Speech</h3>
                                    <p className="text-sm text-zinc-500">Enable article narration</p>
                                </div>
                                <button
                                    onClick={() => updateSetting('textToSpeech', !settings.textToSpeech)}
                                    className={`w-12 h-6 rounded-full transition-colors ${settings.textToSpeech ? 'bg-accent' : 'bg-zinc-600'}`}
                                >
                                    <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${settings.textToSpeech ? 'translate-x-6' : 'translate-x-0.5'}`} />
                                </button>
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-800/50">
                                <div>
                                    <h3 className="text-zinc-100 font-medium">Dyslexia-Friendly Font</h3>
                                    <p className="text-sm text-zinc-500">Use OpenDyslexic font</p>
                                </div>
                                <button
                                    onClick={() => updateSetting('dyslexicFont', !settings.dyslexicFont)}
                                    className={`w-12 h-6 rounded-full transition-colors ${settings.dyslexicFont ? 'bg-accent' : 'bg-zinc-600'}`}
                                >
                                    <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${settings.dyslexicFont ? 'translate-x-6' : 'translate-x-0.5'}`} />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Color Blind Mode */}
                    <section className="glass-card rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <Palette className="w-5 h-5 text-accent" />
                            <h2 className="text-xl font-semibold text-zinc-100">Color Vision</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {colorBlindModes.map((mode) => (
                                <button
                                    key={mode.value}
                                    onClick={() => updateSetting('colorBlindMode', mode.value as AccessibilitySettings['colorBlindMode'])}
                                    className={`p-4 rounded-xl border-2 text-left transition-all ${settings.colorBlindMode === mode.value
                                            ? 'border-accent bg-accent/10'
                                            : 'border-zinc-700 hover:border-zinc-600'
                                        }`}
                                >
                                    <span className="text-zinc-100 font-medium">{mode.label}</span>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Reset */}
                    <div className="flex justify-center">
                        <button
                            onClick={resetToDefaults}
                            className="flex items-center gap-2 px-6 py-3 text-zinc-400 hover:text-zinc-100 transition-colors"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Reset to Defaults
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
