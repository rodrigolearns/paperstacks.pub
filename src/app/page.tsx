import { FaRegNewspaper, FaRegEye } from "react-icons/fa";
import { LuWallet, LuPencilLine } from "react-icons/lu";
import Image from "next/image";

// Define a type for feature card items
type FeatureItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureCards = ({ items }: { items: FeatureItem[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
    {items.map((item, index) => (
      <div
        key={index}
        className="bg-white border border-black rounded-lg p-5"
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-3">{item.icon}</div>
          <h3 className="font-bold text-lg mb-2 text-black whitespace-pre-line">{item.title}</h3>
          <p className="text-black whitespace-pre-line">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default function HomePage() {
  const featureBoxes: FeatureItem[] = [
    {
      title: "Reviewing is hard work\nand it should be rewarded",
      description: "So we reward reviewers in tokens",
      icon: <LuWallet className="h-8 w-8 text-purple-600" />,
    },
    {
      title: "Publishing a peer-reviewed paper\nshould be free",
      description: "So you can spend tokens to hire peer reviews",
      icon: <LuPencilLine className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Peer review should be transparent",
      description: "So we showcase reviews and reviewers' metrics on each paper",
      icon: <FaRegEye className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Scientific knowledge should be free",
      description: "So we make it free\nF**k paywalls",
      icon: <FaRegNewspaper className="h-8 w-8 text-[#EB406D]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto py-12 px-4">
        <div className="text-center mb-16">
          <Image
            src="/PaperStacks-Icon-Black.svg"
            alt="PaperStacks Logo"
            width={144}
            height={144}
            className="w-36 h-36 mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4 text-black">
            Welcome to <span className="text-5xl text-black">PaperStacks</span>
          </h1>
        </div>
        <FeatureCards items={featureBoxes} />
        <div className="max-w-4xl mx-auto mt-12 text-base text-black text-left bg-white bg-opacity-80 p-6 rounded-lg border border-black">
          <h2 className="text-2xl font-semibold mb-4 text-center">Paper Stacks are for researchers</h2>
          <p>
            Academic research publishing is dominated by a few publishing houses forming a non-collusive oligopoly, extracting undue funds from the research ecosystem and enforcing outdated paradigms to protect their business model moat. The broader research community has shown strong motivation to move away from this system, making the industry ripe for disruption.<br /><br />
            PaperStacks aims to usher in a new paradigm of research publishing by removing monetary barriers through a diamond open-access model. Enabled by emerging technologies such as large language models (LLMs), it moves beyond historically inherited structures—like prestige-based gatekeeping, editorial bottlenecks, and opaque evaluation systems—that hinder efficiency, limit open communication, and degrade the researcher experience.<br /><br />
            PaperStacks operates on a token economy where users earn tokens by reviewing submissions and spend them to publish their own work. Inspired by mutual rewarding systems in gaming, our incentive model encourages rigorous, high-quality reviews over volume. A personalized feed suggests papers aligned with users&apos; expertise, using semantic analysis of their publication history. This opt-in process empowers reviewers to engage meaningfully while easing reviewer sourcing and improving overall participation.<br /><br />
            Unlike traditional journals where editors act as centralized gatekeepers, PaperStacks follows the Publish–Review–Curate model. All submissions are published immediately, then reviewed. Each paper is accompanied by a collaborative reviewer assessment that evaluates the strength of evidence and novelty, replacing binary accept/reject outcomes with a transparent, bidimensional evaluation. Editorial intervention is minimal and reactive, limited to resolving disputes. Editors are elevated users who are rewarded with tokens and platform privileges, not hierarchical authority. This redesign—combining incentive-based workflows, reviewer matching, and decentralized governance—delivers unprecedented efficiency and scalability.<br /><br />
            Initial funding for the platform will be raised through token sales to universities and research institutions, which will also seed the token economy. Long-term sustainability is planned through a freemium plan offering additional features and visibility, though publishing and reviewing remain free.
            <span className="block text-right text-base text-gray-500 mt-6">-Rodrigo Rosas-Bertolini</span>
          </p>
        </div>
      </main>
      <footer className="py-4 px-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} PaperStacks. All rights reserved.</p>
      </footer>
    </div>
  );
}
