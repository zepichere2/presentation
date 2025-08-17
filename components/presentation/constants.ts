export const PRESENTATION_CONFIG = {
  AUTO_PLAY_DURATION: 8000, // 8 seconds per slide
  TRANSITION_DURATION: 0.6,
  PARTICLE_COUNT: 20,
};

export const SLIDES_DATA = [
  {
    id: 1,
    title: "Elon Musk – My Ideal & Inspiration",
    subtitle: "A Journey of Struggles, Innovation, and Inspiration",
    content: "Welcome to an extraordinary journey through the life of a visionary who dared to dream beyond limits.",
    visualType: 'rocket' as const,
    animation: 'slideInUp' as const,
    bgEffect: 'starfield' as const,
    interactiveElements: ['rocketLaunch', 'glowingTitle']
  },
  {
    id: 2,
    title: "Who is Elon Musk?",
    subtitle: "Visionary • Engineer • Innovator",
    content: "Visionary entrepreneur, engineer, and innovator shaping the future of humanity through technology and ambition.",
    visualType: 'portrait' as const,
    animation: 'rotateIn' as const,
    bgEffect: 'galaxy' as const,
    interactiveElements: ['starfieldMotion', 'portraitGlow']
  },
  {
    id: 3,
    title: "Early Life & Struggles",
    subtitle: "From Adversity to Ambition",
    content: "Born in South Africa, bullied in school, faced failures—but never stopped learning and dreaming.",
    visualType: 'puzzle' as const,
    animation: 'slideInLeft' as const,
    bgEffect: 'particles' as const,
    interactiveElements: ['puzzleAssembly', 'lightBulbGlow']
  },
  {
    id: 4,
    title: "Education & First Ventures",
    subtitle: "The Genesis of Innovation",
    content: "From coding video games at 12 to founding Zip2 and PayPal—Elon started his entrepreneurial journey early.",
    visualType: 'timeline' as const,
    animation: 'slideInRight' as const,
    bgEffect: 'gradient' as const,
    interactiveElements: ['timelineScroll', 'retroComputer']
  },
  {
    id: 5,
    title: "Major Achievements",
    subtitle: "Building the Future",
    content: "Founder of Tesla, SpaceX, Neuralink, Starlink, and X (Twitter). Each venture pushing boundaries of what's possible.",
    visualType: 'icons' as const,
    animation: 'zoom' as const,
    bgEffect: 'waves' as const,
    interactiveElements: ['iconReveal', 'companyLogos']
  },
  {
    id: 6,
    title: "Work Ethic & Discipline",
    subtitle: "Relentless Dedication",
    content: "Works 80–100 hours a week. Relentless dedication and passion drive his unprecedented success.",
    visualType: 'clock' as const,
    animation: 'pulse' as const,
    bgEffect: 'particles' as const,
    interactiveElements: ['clockSpin', 'energyBars']
  },
  {
    id: 7,
    title: "Contributions to Nation & World",
    subtitle: "Transforming Industries",
    content: "Tesla for clean energy, SpaceX for Mars exploration, Starlink for global internet connectivity.",
    visualType: 'globe' as const,
    animation: 'float' as const,
    bgEffect: 'starfield' as const,
    interactiveElements: ['globeRotation', 'satelliteOrbit']
  },
  {
    id: 8,
    title: "Leadership & Vision",
    subtitle: "Inspiring Tomorrow",
    content: "Leads with bold vision, inspires teams, and challenges the limits of technology and human potential.",
    visualType: 'leadership' as const,
    animation: 'slideInUp' as const,
    bgEffect: 'gradient' as const,
    interactiveElements: ['leadershipArrows', 'visionBeam']
  },
  {
    id: 9,
    title: "How He Inspires Me",
    subtitle: "Personal Motivation",
    content: "Elon Musk teaches me to dream big, stay disciplined, and turn failures into stepping stones to success.",
    visualType: 'inspiration' as const,
    animation: 'rotateIn' as const,
    bgEffect: 'galaxy' as const,
    interactiveElements: ['ideaBulb', 'motivationalWords']
  },
  {
    id: 10,
    title: "Conclusion",
    subtitle: "The Power of Perseverance",
    content: "\"When something is important enough, you do it even if the odds are not in your favor.\" – Elon Musk",
    visualType: 'quote' as const,
    animation: 'flip' as const,
    bgEffect: 'starfield' as const,
    interactiveElements: ['quoteReveal', 'sparkles']
  }
];

export const ANIMATION_DURATIONS = {
  slideTransition: 800,
  elementEntry: 600,
  hover: 300,
  interact: 200
};

export const RESPONSIVE_BREAKPOINTS = {
  mobile: 480,
  tablet: 1024,
  desktop: 1440
};

export const NEON_COLORS = {
  primary: '#DC2626',
  secondary: '#EF4444',
  accent: '#F87171',
  blue: '#3B82F6',
  purple: '#8B5CF6',
  pink: '#EC4899',
  green: '#10B981',
  cyan: '#06B6D4'
};

export const TITLE_STATS = [
  { value: "10+", label: "Companies" },
  { value: "$200B+", label: "Net Worth" },
  { value: "∞", label: "Innovation" }
];

export const IMAGE_URLS = {
  elonPortrait: "https://images.unsplash.com/photo-1692659819033-683e4bdf096c?w=400&h=400&fit=crop",
  elonCeo: "https://images.unsplash.com/photo-1652017667261-9d8be8f53978?w=400&h=400&fit=crop",
  spaceInnovation: "https://images.unsplash.com/photo-1633169747451-24ebe52e39b0?w=400&h=400&fit=crop",
  teslaInnovation: "https://images.unsplash.com/photo-1603724223241-527d8009e029?w=400&h=400&fit=crop",
  earlyComputing: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=600&fit=crop"
};