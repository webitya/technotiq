export default function GeometricHeroVisual() {
  return (
    <div className="relative w-full max-w-full h-[280px] sm:h-[380px] lg:h-[460px] flex items-center justify-center select-none pointer-events-none overflow-hidden">
      {/* Ambient background soft light spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[360px] h-[260px] sm:h-[360px] bg-gradient-to-tr from-[#6803F5]/15 via-[#9333EA]/10 to-[#27B2DD]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-[160px] sm:w-[220px] h-[160px] sm:h-[220px] bg-[#E7E2FF]/80 rounded-full blur-2xl" />

      {/* Main SVG Composition reproducing the 3D Geometric Blocks & Neon Ray */}
      <svg
        className="relative z-10 w-full h-full max-w-[320px] sm:max-w-[440px] lg:max-w-[520px] drop-shadow-2xl"
        viewBox="0 0 600 550"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Top Face of Main Cube */}
          <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#EDE9FE" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.75" />
          </linearGradient>

          {/* Left Face of Main Cube */}
          <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.7" />
          </linearGradient>

          {/* Right Face of Main Cube */}
          <linearGradient id="cubeRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E0E7FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A5B4FC" stopOpacity="0.65" />
          </linearGradient>

          {/* Floating Crystal Prism Top */}
          <linearGradient id="prismTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5F3FF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#C7D2FE" stopOpacity="0.8" />
          </linearGradient>

          {/* Floating Crystal Prism Side */}
          <linearGradient id="prismSide" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333EA" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#6803F5" stopOpacity="0.85" />
          </linearGradient>

          {/* Brilliant Neon Laser Light Beam Gradient */}
          <linearGradient id="neonLaser" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#27B2DD" stopOpacity="0.2" />
            <stop offset="40%" stopColor="#6803F5" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#A855F7" stopOpacity="1" />
            <stop offset="85%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
          </linearGradient>

          {/* Glass reflection filter */}
          <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Isometric Grid Floor Plane */}
        <g stroke="#E2E8F0" strokeWidth="0.75" strokeOpacity="0.6">
          <line x1="100" y1="420" x2="520" y2="420" />
          <line x1="160" y1="470" x2="460" y2="470" />
          <line x1="150" y1="360" x2="450" y2="520" />
          <line x1="450" y1="360" x2="150" y2="520" />
          <line x1="220" y1="320" x2="520" y2="480" />
          <line x1="380" y1="320" x2="80" y2="480" />
        </g>

        {/* Secondary Background Prism (Tilted behind) */}
        <g opacity="0.65">
          <polygon points="170,220 280,160 380,210 270,270" fill="url(#prismTop)" stroke="#C4B5FD" strokeWidth="1" />
          <polygon points="170,220 270,270 270,390 170,330" fill="url(#prismSide)" stroke="#A78BFA" strokeWidth="0.8" />
          <polygon points="270,270 380,210 380,330 270,390" fill="url(#cubeRight)" stroke="#C4B5FD" strokeWidth="0.8" />
        </g>

        {/* Primary Foreground 3D Isometric Crystal Block */}
        <g>
          {/* Top Diamond Face */}
          <polygon
            points="310,130 460,205 320,290 170,210"
            fill="url(#cubeTop)"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          {/* Left Vertical Face */}
          <polygon
            points="170,210 320,290 320,440 170,350"
            fill="url(#cubeLeft)"
            stroke="#A78BFA"
            strokeWidth="1"
          />
          {/* Right Vertical Face */}
          <polygon
            points="320,290 460,205 460,350 320,440"
            fill="url(#cubeRight)"
            stroke="#DDD6FE"
            strokeWidth="1"
          />
        </g>

        {/* Floating Accent Geometric Wedge (Upper right) */}
        <g>
          <polygon points="410,90 490,135 440,170 360,125" fill="#FFFFFF" fillOpacity="0.9" stroke="#E0E7FF" strokeWidth="1" />
          <polygon points="360,125 440,170 440,230 360,185" fill="#8B5CF6" fillOpacity="0.7" stroke="#A78BFA" strokeWidth="0.8" />
          <polygon points="440,170 490,135 490,195 440,230" fill="#27B2DD" fillOpacity="0.5" stroke="#7DD3FC" strokeWidth="0.8" />
        </g>

        {/* Diagonal Luminous Neon Laser Beam */}
        <g filter="url(#laserGlow)">
          <line
            x1="60"
            y1="490"
            x2="540"
            y2="70"
            stroke="url(#neonLaser)"
            strokeWidth="16"
            strokeLinecap="round"
            opacity="0.35"
          />
          <line
            x1="80"
            y1="470"
            x2="520"
            y2="90"
            stroke="url(#neonLaser)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1="220"
            y1="340"
            x2="380"
            y2="200"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.95"
          />
        </g>
      </svg>
    </div>
  );
}
