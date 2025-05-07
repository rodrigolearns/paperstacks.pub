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
          <h2 className="text-2xl text-gray-500 font-semibold mb-4 text-center italic">&quot; Remember, paper stacks are for researchers &quot;</h2>
          <p>
            Academic research publishing is dominated by a few major houses forming a non-collusive oligopoly. These players extract undue funds from the ecosystem by charging authors to publish (APCs) or placing research behind paywalls&mdash;both of which create friction, limit access, and hinder progress. To protect their reputational moat, they sustain an outdated, inefficient system that is slow and undermines scientific discourse. With the research community eager for change, and technological and cultural shifts underway, the moment is ripe to disrupt legacy publishing and correct its market failure.<br /><br />
            <strong>PaperStacks</strong> introduces a new model built on market dynamics and aligned incentives, replacing editorial control and restoring agency to reviewers and authors. This system is efficient enough to eliminate the need for APCs and paywalls. It runs on a self-contained token economy where users earn tokens by reviewing and spend them to publish. A personalized feed suggests papers seeking review based on users&apos; expertise. Reviewers choose what and when to review, easing reviewer recruitment and increasing meaningful engagement. During peer review, incentives favor quality over quantity, encouraging thoughtful, high-value feedback. Each peer review culminates in a transparent assessment of novelty, evidence strength, and the full review history of the paper. Once users have earned enough tokens, they can fund peer review for their own work&mdash;customizing parameters such as anonymity, reviewer count, and review rounds.<br /><br />
            Rather than relying on editors to triage submissions, <strong>PaperStacks</strong> lets the community decide what gets reviewed through open markets. Peer review is guided by incentives and competition, not editorial mandates. The traditional accept/reject signal tied to journal prestige is replaced by multidimensional evaluations, enabling readers to assess a paper&apos;s merit directly. On <strong>PaperStacks</strong>, editorial oversight is minimal and focused on dispute resolution. Editors are elevated users rewarded with tokens and privileges, not institutional gatekeepers. Unlike legacy publishers that sylo research into journals with bloated overhead, <strong>PaperStacks</strong> scales naturally across disciplines. Its personalized feed and user-defined review settings offer flexibility, allowing each field to apply its standards without the platform enforcing uniformity.<br /><br />
            Initial funding will be raised through token sales to universities and research institutions, which will also help seed the token economy. A freemium model will allow long-term sustainability, offering optional premium features and visibility, while publishing and reviewing remain free.
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
