/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				custom: ["Jaapokki", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				gray: {
					400: "#dcddde",
					500: "#72767d",
					600: "#4f545c",
					700: "#36393f",
					800: "#292b2f",
					900: "#202225",
					1000: "#050505",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
