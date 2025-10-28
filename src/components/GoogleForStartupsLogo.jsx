import { motion } from 'framer-motion';

const GoogleForStartupsLogo = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: { width: 120, fontSize: 'text-sm' },
    md: { width: 160, fontSize: 'text-base' },
    lg: { width: 200, fontSize: 'text-lg' }
  };

  const config = sizes[size] || sizes.md;

  return (
    <motion.svg
      width={config.width}
      height={32}
      viewBox="0 0 200 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Google "G" logo - simple 4-color circles */}
      <circle cx="12" cy="16" r="4" fill="#EA4335"/>
      <circle cx="28" cy="16" r="4" fill="#FBBC04"/>
      <circle cx="44" cy="16" r="4" fill="#34A853"/>
      <path d="M40 8H48V24H40V8Z" fill="#4285F4"/>

      {/* "Startup" text - positioned after Google logo */}
      <text
        x="56"
        y="21"
        fontFamily="Google Sans, Inter, sans-serif"
        fontSize="18"
        fontWeight="400"
        fill="#3C4043"
      >
        <tspan fontWeight="500">S</tspan>
        <tspan fill="#5F6368">tartup</tspan>
      </text>

      {/* Trajectory lines - curve upward to the right */}
      {/* Top blue curve */}
      <path
        d="M92 18 C98 10, 106 8, 112 10, 118 12, 130 8, 138 10, 146 12, 152 8"
        stroke="#4285F4"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="0 5"
      />
      <circle cx="156" cy="8" r="1.5" fill="#4285F4"/>
      
      {/* Second curve (green) */}
      <path
        d="M94 20 C98 14, 104 12, 110 14, 116 16, 128 12, 136 14, 144 16, 150 12"
        stroke="#34A853"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="0 5"
      />
      
      {/* Third curve (yellow) */}
      <path
        d="M96 22 C98 18, 102 16, 108 18, 114 20, 126 16, 134 18, 142 20, 148 16"
        stroke="#FBBC04"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="0 5"
      />
      
      {/* Fourth curve (red) */}
      <path
        d="M98 24 C98 22, 100 20, 106 22, 112 24, 124 20, 132 22, 140 24, 146 20"
        stroke="#EA4335"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="0 5"
      />
      
      {/* Bottom orange curve */}
      <path
        d="M100 26 C100 24, 102 22, 108 24, 114 26, 126 22, 134 24, 142 26, 148 22"
        stroke="#FF9800"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="0 5"
      />
      
      {/* Target circle at end */}
      <circle cx="156" cy="8" r="2.5" stroke="#4285F4" strokeWidth="1" fill="white"/>
      <circle cx="156" cy="8" r="4" stroke="#4285F4" strokeWidth="1.2" fill="none" strokeDasharray="2 3"/>
    </motion.svg>
  );
};

export default GoogleForStartupsLogo;

