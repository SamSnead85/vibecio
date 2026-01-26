import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Sparkles, Check, Brain, Target, Lightbulb, BookOpen, Rocket, Users, Shield, Zap } from 'lucide-react';

// Phase 1041-1050: Interactive Onboarding Flow
// Personalized onboarding experience for new users

interface OnboardingStep {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface InterestOption {
    id: string;
    label: string;
    icon: React.ReactNode;
}

const steps: OnboardingStep[] = [
    { id: 1, title: 'Welcome', description: 'Let\'s personalize your experience', icon: <Sparkles className="w-8 h-8" /> },
    { id: 2, title: 'Your Interests', description: 'Select topics you care about', icon: <Target className="w-8 h-8" /> },
    { id: 3, title: 'Your Role', description: 'Tell us about your position', icon: <Users className="w-8 h-8" /> },
    { id: 4, title: 'All Set!', description: 'Your personalized feed is ready', icon: <Rocket className="w-8 h-8" /> }
];

const interests: InterestOption[] = [
    { id: 'ai-strategy', label: 'AI Strategy', icon: <Brain className="w-5 h-5" /> },
    { id: 'digital-transformation', label: 'Digital Transformation', icon: <Zap className="w-5 h-5" /> },
    { id: 'cloud-infrastructure', label: 'Cloud Infrastructure', icon: <Lightbulb className="w-5 h-5" /> },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'leadership', label: 'Tech Leadership', icon: <Users className="w-5 h-5" /> },
    { id: 'healthcare-it', label: 'Healthcare IT', icon: <Target className="w-5 h-5" /> },
    { id: 'fintech', label: 'FinTech', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'enterprise-ai', label: 'Enterprise AI', icon: <Sparkles className="w-5 h-5" /> }
];

const roles = [
    { id: 'cio', label: 'CIO / Chief Information Officer', description: 'Leading enterprise IT strategy' },
    { id: 'cto', label: 'CTO / Chief Technology Officer', description: 'Driving technology innovation' },
    { id: 'cdo', label: 'CDO / Chief Digital Officer', description: 'Leading digital transformation' },
    { id: 'ciso', label: 'CISO / Chief Security Officer', description: 'Managing cybersecurity' },
    { id: 'vp-it', label: 'VP of IT / Engineering', description: 'Managing tech teams' },
    { id: 'director', label: 'Director / Senior Manager', description: 'Leading tech initiatives' },
    { id: 'consultant', label: 'Consultant / Advisor', description: 'Advising on technology' },
    { id: 'other', label: 'Other', description: 'Different role' }
];

interface OnboardingFlowProps {
    onComplete?: (data: { interests: string[]; role: string }) => void;
    onSkip?: () => void;
}

