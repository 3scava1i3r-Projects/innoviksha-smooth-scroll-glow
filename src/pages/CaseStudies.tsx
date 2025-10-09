
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const caseStudies = [
  { id: 1, title: "PPD Calculator", year: "2025", image: "https://cdn.cosmos.so/f15d4e79-18e3-4eeb-91a3-165634bedbe2.?format=jpeg", tags: ["Web Development"], slug: "ppd-calculator", type: "project" },
  { id: 2, title: "Vega", year: "2023", image: "https://cdn.cosmos.so/33c3609d-d4b5-4c55-96f6-31bccc54bb3f?format=jpeg", tags: ["DeFi", "Blockchain"], slug: "vega", type: "project" },
  { id: 3, title: "TurboETH", year: "2023", image: "https://cdn.cosmos.so/c3711dd7-4f87-4dd2-9433-7c3b951d9ee4?format=jpeg", tags: ["Ethereum", "Infrastructure"], slug: "turboeth", type: "project" },
  { id: 4, title: "Mask Network x mStable", year: "2021", image: "https://cdn.cosmos.so/dabe6846-02e4-4e6a-8389-66ae3ebe63a7?format=jpeg", tags: ["Integration", "DeFi"], slug: "mask-mstable", type: "project" },
  { id: 5, title: "HIE Agency Website", year: "2025", image: "https://cdn.cosmos.so/a6425fe9-0693-48ae-8d8a-dec2d0bc98d7.?format=jpeg", tags: ["Web Design"], slug: "HIE-website", type: "project" },
  { id: 6, title: "Hritwik Portfolio", year: "2024", image: "https://cdn.cosmos.so/f8af6b2b-75cf-4d42-b4e8-81c46d7fce80?format=jpeg", tags: ["Portfolio", "React"], slug: "hritwik-portfolio", type: "project" },
  { id: 7, title: "HackoFiesta", year: "2020", image: "https://cdn.cosmos.so/56bb5ac7-dd5d-4cd7-9537-5da37372d79d?format=jpeg", tags: ["Hackathon", "Winner"], slug: "hackofiesta", type: "hackathon-winner" },
  { id: 8, title: "Hack Gujarat ", year: "2020", image: "https://cdn.cosmos.so/33c3609d-d4b5-4c55-96f6-31bccc54bb3f?format=jpeg", tags: ["Hackathon", "Winner"], slug: "hack-gujarat", type: "hackathon-winner" },
  { id: 9, title: "IOTEX India ", year: "2021", image: "https://cdn.cosmos.so/5c452266-a212-41d4-be23-a5aa64fa677e?format=jpeg", tags: ["Hackathon", "IoT"], slug: "iotex-india", type: "hackathon-winner" },
  { id: 10, title: "Hack-a-Solution ", year: "2020", image: "https://cdn.cosmos.so/c9becea2-e849-4e6b-a802-249d3b6925c6?format=jpeg", tags: ["Hackathon"], slug: "hack-a-solution", type: "hackathon-winner" },
  { id: 11, title: "HackAtom V ", year: "2020", image: "https://i.redd.it/o8lw993rcqz91.gif", tags: ["Hackathon", "Cosmos"], slug: "hackatom-v", type: "hackathon-winner" },
  { id: 12, title: "Sovrython", year: "2021", image: "https://i.redd.it/zlx4bhx1aq701.gif", tags: ["Hackathon"], slug: "sovrython", type: "hackathon-winner" },
  { id: 13, title: "ETHCC ", year: "2021", image: "https://cdn.cosmos.so/31f63bda-4dc6-476b-913b-232b1c12c9ce?format=jpeg", tags: ["Ethereum", "Hackathon"], slug: "ethcc", type: "hackathon-winner" },
  { id: 14, title: "DefiSummer ", year: "2021", image: "https://cdn.cosmos.so/979fed3d-3156-43e0-a595-0218a189f09b.?format=jpeg", tags: ["DeFi", "Hackathon"], slug: "defisummer", type: "hackathon-winner" },
  { id: 15, title: "Subql", year: "2025", image: "https://i.pinimg.com/originals/09/f4/a4/09f4a4dcaa98868f19be42f177e3559a.gif", tags: ["Blockchain", "API"], slug: "subql", type: "project" },
  { id: 16, title: "Subgraphs NFT20", year: "2021", image: "https://i.pinimg.com/originals/1f/1e/6f/1f1e6f6e7c70a5bb21fc475d8dbe699f.gif", tags: ["Graph", "NFT"], slug: "subgraphs-nft20", type: "project" },
  { id: 17, title: "WalletConnect/Web3Auth", year: "2021", image: "https://cdn.cosmos.so/00745561-e86f-468b-b086-a9e5f4faedf2?format=jpeg", tags: ["Authentication", "Web3"], slug: "walletconnect-web3auth", type: "project" },
  { id: 18, title: "Moralis → Web3UIKit", year: "2022", image: "https://cdn.cosmos.so/cfe37780-affd-4b7b-9dd7-58c044832cab?format=jpeg", tags: ["UI Kit", "Web3"], slug: "moralis-web3uikit", type: "project" },
  { id: 19, title: "Cork Protocol Audit", year: "2022", image: "https://cdn.cosmos.so/00745561-e86f-468b-b086-a9e5f4faedf2?format=jpeg", tags: ["Security", "Web3"], slug: "cork-protocol-audit", type: "project" }
];

