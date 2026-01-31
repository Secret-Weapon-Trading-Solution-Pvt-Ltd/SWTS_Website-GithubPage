// Services data for SWTS - Secret Weapon Trading Solution
// Used for both listing page (abstract icons) and detail pages (brand logos)

export interface ServiceProblem {
  title: string;
  description: string;
}

export interface ServiceCapability {
  title: string;
  description: string;
  features: string[];
}

export interface FlowchartStep {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
}

export interface UseCase {
  title: string;
  description: string;
  outcome: string;
  tags: string[];
}

export interface ServiceBrandLogo {
  name: string;
  src: string;
  alt: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  // Short powerful one-liner for listing page (max 8 words)
  oneLiner: string;
  tagline: string;
  description: string;
  // Abstract icon for listing page (Lucide icon name)
  abstractIcon: string;
  // Secondary abstract pattern type for visual interest
  patternType: 'dots' | 'lines' | 'grid' | 'waves' | 'circles' | 'diagonal' | 'mesh';
  // Gradient colors for cards
  gradientFrom: string;
  gradientTo: string;
  // Accent color for hover glow (hex)
  accentColor: string;
  // Brand logos for detail page only
  brandLogos: ServiceBrandLogo[];
  // Detail page content
  problems: ServiceProblem[];
  capabilities: ServiceCapability[];
  flowchart: FlowchartStep[];
  howItWorks: HowItWorksStep[];
  useCases: UseCase[];
  // Stats for credibility
  stats: {
    label: string;
    value: string;
  }[];
}

