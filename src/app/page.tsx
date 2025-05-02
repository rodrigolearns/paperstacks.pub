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
      </main>
      <footer className="py-4 px-6 text-center text-sm text-gray-500">
        <div className="mb-4">
          <p className="flex items-center justify-center gap-2">
            <span className="text-xl text-gray-700 italic">
              &quot;Paper Stacks are for researchers&quot;
            </span>
            <span className="text-xl text-gray-500 italic">
              -Rodrigo Rosas-Bertolini
            </span>
          </p>
        </div>
        <p>© {new Date().getFullYear()} PaperStacks. All rights reserved.</p>
      </footer>
    </div>
  );
}
