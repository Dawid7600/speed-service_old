module.exports = {
	content: ["./**/*.{html,css,js}"],
	theme: {
		extend: {
			backgroundImage: {
				heroMobile:
					"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)) ,url('../images/bmw-hero-mobile.jpg')",
				heroDesktop: "url('../images/hero-desktop.jpg')",
				bmwAboutUs:
					"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)) ,url('../images/bmw-about-us.jpg')",
				bmwMMobile:
					"linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)) , url('../images/bmw-m.jpg')",
				bmwMDesktop: "url('../images/bmw-m.jpg')",
			},
			colors: {
				mainBlue: "#2f76d5",
				secondaryWhite: "#faf6f5",
				lightGrey: "#dbdad5",
				darkBlack: "#100f0f",
				fullBlack: "#000000",
				footerBlack: "#030A11",
				fullWhite: "#ffffff",
			},
			fontFamily: {
				poppins: "'Poppins', sans-serif",
			},
			height: {
				"screen-1/2": "50vh",
			},

			spacing: {
				22: "88px",
			},
		},
	},
	plugins: [],
};
