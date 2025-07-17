import delibImage from './../delib.png';
import destoreImage from './../destore.png';
import devchainImage from './../devchain.png';
import dexImage from './../dex2.png';
import googleMusicVisualizerImage from './../google-music-visualizer.png';
import leagueOfLegendsCooldownTrackerImage from './../league-of-legends-cooldown-tracker.png';
import personalWebsiteImage from './../personal-website-image.png';
import unrealVideoAIImage from './../unreal-video-ai-image.png';
import dapperLimoLaxImage from './../dapper-limo-lax.png';

export const projects = [
  {
    title: "Dex",
    description: "A decentralized exchange for Ethereum ERC-20 tokens. Works off a single smart contract that sits on the Ethereum blockchain. Users can add tokens to trade and trade for other tokens.",
    image: dexImage,
    date: "2025",
    technologies: ["Ethereum", "Solidity", "ERC-20", "React", "Web3.js", "Smart Contracts"],
    website: "https://dex-omega-eight.vercel.app/"
  },
  {
    title: "Unreal Video AI",
    description: "An application that automatically detects scenes in your videos.",
    image: unrealVideoAIImage,
    date: "2025",
    technologies: ["React", "Vite", "MongoDB"],
    website: "https://unrealvideo.ai"
  },
  {
    title: "Dapper Limo LAX",
    description: "A website for Dapper Limo LAX that allows customers to book rides, contains an admin panel, and contains a drivers panel.",
    image: dapperLimoLaxImage,
    date: "2025",
    technologies: ["React", "Vite", "MongoDB", "Tailwind CSS"],
    website: "https://dapplimolax.vercel.app/"
  },
  {
    title: "Personal Website",
    description: "A personal website built using React and with the styling done with TailwindCSS.",
    github: "https://github.com/zhiwenh/personal-website-2",
    image: personalWebsiteImage,
    date: "2025",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
    website: "https://zhiwenh.com"
  },
  {
    title: "Delib",
    description: "A simple Ethereum framework that's on npm. It allows you to compile, build, and deploy smart contracts. It also allows you to easily create decentralized applications with the smart contracts you created.",
    image: delibImage,
    github: "https://github.com/zhiwenh/delib",
    date: "2016 - 2021",
    technologies: ["Ethereum", "Node.js", "Solidity", "TypeScript", "Smart Contracts", "DApp Development"],
    website:"https://www.npmjs.com/package/delib"
  },
  {
    title: "Devchain",
    description: "A private Ethereum blockchain generator. Allows you to easily set up testnets to test your blockchain applications on.",
    image: devchainImage,
    github: "https://github.com/zhiwenh/devchain",
    date: "2016 - 2018",
    technologies: ["Ethereum", "Node.js", "Docker", "TestNet", "Blockchain", "Development Tools"],
  },
  {
    title: "League of Legends Cooldown Tracker",
    description: "A cooldown tracker for League of Legends that worked on IOS and Android. Used React Native to work on mobile devices.",
    image: leagueOfLegendsCooldownTrackerImage,
    github: "https://github.com/zhiwenh/lolcooldown",
    date: "2019",
    technologies: ["React Native", "iOS", "Android", "Mobile Development", "Game Integration"],
  },
  {
    title: "Google Music Visualizer",
    description: "A music visualizer Chrome extension for the former website Google Play Music.",
    image: googleMusicVisualizerImage,
    github: "https://github.com/zhiwenh/google-music-visualizer",
    date: "2016 - 2019",
    technologies: ["JavaScript", "Web Audio API", "Music Visualization", "Browser Extension"],
  },
  {
    title: "Destore",
    description: "A file storage platform built on Ethereum. Used IPFS for the ability to send files to other people.",
    image: destoreImage,
    github: "https://github.com/zhiwenh/destore",
    date: "2016",
    technologies: ["Ethereum", "IPFS", "Smart Contracts", "Decentralized Storage", "File Sharing"],
  }
];
