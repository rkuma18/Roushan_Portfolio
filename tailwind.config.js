/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
	  './pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './components/**/*.{js,ts,jsx,tsx,mdx}',
	  './app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
	  container: {
		center: true,
		padding: '15px'
	  },
	  screens: {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1200px'
	  },
	  fontFamily: {
		primary: ['var(--font-space-grotesk)', 'sans-serif'],
		secondary: ['var(--font-inter)', 'sans-serif']
	  },
	  extend: {
		colors: {
		  primary: "#0F172A",        // Slate 900 - deeper, richer dark
		  secondary: "#64748B",      // Slate 500 - softer gray
		  accent: {
			DEFAULT: "#3B82F6",      // Vibrant blue - energetic, trustworthy
			hover: "#2563EB",        // Blue 600 - noticeable hover
		  },
		  success: "#10B981",        // Emerald 500 - for success states
		  warning: "#F59E0B",        // Amber 500 - for warnings
		  error: "#EF4444",          // Red 500 - for errors
		  // Additional colors for better compatibility
		  white: "#ffffff",
		  black: "#000000",
		},
		boxShadow: {
		  custom: '0px 14px 54px rgba(0,0,0,0.1)'
		},
		// Additional extensions for better design flexibility
		spacing: {
		  '18': '4.5rem',
		  '88': '22rem',
		},
		borderRadius: {
		  'xl': '1rem',
		  '2xl': '1.5rem',
		},
		animation: {
		  'fade-in': 'fadeIn 0.5s ease-in-out',
		  'slide-up': 'slideUp 0.5s ease-out',
		},
		keyframes: {
		  fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		  slideUp: {
			'0%': { transform: 'translateY(20px)', opacity: '0' },
			'100%': { transform: 'translateY(0)', opacity: '1' },
		  },
		},
	  }
	},
	plugins: [require("tailwindcss-animate")],
  };