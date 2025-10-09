import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Same data as in CaseStudies.tsx
const caseStudies = [
  { id: 1, title: "PPD Calculator", year: "2025", image: "https://cdn.cosmos.so/f15d4e79-18e3-4eeb-91a3-165634bedbe2.?format=jpeg", tags: ["Web Development"], slug: "ppd-calculator", type: "project", description: "A comprehensive PPD (Property Price Density) calculator application with modern UI and advanced calculations." },
  { id: 2, title: "Vega", year: "2023", image: "https://cdn.cosmos.so/33c3609d-d4b5-4c55-96f6-31bccc54bb3f?format=jpeg", tags: ["DeFi", "Blockchain"], slug: "vega", type: "project", description: "Decentralized finance protocol enabling seamless trading with advanced liquidity solutions." },
  { id: 3, title: "TurboETH", year: "2023", image: "https://cdn.cosmos.so/f15d4e79-18e3-4eeb-91a3-165634bedbe2.?format=jpeg", tags: ["Ethereum", "Infrastructure"], slug: "turboeth", type: "project", description: "High-performance Ethereum infrastructure optimization tools." },
  { id: 4, title: "Mask Network x mStable Integration", year: "2021", image: "https://cdn.cosmos.so/33c3609d-d4b5-4c55-96f6-31bccc54bb3f?format=jpeg", tags: ["Integration", "DeFi"], slug: "mask-mstable", type: "project", description: "Seamless integration between Mask Network and mStable for enhanced privacy features." },
  { id: 5, title: "HIE Agency Website", year: "2025", image: "https://cdn.cosmos.so/f15d4e79-18e3-4eeb-91a3-165634bedbe2.?format=jpeg", tags: ["Web Design"], slug: "HIE-website", type: "project", description: "Modern, responsive website design with cutting-edge animations and user experience." },
  { id: 6, title: "Hritwik Portfolio", year: "2024", image: "https://cdn.cosmos.so/33c3609d-d4b5-4c55-96f6-31bccc54bb3f?format=jpeg", tags: ["Portfolio", "React"], slug: "hritwik-portfolio", type: "project", description: "Creative portfolio website showcasing projects and creative work." },
  { id: 7, title: "HackoFiesta Hackathon", year: "2020", image: "https://via.placeholder.com/800x600?text=HackoFiesta", tags: ["Hackathon", "Winner"], slug: "hackofiesta", type: "hackathon-winner", description: "Award-winning project from HackoFiesta hackathon competition." },
  { id: 8, title: "Hack Gujarat Hackathon", year: "2020", image: "https://cdn.cosmos.so/33c3609d-d4b5-4c55-96f6-31bccc54bb3f?format=jpeg", tags: ["Hackathon", "Winner"], slug: "hack-gujarat", type: "hackathon-winner", description: "Successful winner at Hack Gujarat hackathon with innovative solution." },
  { id: 9, title: "IOTEX India Hackathon", year: "2021", image: "https://via.placeholder.com/800x600?text=IOTEX+India", tags: ["Hackathon", "IoT"], slug: "iotex-india", type: "hackathon-winner", description: "IoT-focused development project for IOTEX India hackathon." },
  { id: 10, title: "Hack-a-Solution Hackathon", year: "2020", image: "https://via.placeholder.com/800x600?text=Hack-a-Solution", tags: ["Hackathon"], slug: "hack-a-solution", type: "hackathon-winner", description: "Problem-solving application developed during Hack-a-Solution competition." },
  { id: 11, title: "HackAtom V Hackathon", year: "2020", image: "https://via.placeholder.com/800x600?text=HackAtom+V", tags: ["Hackathon", "Cosmos"], slug: "hackatom-v", type: "hackathon-winner", description: "Cosmos ecosystem project developed for HackAtom V hackathon." },
  { id: 12, title: "Sovrython", year: "2021", image: "https://via.placeholder.com/800x600?text=Sovrython", tags: ["Hackathon"], slug: "sovrython", type: "hackathon-winner", description: "Community-driven development project from Sovrython hackathon." },
  { id: 13, title: "ETHCC Hackathon", year: "2021", image: "https://via.placeholder.com/800x600?text=ETHCC", tags: ["Ethereum", "Hackathon"], slug: "ethcc", type: "hackathon-winner", description: "Ethereum conference hackathon project with innovative dApp solution." },
  { id: 14, title: "DefiSummer Hackathon", year: "2021", image: "https://via.placeholder.com/800x600?text=DefiSummer", tags: ["DeFi", "Hackathon"], slug: "defisummer", type: "hackathon-winner", description: "Decentralized finance application developed during summer hackathon season." },
  { id: 15, title: "Subql", year: "2025", image: "https://via.placeholder.com/800x600?text=Subql", tags: ["Blockchain", "API"], slug: "subql", type: "project", description: "Subquery network integration and API development project." },
  { id: 16, title: "Subgraphs NFT20", year: "2021", image: "https://via.placeholder.com/800x600?text=NFT20+Subgraphs", tags: ["Graph", "NFT"], slug: "subgraphs-nft20", type: "project", description: "The Graph protocol implementation for NFT20 decentralized exchange." },
  { id: 17, title: "WalletConnect/Web3Auth", year: "2021", image: "https://via.placeholder.com/800x600?text=WalletConnect", tags: ["Authentication", "Web3"], slug: "walletconnect-web3auth", type: "project", description: "Authentication and wallet integration using Web3Auth and WalletConnect." },
  { id: 18, title: "Moralis → Web3UIKit", year: "2022", image: "https://via.placeholder.com/800x600?text=Moralis+UI", tags: ["UI Kit", "Web3"], slug: "moralis-web3uikit", type: "project", description: "Transition from Moralis to Web3UIKit for enhanced Web3 component library." },
  { id: 19, title: "Cork Protocol Audit", year: "2022", image: "https://cdn.cosmos.so/00745561-e86f-468b-b086-a9e5f4faedf2?format=jpeg", tags: ["Security", "Web3"], slug: "cork-protocol-audit", type: "project" }
];

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find(study => study.slug === slug);

  if (!study) {
    return (
      <div className="bg-background min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="mb-8">The requested case study could not be found.</p>
          <Link to="/case-studies" className="text-primary hover:underline">← Back to All Case Studies</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8">
            <Link to="/case-studies" className="text-primary hover:underline">← Back to All Case Studies</Link>
          </nav>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="md:w-1/2">
              <div className="flex flex-wrap gap-2 mb-4">
                {study.year && (
                  <span className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full">
                    {study.year}
                  </span>
                )}
                {study.tags.map(tag => (
                  <span key={tag} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">{study.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{study.description}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
