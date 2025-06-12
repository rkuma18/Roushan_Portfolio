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
		primary: ['var(--font-bebas)', 'cursive', 'sans-serif'],
		secondary: ['var(--font-inter)', 'sans-serif']
	  },
	  extend: {
		colors: {
		  primary: "#10151F",
		  secondary: "#475467",
		  accent: {
			DEFAULT: "#7edad2",
			hover: "#79d3cc",
		  },
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