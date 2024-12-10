import delibImage from './../delib.png';
import destoreImage from './../destore2.png';
import devchainImage from './../devchain.png';
import dexImage from './../dex2.png';
import googleMusicVisualizerImage from './../google-music-visualizer.png';
import leagueOfLegendsCooldownTrackerImage from './../league-of-legends-cooldown-tracker2.png';
import personalWebsiteImage from './../personal-website-image.png';

export const projects = [
  {
    title: "Personal Website",
    description: "A personal website built using React and with the styling done with TailwindCSS.",
    github: "https://github.com/zhiwenh/personal-website-2",
    image: personalWebsiteImage,
    date: "2024"
  },
  {
    title: "Dex",
    description: "A decentralized exchange for Ethereum ERC-20 tokens. Works off a single smart contract that sits on the Ethereum blockchain. Users can add tokens to trade and trade for other tokens.",
    image: dexImage,
    date: "2024"
  },
  {
    title: "Delib",
    description: "A simple Ethereum framework. It allows you to compile, build, and deploy smart contracts. It also allows you to easily create decentralized applications with the smart contracts you created.",
    image: delibImage,
    github: "https://github.com/zhiwenh/delib",
    date: "2016 - 2021"
  },
  {
    title: "Devchain",
    description: "A private Ethereum blockchain generator. Allows you to easily set up testnets to test your blockchain applications on.",
    image: devchainImage,
    github: "https://github.com/zhiwenh/devchain",
    date: "2016 - 2018"
  },
  {
    title: "League of Legends Cooldown Tracker",
    description: "A cooldown tracker for League of Legends that worked on IOS and Android. Used React Native to work on mobile devices.",
    image: leagueOfLegendsCooldownTrackerImage,
    github: "https://github.com/zhiwenh/lolcooldown",
    date: "2019"
  },
  {
    title: "Google Music Visualizer",
    description: "A music visualizer for Google Play Music.",
    image: googleMusicVisualizerImage,
    github: "https://github.com/zhiwenh/google-music-visualizer",
    date: "2016 - 2019"
  },
  {
    title: "Destore",
    description: "A file storage platform built on Ethereum. Used IPFS for the ability to send files to other people.",
    image: destoreImage,
    github: "https://github.com/zhiwenh/destore",
    date: "2016"
  }
];
