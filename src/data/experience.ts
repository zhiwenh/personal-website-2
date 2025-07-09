import darwinsLogo from './../darwins-logo.png';
import floridaBiologixLogo from './../florida-biologix-logo.png';
import haloPlatformLogo from './../halo-platform-logo.png';
import iceRedLogo from './../icered-logo.png';
import synapseLogo from './../synapse-logo.png';
import hybridAdsAiLogo from './../hybrid-ads-ai-logo.png';
import unrealVideoAiLogo from './../unrealvideoai-logo.png';

// minor

export const workExperience = [
  {
    company: "UnrealVideo.ai",
    position: "Software Developer",
    period: "Dec 2024 - Present",
    logo: unrealVideoAiLogo,
    description: "Built a full-stack AI video generation platform with a modern, responsive UI using React and Tailwind CSS. Developed a backend system integrating MongoDB for data storage and user authentication. Implemented features such as automatic scene detection and manual trimming to streamline video editing. Integrated a token-based payment structure using Stripe for processing payments within the scene detection application.",
    technologies: ["AI"]
  },
  {
    company: "Synapse",
    position: "Software Engineer III",
    period: "Mar 2022 - Jun 2022",
    logo: synapseLogo,
    description: "Streamlined financial applications by deploying Ethereum nodes on AWS and developed a multi-chain custodial wallet supporting Ethereum, Solana, and Polygon to enhance trading. Using Terraform, automated Polygon node deployment, improving scalability. Also created detailed diagrams of Ethereum-based trade functionality for better clarity and decision-making.",
    technologies: ["Ethereum", "Solana", "Polygon", "AWS", "Terraform", "Node.js"]
  },
  {
    company: "Icered",
    position: "Blockchain Engineer",
    period: "Nov 2021 - Jan 2022",
    logo: iceRedLogo,
    description: "Developed an admin-controlled ERC-20 token for cost-efficient minting and created smart contracts and backend services for an NFT exchange, enabling message signing, lazy minting, and Ethereum integration. Using MongoDB, ensured reliable transaction data storage. Also contributed to the architecture of a centralized crypto exchange for Bitcoin, Ethereum, ERC-20, and Icered tokens, streamlining workflows with Docker.",
    technologies: ["Solidity", "ERC-20", "NFT", "MongoDB", "Docker", "Node.js"]
  },
  {
    company: "Darwins",
    position: "Blockchain Engineer",
    period: "Jun 2021 - Nov 2021",
    logo: darwinsLogo,
    description: "Contributed to decentralized finance by developing an ERC-721 rewards contract with lazy minting for user engagement and leading a layer-1 to layer-2 migration with batch transactions for scalability and cost reduction. Built front-end and back-end features for ERC-721 minting and transfers and created versatile buy-sell, auction, and offer contracts for trading. My work included developing Angular 2 components, a TypeScript backend with Hapi, and MongoDB for transaction management. Also created the smart contract for Cultiez, a 7,000-piece generative NFT collection now on OpenSea.",
    technologies: ["ERC-721", "Layer-2", "Angular", "TypeScript", "Hapi", "MongoDB"]
  },
  {
    company: "Halo Platform ",
    position: "Backend Developer",
    period: "May 2018 - Aug 2018",
    logo: haloPlatformLogo,
    description: "Developed a decentralized trading platform using the 0x Protocol for peer-to-peer cryptocurrency trading and built a Node.js-based exchange supporting Bitcoin, Ethereum, and Halo tokens. Ensured reliability with Mocha and Chai tests and contributed to rapid updates and feature enhancements in an Agile and Scrum environment.",
    technologies: ["Node.js", "0x Protocol", "Bitcoin", "Ethereum", "Mocha", "Chai"]
  },
  {
    company: "Florida Biologix",
    position: "Lab Technician",
    period: "Mar 2015 – Aug 2015",
    logo: floridaBiologixLogo,
    description: "Contributed to biologic product manufacturing for clinical trials, focusing on upstream production of viral vectors with suspension cell cultures up to 400L in cGMP-compliant environments. Integrated airflow meters into bioreactors to optimize processes and developed SOPs and batch records to enhance efficiency and regulatory compliance.",
    technologies: ["cGMP", "Bioreactors", "Process Optimization", "SOP Development", "Quality Control"]
  }
];
