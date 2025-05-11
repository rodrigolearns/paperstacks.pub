import { FaRegNewspaper, FaRegEye } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { LuWallet, LuPencilLine } from "react-icons/lu";
import Image from "next/image";
import Head from "next/head";

// Define a type for feature card items
type FeatureItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureCards = ({ items, title }: { items: FeatureItem[], title: string }) => (
  <div className="w-full max-w-4xl mx-auto bg-white border border-black rounded-lg overflow-hidden">
    <div className="text-2xl font-bold text-black mb-6 text-center pt-6">{title}</div>
    {items.map((item, index) => (
      <div
        key={index}
        className="flex flex-row items-center text-center px-4 py-4"
      >
        <div className="font-bold text-base text-black whitespace-pre-line flex-1">{item.title}</div>
        <div className="mx-4 flex-shrink-0">{item.icon}</div>
        <div className="text-black whitespace-pre-line flex-1">{item.description}</div>
      </div>
    ))}
  </div>
);

export default function HomePage() {
  const whatWeDoCards: FeatureItem[] = [
    {
      title: "Reviewing is hard work and it should be rewarded",
      description: "So we reward reviewers in tokens",
      icon: <LuWallet className="h-8 w-8 text-purple-600" />,
    },
    {
      title: "Publishing a peer-reviewed paper should be free",
      description: "So you can spend tokens to hire peer reviews",
      icon: <LuPencilLine className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Peer review should be transparent",
      description: "So we showcase reviews and reviewers' metrics on each paper",
      icon: <FaRegEye className="h-8 w-8 text-blue-600" />,
    },
  ];

  const whatWeDontDoCards: FeatureItem[] = [
      {
      title: "Editors should not gatekeep science",
      description: "So we don't let editors manage the peer review process, researchers do",
      icon: <FaRegHandshake className="h-10 w-10 text-yellow-600" />,
    },
    {
      title: "Scientific knowledge should be free",
      description: "So we make it free.\nF**k paywalls",
      icon: <FaRegNewspaper className="h-8 w-8 text-[#EB406D]" />,
    },
  ];

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <style>{`
        html {
          font-family: 'Roboto Mono', monospace;
          scrollbar-width: thin;
          scrollbar-color: #000 #fff;
        }
        body, * {
          font-family: 'Roboto Mono', monospace !important;
        }
        ::-webkit-scrollbar {
          width: 8px;
          background: #fff;
        }
        ::-webkit-scrollbar-thumb {
          background: #000;
          border-radius: 6px;
        }
        ::-webkit-scrollbar-button {
          display: none;
          height: 0;
        }
      `}</style>
      <div className="min-h-screen bg-white">
        <main className="container mx-auto py-12 px-4">
          <div className="text-center mb-8">
            <Image
              src="/PaperStacks-Icon-Black.svg"
              alt="PaperStacks Logo"
              width={144}
              height={144}
              className="w-36 h-36 mx-auto mb-8"
            />
            <h1 className="text-4xl font-bold mb-8 text-black">
              Welcome to <span className="text-5xl text-black">PaperStacks</span>
            </h1>
            <div className="max-w-4xl mx-auto mb-8 p-6 bg-white border border-black rounded-lg text-center text-lg text-black">
              The research publishing platform that replaces editorial gatekeeping, with a free market where <b>we the researchers</b> choose how our work is shared
            </div>
            <div className="max-w-4xl mx-auto mb-6 p-6 bg-yellow-50 border-2 border-yellow-400 rounded-lg flex flex-row items-center justify-center gap-4">
              <div className="text-2xl font-bold text-orange-600">Seeking co-founders!</div>
              <div className="text-lg text-black">Contact: <a href="mailto:rodrigo.rosas3@gmail.com" className="underline">Rodrigo.rosas3@gmail.com</a></div>
            </div>
          </div>
          <section className="mb-12">
            <div className="w-full max-w-4xl mx-auto bg-white border border-black rounded-lg overflow-hidden">
              <div className="flex flex-row items-center text-center px-4 pt-6 pb-2 font-bold text-2xl text-black">
                <div className="flex-1 what_we_think_column">What we think</div>
                <div className="w-16 svg_column"></div>
                <div className="flex-1 what_we_do_column">what we do</div>
              </div>
              {/* Rows */}
              {/* 1 */}
              <div className="flex flex-row items-center text-center px-4 py-6 gap-8">
                <div className="flex-1 text-base text-black what_we_think_column mr-4">Reviewing is hard work and it should be rewarded</div>
                <div className="mx-4 flex-shrink-0 svg_column"><LuWallet className="h-8 w-8 text-purple-600" /></div>
                <div className="flex-1 text-base text-black what_we_do_column ml-4">So we reward reviewers in tokens</div>
              </div>
              {/* 2 (Editors should not gatekeep science) */}
              <div className="flex flex-row items-center text-center px-4 py-6 gap-8">
                <div className="flex-1 text-base text-black what_we_think_column mr-4">Editors should not gatekeep science</div>
                <div className="mx-4 flex-shrink-0 svg_column"><FaRegHandshake className="h-10 w-10 text-yellow-600" /></div>
                <div className="flex-1 text-base text-black what_we_do_column ml-4">So editors don't manage the peer review process, researchers do</div>
              </div>
              {/* 3 */}
              <div className="flex flex-row items-center text-center px-4 py-6 gap-8">
                <div className="flex-1 text-base text-black what_we_think_column mr-4">Publishing a peer-reviewed paper should be free</div>
                <div className="mx-4 flex-shrink-0 svg_column"><LuPencilLine className="h-8 w-8 text-green-600" /></div>
                <div className="flex-1 text-base text-black what_we_do_column ml-4">So you can spend tokens to hire peer reviews</div>
              </div>
              {/* 4 (from what we don't do) */}
              <div className="flex flex-row items-center text-center px-4 py-6 gap-8">
                <div className="flex-1 text-base text-black what_we_think_column mr-4">Scientific knowledge should be free</div>
                <div className="mx-4 flex-shrink-0 svg_column"><FaRegNewspaper className="h-8 w-8 text-[#EB406D]" /></div>
                <div className="flex-1 text-base text-black what_we_do_column ml-4">So we make it free.<br/>F**k paywalls</div>
              </div>
              {/* 5 (Peer review should be transparent) */}
              <div className="flex flex-row items-center text-center px-4 py-6 gap-8">
                <div className="flex-1 text-base text-black what_we_think_column mr-4">Peer review should be transparent</div>
                <div className="mx-4 flex-shrink-0 svg_column"><FaRegEye className="h-8 w-8 text-blue-600" /></div>
                <div className="flex-1 text-base text-black what_we_do_column ml-4">So we showcase reviews and reviewers' metrics on each paper</div>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <div className="w-full max-w-4xl mx-auto bg-white border border-black rounded-lg overflow-hidden">
              <div className="text-2xl font-bold text-black mb-6 text-center pt-6">Summary</div>
              <div className="text-base text-black text-left bg-white bg-opacity-80 p-6 rounded-lg">
                <h2 className="text-2xl text-black font-semibold mb-4 text-center italic">&quot; Remember, paper stacks are for researchers &quot;</h2>
                <p>
                  Academic research publishing is dominated by a few major houses forming a non-collusive oligopoly. These players extract undue funds from the ecosystem by charging authors to publish (APCs) or placing research behind paywalls&mdash;both of which create friction, limit access, and hinder progress. To protect their reputational moat, they sustain an outdated, inefficient system that is slow and undermines scientific discourse. With the research community eager for change, and technological and cultural shifts underway, the moment is ripe to disrupt legacy publishing and correct its market failure.<br /><br />
                  <strong>PaperStacks</strong> introduces a new model built on market dynamics and aligned incentives, replacing editorial control and restoring agency to reviewers and authors. This system is efficient enough to eliminate the need for APCs and paywalls. It runs on a self-contained token economy where users earn tokens by reviewing and spend them to publish. A personalized feed suggests papers seeking review based on users&apos; expertise. Reviewers choose what and when to review, easing reviewer recruitment and increasing meaningful engagement. During peer review, incentives favor quality over quantity, encouraging thoughtful, high-value feedback. Each peer review culminates in a transparent assessment of novelty, evidence strength, and the full review history of the paper. Once users have earned enough tokens, they can fund peer review for their own work&mdash;customizing parameters such as anonymity, reviewer count, and review rounds.<br /><br />
                  Rather than relying on editors to triage submissions, <strong>PaperStacks</strong> lets the community decide what gets reviewed through open markets. Peer review is guided by incentives and competition, not editorial mandates. The traditional accept/reject signal tied to journal prestige is replaced by multidimensional evaluations, enabling readers to assess a paper&apos;s merit directly. On <strong>PaperStacks</strong>, editorial oversight is minimal and focused on dispute resolution. Editors are elevated users rewarded with tokens and privileges, not institutional gatekeepers. Unlike legacy publishers that sylo research into journals with bloated overhead, <strong>PaperStacks</strong> scales naturally across disciplines. Its personalized feed and user-defined review settings offer flexibility, allowing each field to apply its standards without the platform enforcing uniformity.<br /><br />
                  Initial funding will be raised through token sales to universities and research institutions, which will also help seed the token economy. A freemium model will allow long-term sustainability, offering optional premium features and visibility, while publishing and reviewing remain free.<br /><br />
                  <span className="block text-right font-semibold text-black mb-4 ">- Rodrigo Rosas-Bertolini</span>
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className="py-4 px-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} PaperStacks. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
