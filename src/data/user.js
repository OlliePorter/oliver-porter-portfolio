const INFO = {
	main: {
		title: "Oliver Porter Portfolio",
		name: "Oliver Porter",
		email: "ol.porter@me.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://x.com/heyolpo",
		github: "https://github.com/OlliePorter",
		linkedin: "https://www.linkedin.com/in/ollieporter",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Hi, I'm Oliver.",
		description:
			"Front-end software engineer and UI/UX designer with a track record of delivering high-impact results in industries such as finance, blockchain, healthcare, and education. I specialize in React and Flutter, crafting seamless, pixel-perfect experiences for web and mobile. I've led UI design from the ground up in Figma, built cohesive design systems with Storybook, and shipped polished features to iOS, Android, and the browser.",
	},

	about: {
		title: "Hi, I'm Oliver.",
		description:
						"Front-end software engineer and UI/UX designer with a track record of delivering high-impact results in industries such as finance, blockchain, healthcare, and education. I specialize in React and Flutter, crafting seamless, pixel-perfect experiences for web and mobile. I've led UI design from the ground up in Figma, built cohesive design systems with Storybook, and shipped polished features to iOS, Android, and the browser.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
			{
			title: "Web SaaS Healthcare App",
			description:
				"React & Redux scheduling platform that streamlined staffing operations for over 100,000 medical workers across 600+ healthcare facilities nationwide.",
			logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png",
			linkTextWebsite: "Site",
			linkWebsite: "https://www.florence.co.uk",
			linkTextCode: "Code",
			linkCode: "https://github.com/team-florence",
			role: "Front-End Software Engineer",
			linkTextDesign: null,
			linkDesign:  null,
		},
		{
			title: "Mobile Consumer Finance App",
			description:
				"Flutter and Firebase mobile app used by 150,000 clients to manage recurring deposits, withdrawals, and digital asset portfolios.",
			logo: "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
			linkTextWebsite: "Site",
			linkWebsite: "https://www.swanbitcoin.com",
			linkTextCode: "Code",
			linkCode: "https://github.com/swan-bitcoin",
			role: "Front-end Software Engineer",
			linkTextDesign: null,
			linkDesign:  null,
		},
		{
			title: "Mobile Augmented-Reality Game",
			description:
				"Flutter and Firebase mobile AR education game to promote financial literacy among Gen Z. Winner of Top Builder 2025 competition.",
			logo: "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
			linkTextWebsite: "Site",
			linkWebsite: "https://jippi.app",
			linkTextCode: "Code",
			linkCode: "https://github.com/Jippi-App",
			role: "Front-end Software Engineer",
			linkTextDesign: null,
			linkDesign:  null,
	},
			{
			title: "Mobile Neobank App",
			description:
				"Financial services app for managing a portfolio of financial instruments such as ETFs, stocks, crypto, and commodities.",
			logo: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png",
			linkTextWebsite: "Site",
			linkWebsite: "https://www.yopaki.com/en",
			linkTextCode: null,
			linkCode: null,
			role: "UI/UX Designer",
			linkTextDesign: "Figma",
			linkDesign:  "https://www.figma.com/design/yyTF7ZOXBro5KfSQ10alJl/Yopaki-Designs?node-id=0-1&t=dyRAMg6Hllyqv7FL-1",
		},
		{
			title: "Web Blockchain Explorer",
			description:
				"Flutter web app for navigating different levels of the Topl blockchain through fun & friendly UI experiences for blockchain beginners.",
			logo: "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
			linkTextWebsite: "Site",
			linkWebsite: "https://topl.co",
			linkTextCode: "Code",
			linkCode: "https://github.com/OlliePorter/blockchain_explorer",
			role: "Front-End Software Engineer",
			linkTextDesign: null,
			linkDesign:  null,
		},

		{
			title: "Mobile Bitcoin Wallet",
			description:
				"React Native proof-of-concept mobile bitcoin wallet for sending and receiving mock bitcoin using Redux for state management & Jest for testing.",
			logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png",
			linkTextWebsite: null,
			linkWebsite: null,
			linkTextCode: "Code",
			linkCode: "https://github.com/OlliePorter/bitcoin-wallet",
			role: "Front-End Software Engineer",
			linkTextDesign: null,
			linkDesign:  null,
		},


	],
	workExperience: [
		{ 
			logo: "./jippi.png",
			title: "Jippi",
			subtitle: "Front-End Software Engineer",
			dateString: "Oct 2024 - Present",
		},
		{ 
			logo: "./yopaki.png",
			title: "Yopaki",
			subtitle: "UI/UX Designer (Contract)",
			dateString: "Aug 2023 - Oct 2024",
		},
		{ 
			logo: "./swan.png",
			title: "Swan Bitcoin",
			subtitle: "Front-End Software Engineer",
			dateString: "Mar 2023 - Jul 2024",
		},
		{ 
			logo: "./topl.png",
			title: "Topl",
			subtitle: "Front-End Software Engineer",
			dateString: "Feb 2022 - Feb 2023",
		},
		{ 
			logo: "./florence.png",
			title: "Florence",
			subtitle: "Front-End Software Engineer",
			dateString: "Jul 2020 to Dec 2021",
		},
		{ 
			logo: "./sb.png",
			title: "Simply Business",
			subtitle: "Junior Software Engineer",
			dateString: "Apr 2019 to Jun 2020",
		},
		{ 
			logo: "./makers.png",
			title: "Makers Academy",
			subtitle: "Product Manager",
			dateString: "Apr 2018 to Apr 2019",
		},
		{ 
			logo: "./makers.png",
			title: "Makers Academy",
			subtitle: "Lead Admissions Manager",
			dateString: "Aug 2015 to Sep 2017",
		},
	],
	education: [
		{ 
			logo: "./makers.png",
			title: "Associates Degree, Software Engineering",
			subtitle: "Makers Academy",
			dateString: "Mar 2020",
		},
		{ 
			logo: "./fcc.png",
			title: "Responsive Web Design Certification",
			subtitle: "freeCodeCamp",
			dateString: "Apr 2019",
		},
		{ 
			logo: "./ps.png",
			title: "Software Product Management Certification",
			subtitle: "Product School",
			dateString: "Mar 2018",
		},
	],
};

export default INFO;
