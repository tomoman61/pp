/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			small: "640px",
			medium: "960px",
			large: "1200px",
			xlarge: "1600px",
		},
		extend: {
			colors: {
				customBlue: "#17283D",
			},
		},
	},
	plugins: [],
};