export const services: Service[] = [
  {
    slug: "algo-strategy-development",
    title: "Strategy Automation",
    shortTitle: "Strategy Automation",
    oneLiner: "Your strategy, engineered for automation.",
    tagline: "We translate your trading rules into production-ready automated systems. You own the logic. We build the execution framework.",
    description: "We translate your trading rules into production-ready automated systems. You own the logic. We build the execution framework.",
    abstractIcon: "Cpu",
    patternType: "mesh",
    gradientFrom: "from-teal-500",
    gradientTo: "to-cyan-600",
    accentColor: "#14B8A6",
    brandLogos: [
      { name: "Python", src: "/logos/python.svg", alt: "Python" },
      { name: "TradingView", src: "/logos/tradingview.svg", alt: "TradingView" }
    ],
    problems: [
      {
        title: "You have a working strategy but can't code it",
        description: "Your rules are clear in your head—buy when X happens, sell when Y happens. But translating that into actual code? That's a different skill set entirely."
      },
      {
        title: "Manual execution is costing you money",
        description: "You follow your rules, but manual entry means missed entries, fat-finger errors, and the emotional override that happens under pressure."
      },
      {
        title: "You can't watch the markets 24/7",
        description: "Your strategy works on crypto, forex, or global markets. But you need to sleep, work, and live. Opportunities don't wait for you to be at your screen."
      },
      {
        title: "You've never properly validated your approach",
        description: "You believe your strategy works based on experience, but you've never backtested it properly against years of historical data with realistic assumptions."
      }
    ],
    capabilities: [
      {
        title: "Rule Translation & Validation",
        description: "We decode your trading logic into precise technical specifications",
        features: [
          "Entry/exit rule documentation",
          "Position sizing formalization",
          "Edge case identification"
        ]
      },
      {
        title: "Automated Entries, Exits & Sizing",
        description: "Building automated systems that execute your rules exactly",
        features: [
          "Clean, documented code",
          "Real-time data handling",
          "Error recovery systems"
        ]
      },
      {
        title: "Platform-Agnostic Implementation",
        description: "Deploy across any platform or broker",
        features: [
          "Multi-platform support",
          "Broker API integration",
          "Monitoring & alerts"
        ]
      },
      {
        title: "Deployment & Monitoring",
        description: "Getting your strategy live with confidence",
        features: [
          "Paper trading setup",
          "Live deployment",
          "Real-time monitoring"
        ]
      }
    ],
    flowchart: [
      { id: "document", title: "Document Your Rules", description: "We extract and formalize your trading logic", icon: "FileText" },
      { id: "specify", title: "Technical Spec", description: "Translate rules into precise specifications", icon: "Boxes" },
      { id: "build", title: "Build System", description: "Code your strategy with clean architecture", icon: "Code" },
      { id: "validate", title: "Backtest", description: "Validate against historical data", icon: "FlaskConical" },
      { id: "paper", title: "Paper Trade", description: "Test in live markets without risk", icon: "PlayCircle" },
      { id: "deploy", title: "Go Live", description: "Deploy with monitoring & alerts", icon: "Rocket" }
    ],
    howItWorks: [
      { step: 1, title: "Strategy Documentation", description: "Document your trading rules—entries, exits, position sizing.", duration: "2-3 sessions" },
      { step: 2, title: "Technical Specification", description: "Rules translated to technical specs. You review before coding.", duration: "2-4 days" },
      { step: 3, title: "System Development", description: "Build automated system with clean, documented code.", duration: "1-4 weeks" },
      { step: 4, title: "Paper Trading", description: "Live market testing without capital risk.", duration: "1-5 days" },
      { step: 5, title: "Production Deployment", description: "Go live with monitoring, alerts, and support.", duration: "Ongoing" }
    ],
    useCases: [
      {
        title: "Breakout System Automation",
        description: "A trader had a profitable manual breakout strategy. We automated the scanning, alerting, and execution across 50+ symbols.",
        outcome: "From watching 5 charts to monitoring 50+ symbols automatically",
        tags: ["Breakout", "Automation", "Scaling"]
      },
      {
        title: "Mean Reversion Implementation",
        description: "Client had clear mean reversion rules. We coded, backtested, and deployed with proper position sizing and risk controls.",
        outcome: "Strategy validated with 5+ years of backtest data before going live",
        tags: ["Mean Reversion", "Backtested", "Risk Management"]
      },
      {
        title: "Options Strategy Execution",
        description: "Trader had manual options entry rules. We automated the signal detection and execution with proper Greeks monitoring.",
        outcome: "Reduced execution time from 5 minutes to under 10 seconds",
        tags: ["Options", "Execution", "Speed"]
      }
    ],
    stats: [
      { label: "Strategies Automated", value: "500+" },
      { label: "Client Retention", value: "95%" }
    ]
  },
  {
    slug: "strategy-backtesting",
    title: "Strategy Backtesting",
    shortTitle: "Strategy Backtesting",
    oneLiner: "Validate your strategy with historical data.",
    tagline: "Test your trading rules against years of historical data before risking real capital.",
    description: "We backtest YOUR rules against historical data with realistic assumptions—slippage, costs, and proper validation—so you know if your approach holds up before risking real money.",
    abstractIcon: "BarChart3",
    patternType: "grid",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-purple-600",
    accentColor: "#6366F1",
    brandLogos: [
      { name: "Python", src: "/logos/python.svg", alt: "Python" },
      { name: "TradingView", src: "/logos/tradingview.svg", alt: "TradingView" }
    ],
    problems: [
      { title: "You've never properly validated your strategy", description: "You believe your rules work based on memory and experience. But you've never seen the actual numbers across years of data." },
      { title: "Your backtest doesn't match real trading", description: "You ran a backtest somewhere and it looked great. But live trading is different. Was slippage modeled? Transaction costs?" },
      { title: "You don't know your real risk", description: "What's the maximum drawdown your strategy has historically experienced? What's the longest losing streak?" },
      { title: "You're trading on hope, not data", description: "Without proper validation, every trade is a gamble. You need historical evidence that your approach works." }
    ],
    capabilities: [
      { title: "Historical Data Analysis", description: "Test YOUR rules against years of historical market data", features: ["5-10+ years of historical data", "Multiple market conditions tested", "Bull, bear, and sideways markets"] },
      { title: "Realistic Cost Modeling", description: "Include all the costs that eat into profits", features: ["Slippage simulation", "Brokerage & transaction costs", "Spread modeling"] },
      { title: "Performance Metrics", description: "Complete analysis of YOUR strategy's potential", features: ["Win rate & profit factor", "Sharpe & Sortino ratios", "Maximum drawdown analysis"] },
      { title: "Risk Assessment", description: "Understand your exposure before you trade", features: ["Drawdown duration analysis", "Worst-case scenario testing", "Risk-adjusted returns"] }
    ],
    flowchart: [
      { id: "document", title: "Document Rules", description: "Formalize YOUR trading logic", icon: "FileText" },
      { id: "data", title: "Prepare Data", description: "Source clean historical data", icon: "Database" },
      { id: "backtest", title: "Backtest", description: "Test YOUR rules on history", icon: "Play" },
      { id: "report", title: "Report", description: "Full performance report", icon: "FileBarChart" }
    ],
    howItWorks: [
      { step: 1, title: "Document Your Rules", description: "We document YOUR exact trading rules—entry, exit, position sizing.", duration: "1-2 sessions" },
      { step: 2, title: "Data Preparation", description: "We source clean historical data for YOUR instruments.", duration: "1-3 days" },
      { step: 3, title: "Backtesting", description: "YOUR rules tested against historical data with realistic costs.", duration: "2-3 days" },
      { step: 4, title: "Final Report", description: "Comprehensive report with all metrics and analysis.", duration: "2-3 days" }
    ],
    useCases: [
      { title: "Momentum Strategy Validation", description: "Trader had momentum rules they'd traded manually for years. We backtested their exact logic across 10 years of data.", outcome: "Strategy confirmed profitable with clear understanding of drawdown risk", tags: ["Momentum", "Validation"] },
      { title: "Mean Reversion Reality Check", description: "Client believed their mean reversion approach was profitable. Rigorous backtesting revealed hidden risks.", outcome: "Identified 35% max drawdown risk that wasn't apparent from recent trading", tags: ["Mean Reversion", "Risk Analysis"] },
      { title: "Options Strategy Analysis", description: "Trader wanted to validate their iron condor strategy before scaling up capital allocation.", outcome: "Confirmed edge with specific market conditions where strategy underperforms", tags: ["Options", "Strategy Analysis"] }
    ],
    stats: [
      { label: "Strategies Validated", value: "300+" },
      { label: "Client Satisfaction", value: "100%" }
    ]
  },
  {
    slug: "strategy-optimization",
    title: "Strategy Optimization",
    shortTitle: "Strategy Optimization",
    oneLiner: "Fine-tune your strategy for maximum performance.",
    tagline: "Optimize your trading parameters without overfitting. Find the settings that work.",
    description: "We optimize YOUR strategy parameters using walk-forward analysis and out-of-sample testing to ensure robust performance, not curve-fitted results.",
    abstractIcon: "Settings2",
    patternType: "circles",
    gradientFrom: "from-blue-500",
    gradientTo: "to-indigo-600",
    accentColor: "#3B82F6",
    brandLogos: [
      { name: "Python", src: "/logos/python.svg", alt: "Python" }
    ],
    problems: [
      { title: "Your parameters were chosen arbitrarily", description: "Why 14-period RSI? Why 20-period MA? You've never tested what actually works best for YOUR strategy." },
      { title: "You're worried about overfitting", description: "You know that optimizing too much leads to curve-fitting. You need proper validation methods." },
      { title: "Market conditions change", description: "Parameters that worked in 2020 may not work in 2024. You need adaptive optimization." },
      { title: "You don't know your strategy's true potential", description: "Without proper optimization, you could be leaving significant performance on the table." }
    ],
    capabilities: [
      { title: "Parameter Optimization", description: "Find optimal settings for YOUR rules", features: ["Grid search optimization", "Walk-forward analysis", "Out-of-sample validation"] },
      { title: "Robustness Testing", description: "Ensure YOUR parameters aren't overfitted", features: ["Monte Carlo simulation", "Parameter stability analysis", "Sensitivity testing"] },
      { title: "Performance Enhancement", description: "Maximize risk-adjusted returns", features: ["Sharpe ratio optimization", "Drawdown minimization", "Win rate improvement"] },
      { title: "Adaptive Analysis", description: "Parameters that adapt to market regimes", features: ["Market regime detection", "Dynamic parameter sets", "Condition-based optimization"] }
    ],
    flowchart: [
      { id: "baseline", title: "Baseline Test", description: "Test current parameters", icon: "Play" },
      { id: "optimize", title: "Optimize", description: "Search parameter space", icon: "Settings" },
      { id: "validate", title: "Validate", description: "Out-of-sample testing", icon: "CheckCircle" },
      { id: "deploy", title: "Deploy", description: "Use optimized parameters", icon: "Rocket" }
    ],
    howItWorks: [
      { step: 1, title: "Baseline Analysis", description: "Test your current parameters to establish a benchmark.", duration: "1-2 days" },
      { step: 2, title: "Optimization", description: "Systematically search for better parameters.", duration: "3-5 days" },
      { step: 3, title: "Validation", description: "Walk-forward and out-of-sample testing.", duration: "2-3 days" },
      { step: 4, title: "Recommendations", description: "Final report with optimal parameters.", duration: "1-2 days" }
    ],
    useCases: [
      { title: "Moving Average Optimization", description: "Trader used 50/200 MA crossover. We found 34/144 performed 40% better out-of-sample.", outcome: "Improved risk-adjusted returns without overfitting", tags: ["Optimization", "MA Crossover"] },
      { title: "RSI Strategy Enhancement", description: "Client's RSI strategy used default 14-period. We optimized entry/exit thresholds and period.", outcome: "23% improvement in Sharpe ratio with robust out-of-sample results", tags: ["RSI", "Parameters"] },
      { title: "Breakout System Tuning", description: "Volatility-based breakout strategy with arbitrary ATR multipliers. We found optimal settings.", outcome: "Reduced drawdown by 18% while maintaining returns", tags: ["Breakout", "Risk Management"] }
    ],
    stats: [
      { label: "Strategies Optimized", value: "200+" },
      { label: "Avg Performance Improvement", value: "35%" }
    ]
  },
  {
    slug: "custom-screener",
    title: "Custom Screener",
    shortTitle: "Custom Screener",
    oneLiner: "Find trading opportunities automatically.",
    tagline: "Custom screeners that scan markets for YOUR specific setup conditions.",
    description: "We build custom screeners that scan hundreds of symbols for YOUR exact criteria. Stop manually checking charts—let the screener find opportunities for you.",
    abstractIcon: "Search",
    patternType: "waves",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-600",
    accentColor: "#0891B2",
    brandLogos: [
      { name: "TradingView", src: "/logos/tradingview.svg", alt: "TradingView" },
      { name: "Python", src: "/logos/python.svg", alt: "Python" }
    ],
    problems: [
      { title: "You're manually checking too many charts", description: "Hours spent scrolling through watchlists looking for setups. There has to be a better way." },
      { title: "You're missing opportunities", description: "While you're analyzing one chart, setups are triggering on others." },
      { title: "Generic screeners don't match your criteria", description: "Standard screeners can't capture YOUR specific setup conditions." }
    ],
    capabilities: [
      { title: "Custom Criteria", description: "Screen for YOUR exact setup conditions", features: ["Multi-timeframe analysis", "Custom indicator logic", "Volume & price filters"] },
      { title: "Real-Time Scanning", description: "Continuous market monitoring", features: ["Intraday scanning", "Alert notifications", "Ranked results"] }
    ],
    flowchart: [
      { id: "define", title: "Define Criteria", description: "Specify your setup conditions", icon: "FileText" },
      { id: "build", title: "Build Screener", description: "Code your scanning logic", icon: "Code" },
      { id: "scan", title: "Scan Markets", description: "Run against all symbols", icon: "Search" },
      { id: "alert", title: "Get Alerts", description: "Notifications when found", icon: "Bell" }
    ],
    howItWorks: [
      { step: 1, title: "Define Your Criteria", description: "We document exactly what you're looking for.", duration: "1-2 sessions" },
      { step: 2, title: "Build Screener", description: "We code your custom scanning logic.", duration: "1-2 weeks" },
      { step: 3, title: "Testing", description: "Verify it finds the setups you want.", duration: "3-5 days" },
      { step: 4, title: "Deployment", description: "Deploy with alerts and notifications.", duration: "1-2 days" }
    ],
    useCases: [
      { title: "Crypto Setup Scanner", description: "Client had specific multi-timeframe criteria they checked manually across 50 pairs. We built a scanner that does it instantly.", outcome: "3-hour daily routine reduced to a 30-second glance", tags: ["Crypto", "Scanner"] }
    ],
    stats: [
      { label: "Screeners Built", value: "100+" },
      { label: "Symbols Scanned Daily", value: "10K+" }
    ]
  },
  {
    slug: "custom-dashboard",
    title: "Custom Dashboard",
    shortTitle: "Custom Dashboard",
    oneLiner: "Your trading data, unified in one view.",
    tagline: "Custom dashboards that show exactly what YOU need to see.",
    description: "We build custom dashboards that consolidate your trading data—P&L, positions, signals, risk metrics—into a single unified view designed around YOUR workflow.",
    abstractIcon: "LayoutDashboard",
    patternType: "dots",
    gradientFrom: "from-slate-600",
    gradientTo: "to-slate-800",
    accentColor: "#475569",
    brandLogos: [
      { name: "React", src: "/logos/react.svg", alt: "React" },
      { name: "Python", src: "/logos/python.svg", alt: "Python" }
    ],
    problems: [
      { title: "You're juggling too many tools", description: "Broker platform, charting software, spreadsheets, notebooks. Context switching is killing your efficiency." },
      { title: "Critical data is siloed", description: "P&L in one place, positions in another, signals in a third. No unified view." },
      { title: "Off-the-shelf platforms don't fit", description: "Every platform forces you to adapt to their way. Your workflow deserves a custom tool." }
    ],
    capabilities: [
      { title: "Trading Dashboards", description: "Real-time operational dashboards", features: ["Live P&L tracking", "Position management", "Signal monitoring"] },
      { title: "Data Integration", description: "Connect all your data sources", features: ["Multi-broker connectivity", "Custom data feeds", "API integrations"] }
    ],
    flowchart: [
      { id: "discovery", title: "Discovery", description: "Map your workflow", icon: "Search" },
      { id: "design", title: "Design", description: "Design the interface", icon: "Palette" },
      { id: "build", title: "Build", description: "Develop the dashboard", icon: "Code" },
      { id: "deploy", title: "Deploy", description: "Launch and iterate", icon: "Rocket" }
    ],
    howItWorks: [
      { step: 1, title: "Workflow Discovery", description: "Deep dive into your daily workflow and needs.", duration: "2-3 sessions" },
      { step: 2, title: "UX Design", description: "Wireframes and prototypes with your feedback.", duration: "1-2 weeks" },
      { step: 3, title: "Development", description: "Build the dashboard in iterative sprints.", duration: "4-8 weeks" },
      { step: 4, title: "Launch", description: "Deploy and continuously improve.", duration: "Ongoing" }
    ],
    useCases: [
      { title: "Prop Trading Dashboard", description: "Unified platform for a 10-trader prop desk with real-time P&L and risk.", outcome: "50% reduction in operational overhead", tags: ["Dashboard", "Prop Trading"] }
    ],
    stats: [
      { label: "Dashboards Built", value: "30+" },
      { label: "Avg Efficiency Gain", value: "45%" }
    ]
  },
  {
    slug: "strategy-alerts",
    title: "Strategy Alerts",
    shortTitle: "Strategy Alerts",
    oneLiner: "Never miss a trading signal again.",
    tagline: "Custom alerts that notify you the moment YOUR conditions trigger.",
    description: "We build alert systems that monitor markets 24/7 and notify you instantly when YOUR specific conditions are met—via mobile, email, Telegram, or webhook.",
    abstractIcon: "Bell",
    patternType: "lines",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-600",
    accentColor: "#F59E0B",
    brandLogos: [
      { name: "TradingView", src: "/logos/tradingview.svg", alt: "TradingView" }
    ],
    problems: [
      { title: "You're missing setups while away", description: "Your strategy works but you can't watch charts 24/7. Setups trigger while you sleep or work." },
      { title: "Generic alerts don't capture your edge", description: "Standard price alerts don't capture YOUR specific multi-condition setups." },
      { title: "Alert to action takes too long", description: "You get an alert, check the chart, confirm the setup. By then, price has moved." }
    ],
    capabilities: [
      { title: "Custom Alert Logic", description: "Alerts based on YOUR exact conditions", features: ["Multi-condition triggers", "Multi-timeframe logic", "Custom indicator alerts"] },
      { title: "Multi-Channel Delivery", description: "Get notified however you prefer", features: ["Mobile push notifications", "Telegram/Discord bots", "Webhook automation"] }
    ],
    flowchart: [
      { id: "define", title: "Define Triggers", description: "Specify alert conditions", icon: "FileText" },
      { id: "build", title: "Build Logic", description: "Code the alert system", icon: "Code" },
      { id: "connect", title: "Connect Channels", description: "Set up notifications", icon: "Plug" },
      { id: "monitor", title: "Monitor", description: "24/7 market watching", icon: "Eye" }
    ],
    howItWorks: [
      { step: 1, title: "Define Your Triggers", description: "We document exactly what conditions should trigger alerts.", duration: "1 session" },
      { step: 2, title: "Build Alert System", description: "We code your custom alert logic.", duration: "3-7 days" },
      { step: 3, title: "Channel Setup", description: "Configure your preferred notification channels.", duration: "1-2 days" },
      { step: 4, title: "Go Live", description: "Alerts running 24/7 with support.", duration: "Ongoing" }
    ],
    useCases: [
      { title: "Forex Breakout Alerts", description: "Trader needed alerts for specific breakout conditions across 8 pairs. We built multi-condition alerts with Telegram delivery.", outcome: "From manual chart watching to instant mobile alerts", tags: ["Forex", "Alerts"] }
    ],
    stats: [
      { label: "Alert Systems Built", value: "200+" },
      { label: "Alerts Sent Daily", value: "1000+" }
    ]
  },
  {
    slug: "paper-trading",
    title: "Paper Trading",
    shortTitle: "Paper Trading",
    oneLiner: "Test your strategy with zero risk.",
    tagline: "Validate your automated strategy in live markets without risking real capital.",
    description: "We set up paper trading environments where your automated strategy runs against live market data with simulated execution—proving it works before you commit real money.",
    abstractIcon: "FlaskConical",
    patternType: "diagonal",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-green-600",
    accentColor: "#10B981",
    brandLogos: [
      { name: "Python", src: "/logos/python.svg", alt: "Python" },
      { name: "TradingView", src: "/logos/tradingview.svg", alt: "TradingView" }
    ],
    problems: [
      { title: "You're not ready to risk real money", description: "Your strategy looks good on paper but you want to see it work in live conditions first." },
      { title: "Backtests don't capture everything", description: "Live markets have nuances—data delays, order flow—that backtests miss." },
      { title: "You need confidence before going live", description: "Watching your strategy execute in real-time builds the confidence to trade it live." }
    ],
    capabilities: [
      { title: "Live Market Testing", description: "Run your strategy on live data", features: ["Real-time data feeds", "Simulated execution", "Realistic slippage modeling"] },
      { title: "Performance Tracking", description: "Monitor paper trading results", features: ["Trade logging", "P&L tracking", "Performance metrics"] }
    ],
    flowchart: [
      { id: "setup", title: "Setup", description: "Configure paper environment", icon: "Settings" },
      { id: "connect", title: "Connect", description: "Link to live data", icon: "Plug" },
      { id: "run", title: "Run", description: "Execute in simulation", icon: "Play" },
      { id: "analyze", title: "Analyze", description: "Review performance", icon: "BarChart" }
    ],
    howItWorks: [
      { step: 1, title: "Environment Setup", description: "We configure your paper trading environment.", duration: "1-2 days" },
      { step: 2, title: "Strategy Deployment", description: "Deploy your strategy to paper trading.", duration: "1-2 days" },
      { step: 3, title: "Live Testing", description: "Run against live markets with monitoring.", duration: "2-4 weeks" },
      { step: 4, title: "Analysis & Transition", description: "Review results and prepare for live trading.", duration: "2-3 days" }
    ],
    useCases: [
      { title: "Pre-Live Validation", description: "Client wanted to test their automated strategy for 30 days before going live. We set up full paper trading with daily reports.", outcome: "Identified and fixed 3 edge cases before risking real capital", tags: ["Paper Trading", "Validation"] }
    ],
    stats: [
      { label: "Paper Trading Setups", value: "100+" },
      { label: "Issues Caught Pre-Live", value: "500+" }
    ]
  }
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

// Helper function to get all service slugs (for static generation)
export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}
