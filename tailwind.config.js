/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			colors: {
				brand: { 400: "#4CB5F9", 500: "#0095F6", 600: "#1877f2" },
			},
		},
		screens: {
			"mb-L": "28.12em",
		},
		container: { center: true, padding: "2rem" },
	},
	darkMode: "selector",
	plugins: [],
};