const CaseStudies = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const hoverImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    console.log('Gallery setup starting...');
    import('gsap').then((gsapModule: any) => {
      const gsap = gsapModule.gsap || gsapModule.default;
      console.log('GSAP loaded:', gsap);

      // Gallery setup
      const galleryEl = galleryRef.current;
      const hoverImg = hoverImgRef.current;

      if (galleryEl && hoverImg) {
        console.log('Gallery elements found');
        const galleryItems = Array.from(galleryEl.querySelectorAll('.gallery-item')) as HTMLElement[];

        galleryItems.forEach((item) => {
          item.addEventListener('mouseenter', () => {
            console.log('Hover enter, img src:', item.dataset.glImg);
            if (hoverImg && item.dataset.glImg) {
              hoverImg.src = item.dataset.glImg;
              gsap.to(hoverImg, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
              });
            }
          });

          item.addEventListener('mouseleave', () => {
            gsap.to(hoverImg, {
              opacity: 0,
              scale: 0.9,
              duration: 0.3,
              ease: 'power2.in'
            });
          });
        });

        // Mouse move for hover image positioning
        window.addEventListener('mousemove', (e) => {
          gsap.to(hoverImg, {
            x: e.clientX - hoverImg.offsetWidth / 2,
            y: e.clientY - hoverImg.offsetHeight / 2,
            duration: 0.1,
            ease: 'none'
          });
        });
      } else {
        console.error('Gallery elements not found:', galleryEl, hoverImg);
      }
    }).catch((error) => console.error('Error loading GSAP:', error));
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Header />
      {/* <section className="py-8 md:py-12">
        <div className="container mx-auto text-center px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-bold mt-8 leading-tight">Case</h1>
          </div>
        </div>
      </section> */}
      <div className="relative w-screen min-h-screen flex flex-col justify-center">
        <div className="flex items-center justify-center w-full flex-1 relative">
          <div className="mx-auto">
            <div className="gallery flex flex-col divide-y-2 divide-gray-300" style={{width: 'clamp(98vw, 85vw, 45rem)'}} ref={galleryRef}>
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="gallery-item cursor-pointer py-6 px-4 relative"
                  data-gl-img={study.image}
                  data-gl-img-name={`tex${study.id}`}
                  onClick={() => {
                    window.location.href = `/case-studies/${study.slug}`;
                  }}
                >
                  {study.year && (
                    <div className="absolute top-0 left-0">
                      <div className="font-light text-lg text-foreground/70">
                        {study.year}
                      </div>
                    </div>
                  )}
                  <div className="absolute top-0 right-0">
                    <div className=" text-lg text-muted-foreground uppercase tracking-wide">
                      {study.type.replace('-', ' ')}
                    </div>
                  </div>
                  <div className="text-center font-display font-bold text-8xl text-foreground leading-tight pt-8">
                    {study.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img ref={hoverImgRef} className="hover-img" alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudies;
