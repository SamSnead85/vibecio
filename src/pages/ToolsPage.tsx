import { useState } from 'react';
import { Calculator, DollarSign, Clock, Users, TrendingUp, Shield, Zap, ArrowRight, CheckCircle, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Tool categories
const tools = [
    {
        id: 'ai-roi-calculator',
        name: 'AI ROI Calculator',
        description: 'Estimate returns on AI investments based on industry benchmarks and your specific use case.',
        icon: DollarSign,
        category: 'Financial',
        color: 'emerald',
        popular: true
    },
    {
        id: 'ai-readiness-assessment',
        name: 'AI Readiness Assessment',
        description: 'Evaluate your organization\'s preparedness for AI adoption across infrastructure, data, and culture.',
        icon: CheckCircle,
        category: 'Strategy',
        color: 'blue',
        popular: true
    },
    {
        id: 'implementation-timeline',
        name: 'Implementation Timeline Estimator',
        description: 'Project AI deployment timelines based on complexity, team size, and organizational factors.',
        icon: Clock,
        category: 'Planning',
        color: 'purple',
        popular: false
    },
    {
        id: 'team-size-calculator',
        name: 'AI Team Size Calculator',
        description: 'Determine optimal AI team composition and headcount for your initiatives.',
        icon: Users,
        category: 'Planning',
        color: 'amber',
        popular: false
    },
    {
        id: 'risk-assessment',
        name: 'AI Risk Assessment Tool',
        description: 'Identify and prioritize risks in your AI projects using our structured framework.',
        icon: Shield,
        category: 'Governance',
        color: 'red',
        popular: true
    },
    {
        id: 'vendor-comparison',
        name: 'AI Vendor Comparison Matrix',
        description: 'Compare enterprise AI platforms across capabilities, pricing, and support.',
        icon: BarChart3,
        category: 'Evaluation',
        color: 'indigo',
        popular: false
    }
];

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400' },
    red: { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-400' },
    indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400' }
};

export default function ToolsPage() {
    const [calculatorValues, setCalculatorValues] = useState({
        currentCost: 1000000,
        timeReduction: 30,
        qualityImprovement: 20,
        implementationCost: 250000
    });

    const calculateROI = () => {
        const annualSavings = (calculatorValues.currentCost * calculatorValues.timeReduction / 100) +
            (calculatorValues.currentCost * calculatorValues.qualityImprovement / 100 * 0.3);
        const threeYearROI = ((annualSavings * 3 - calculatorValues.implementationCost) / calculatorValues.implementationCost * 100);
        const paybackMonths = Math.ceil(calculatorValues.implementationCost / (annualSavings / 12));
        return { annualSavings, threeYearROI, paybackMonths };
    };

    const roi = calculateROI();

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                            <Calculator size={16} className="text-cyan-400" />
                            <span className="text-sm font-bold uppercase tracking-widest text-cyan-400">Tools</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            AI Planning Tools
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto">
                            Interactive calculators and assessment frameworks to support
                            your AI strategy and investment decisions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Calculator */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/20">
                            <DollarSign className="text-emerald-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                AI ROI Calculator
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Estimate your potential returns</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Input Section */}
                        <div className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 p-8">
                            <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-6">
                                Enter Your Parameters
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm text-[var(--color-zinc-400)] mb-2">
                                        Current Annual Process Cost
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-zinc-500)]">$</span>
                                        <input
                                            type="number"
                                            value={calculatorValues.currentCost}
                                            onChange={(e) => setCalculatorValues({ ...calculatorValues, currentCost: Number(e.target.value) })}
                                            className="w-full pl-8 pr-4 py-3 bg-[var(--color-zinc-800)] border border-[var(--color-zinc-700)] rounded-xl text-[var(--color-zinc-100)] focus:border-emerald-500/50 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm text-[var(--color-zinc-400)] mb-2">
                                        Expected Time Reduction: {calculatorValues.timeReduction}%
                                    </label>
                                    <input
                                        type="range"
                                        min="10"
                                        max="70"
                                        value={calculatorValues.timeReduction}
                                        onChange={(e) => setCalculatorValues({ ...calculatorValues, timeReduction: Number(e.target.value) })}
                                        className="w-full accent-emerald-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-[var(--color-zinc-400)] mb-2">
                                        Quality Improvement: {calculatorValues.qualityImprovement}%
                                    </label>
                                    <input
                                        type="range"
                                        min="5"
                                        max="50"
                                        value={calculatorValues.qualityImprovement}
                                        onChange={(e) => setCalculatorValues({ ...calculatorValues, qualityImprovement: Number(e.target.value) })}
                                        className="w-full accent-emerald-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-[var(--color-zinc-400)] mb-2">
                                        Implementation Cost
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-zinc-500)]">$</span>
                                        <input
                                            type="number"
                                            value={calculatorValues.implementationCost}
                                            onChange={(e) => setCalculatorValues({ ...calculatorValues, implementationCost: Number(e.target.value) })}
                                            className="w-full pl-8 pr-4 py-3 bg-[var(--color-zinc-800)] border border-[var(--color-zinc-700)] rounded-xl text-[var(--color-zinc-100)] focus:border-emerald-500/50 focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Results Section */}
                        <div className="glass-premium rounded-2xl p-8 border border-emerald-500/20">
                            <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-6">
                                Projected Results
                            </h3>

                            <div className="space-y-6">
                                <div className="p-6 bg-[var(--color-zinc-800)]/50 rounded-xl">
                                    <div className="text-sm text-[var(--color-zinc-500)] mb-1">Annual Savings</div>
                                    <div className="font-display text-4xl font-bold text-emerald-400">
                                        ${roi.annualSavings.toLocaleString()}
                                    </div>
                                </div>

                                <div className="p-6 bg-[var(--color-zinc-800)]/50 rounded-xl">
                                    <div className="text-sm text-[var(--color-zinc-500)] mb-1">3-Year ROI</div>
                                    <div className="font-display text-4xl font-bold text-emerald-400">
                                        {roi.threeYearROI.toFixed(0)}%
                                    </div>
                                </div>

                                <div className="p-6 bg-[var(--color-zinc-800)]/50 rounded-xl">
                                    <div className="text-sm text-[var(--color-zinc-500)] mb-1">Payback Period</div>
                                    <div className="font-display text-4xl font-bold text-emerald-400">
                                        {roi.paybackMonths} months
                                    </div>
                                </div>

                                <button className="w-full py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
                                    Get Detailed Report
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Tools */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center border border-cyan-500/20">
                            <Zap className="text-cyan-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                All Planning Tools
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Assessment frameworks and calculators</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tools.map((tool, index) => {
                            const Icon = tool.icon;
                            const colors = colorClasses[tool.color];
                            return (
                                <div
                                    key={tool.id}
                                    className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item group cursor-pointer"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center border ${colors.border}`}>
                                                <Icon className={colors.text} size={24} />
                                            </div>
                                            {tool.popular && (
                                                <span className="px-2 py-1 text-xs font-bold bg-cyan-500/10 text-cyan-400 rounded">
                                                    Popular
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-2 group-hover:text-cyan-400 transition-colors">
                                            {tool.name}
                                        </h3>
                                        <p className="text-sm text-[var(--color-zinc-400)] mb-4">
                                            {tool.description}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-xs px-2 py-1 bg-[var(--color-zinc-800)] text-[var(--color-zinc-500)] rounded">
                                                {tool.category}
                                            </span>
                                            <ArrowRight size={16} className="text-[var(--color-zinc-600)] group-hover:text-cyan-400 transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <TrendingUp className="mx-auto text-cyan-400 mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Need Custom Analysis?
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            Our research team can provide tailored assessments and
                            benchmarking for your specific AI initiatives.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
                        >
                            Request Custom Analysis
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