export default function OnboardingFlow({ onComplete, onSkip }: OnboardingFlowProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [selectedRole, setSelectedRole] = useState<string>('');

    const toggleInterest = (id: string) => {
        setSelectedInterests(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(prev => prev + 1);
        } else {
            onComplete?.({ interests: selectedInterests, role: selectedRole });
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const canProceed = currentStep === 1 || (currentStep === 2 && selectedInterests.length >= 2) || (currentStep === 3 && selectedRole) || currentStep === 4;

    return (
        <div className="fixed inset-0 z-[100] bg-zinc-950 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
            </div>

            <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6">
                    <Link to="/" className="text-2xl font-display font-bold text-accent">VibeCIO</Link>
                    <button onClick={onSkip} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">Skip for now</button>
                </div>

                {/* Progress */}
                <div className="px-6 mb-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="flex items-center justify-between relative">
                            <div className="absolute top-4 left-0 right-0 h-0.5 bg-zinc-800">
                                <div className="h-full bg-accent transition-all duration-500" style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }} />
                            </div>
                            {steps.map((step) => (
                                <div key={step.id} className="relative z-10 flex flex-col items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${currentStep >= step.id ? 'bg-accent text-zinc-950' : 'bg-zinc-800 text-zinc-500'}`}>
                                        {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                                    </div>
                                    <span className={`text-xs mt-2 hidden md:block ${currentStep >= step.id ? 'text-zinc-300' : 'text-zinc-600'}`}>{step.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-auto px-6 pb-24">
                    <div className="max-w-2xl mx-auto">
                        {/* Step 1: Welcome */}
                        {currentStep === 1 && (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent to-amber-600 flex items-center justify-center mx-auto mb-8">
                                    <Compass className="w-10 h-10 text-zinc-950" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold text-zinc-100 mb-4">Welcome to VibeCIO</h1>
                                <p className="text-xl text-zinc-400 mb-8 max-w-lg mx-auto">The premier destination for CIO insights, AI strategy, and enterprise technology leadership.</p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {['156K+ Subscribers', '500+ Articles', '100+ CIO Interviews'].map((stat, i) => (
                                        <div key={i} className="px-4 py-2 bg-zinc-800/50 rounded-lg text-sm text-zinc-300">{stat}</div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 2: Interests */}
                        {currentStep === 2 && (
                            <div className="py-8">
                                <h2 className="text-3xl font-display font-bold text-zinc-100 text-center mb-2">What topics interest you?</h2>
                                <p className="text-zinc-400 text-center mb-8">Select at least 2 to personalize your feed</p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {interests.map((interest) => (
                                        <button key={interest.id} onClick={() => toggleInterest(interest.id)} className={`p-4 rounded-xl border-2 transition-all ${selectedInterests.includes(interest.id) ? 'border-accent bg-accent/10' : 'border-zinc-800 hover:border-zinc-700'}`}>
                                            <div className={`w-10 h-10 rounded-lg mb-3 flex items-center justify-center ${selectedInterests.includes(interest.id) ? 'bg-accent/20 text-accent' : 'bg-zinc-800 text-zinc-400'}`}>
                                                {interest.icon}
                                            </div>
                                            <span className="text-sm font-medium text-zinc-100">{interest.label}</span>
                                            {selectedInterests.includes(interest.id) && (
                                                <Check className="w-4 h-4 text-accent absolute top-2 right-2" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                                <p className="text-center text-sm text-zinc-500 mt-4">{selectedInterests.length} selected</p>
                            </div>
                        )}

                        {/* Step 3: Role */}
                        {currentStep === 3 && (
                            <div className="py-8">
                                <h2 className="text-3xl font-display font-bold text-zinc-100 text-center mb-2">What's your role?</h2>
                                <p className="text-zinc-400 text-center mb-8">Help us tailor content to your level</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {roles.map((role) => (
                                        <button key={role.id} onClick={() => setSelectedRole(role.id)} className={`p-4 rounded-xl border-2 text-left transition-all ${selectedRole === role.id ? 'border-accent bg-accent/10' : 'border-zinc-800 hover:border-zinc-700'}`}>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-medium text-zinc-100">{role.label}</h4>
                                                    <p className="text-sm text-zinc-500">{role.description}</p>
                                                </div>
                                                {selectedRole === role.id && <Check className="w-5 h-5 text-accent" />}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 4: Complete */}
                        {currentStep === 4 && (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-8">
                                    <Check className="w-10 h-10 text-emerald-400" />
                                </div>
                                <h2 className="text-4xl font-display font-bold text-zinc-100 mb-4">You're all set!</h2>
                                <p className="text-xl text-zinc-400 mb-8">Your personalized experience is ready. Let's explore.</p>
                                <div className="glass-card rounded-2xl p-6 max-w-md mx-auto mb-8">
                                    <h4 className="font-medium text-zinc-100 mb-4">Your Profile</h4>
                                    <div className="space-y-3 text-left">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-zinc-500">Interests:</span>
                                            <span className="text-zinc-300">{selectedInterests.length} topics selected</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-zinc-500">Role:</span>
                                            <span className="text-zinc-300">{roles.find(r => r.id === selectedRole)?.label || 'Not selected'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent">
                    <div className="max-w-2xl mx-auto flex items-center justify-between">
                        <button onClick={handleBack} disabled={currentStep === 1} className="px-6 py-3 text-zinc-400 hover:text-zinc-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">Back</button>
                        <button onClick={handleNext} disabled={!canProceed} className="flex items-center gap-2 px-8 py-3 bg-accent text-zinc-950 font-semibold rounded-xl hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                            {currentStep === 4 ? 'Start Exploring' : 'Continue'}
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
