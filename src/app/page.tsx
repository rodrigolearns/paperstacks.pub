import { FaRegNewspaper, FaRegEye } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { LuWallet, LuPencilLine } from "react-icons/lu";
import Image from "next/image";
import Head from "next/head";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import React from "react";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import 'github-markdown-css/github-markdown.css';

export default async function HomePage() {
  // Read the summary markdown file
  const summaryPath = path.join(process.cwd(), "SUMMARY.md");
  const summary = fs.readFileSync(summaryPath, "utf8");
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
              The research publishing platform that replaces editorial gatekeeping <br/>with a free market where <b>we the researchers</b> choose <br/>how our work is shared and peer reviewed
            </div>
            <div className="max-w-4xl mx-auto mb-6 p-6 bg-yellow-50 border-2 border-yellow-400 rounded-lg flex flex-col items-center justify-center gap-2">
              <div className="text-2xl font-bold text-orange-600 text-center mb-2">Seeking co-founders!</div>
              <div className="flex flex-col sm:flex-row items-center gap-2 text-lg text-black justify-center w-full">
                <span>Contact me on</span>
                <a href="https://www.linkedin.com/in/rodrigo-rosas-bertolini-6a0743111" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-black hover:text-blue-700">
                  <FaLinkedin className="w-6 h-6 text-blue-700" />
                  <span className="underline">LinkedIn</span>
                </a>
                <span>or</span>
                <span className="flex items-center gap-1 break-all">
                  <SiGmail className="w-6 h-6 text-red-600" />
                  <span className="underline break-all">rodrigo.rosas3@gmail.com</span>
                </span>
              </div>
            </div>
          </div>
          <section className="mb-12">
            <div className="w-full max-w-4xl mx-auto bg-white border border-black rounded-lg overflow-hidden">
              <div className="flex flex-row items-center text-center px-4 pt-6 pb-2 font-bold text-2xl text-black">
                <div className="flex-1 what_we_think_column">What we think</div>
                <div className="w-16 svg_column"></div>
                <div className="flex-1 what_we_do_column">What we do</div>
              </div>
              {/* Rows */}
              {/* 1 */}
              <div className="flex flex-row items-center text-center px-4 py-6 gap-8">
                <div className="flex-1 text-base text-black what_we_think_column mr-4">Reviewing is hard work and it should be rewarded</div>
                <div className="mx-4 flex-shrink-0 svg_column"><LuWallet className="h-8 w-8 text-purple-600" /></div>
                <div className="flex-1 text-base text-black what_we_do_column ml-4">So we reward reviewers in tokens</div>
              </div>
              {/* 2 (Peer review should be transparent) */}
              <div className="flex flex-row items-center text-center px-4 py-6 gap-8">
                <div className="flex-1 text-base text-black what_we_think_column mr-4">Peer review should be transparent</div>
                <div className="mx-4 flex-shrink-0 svg_column"><FaRegEye className="h-8 w-8 text-blue-600" /></div>
                <div className="flex-1 text-base text-black what_we_do_column ml-4">So we showcase reviews and reviewers&apos; metrics on each paper</div>
              </div>
              {/* 3 (Editors should not gatekeep science) */}
              <div className="flex flex-row items-center text-center px-4 py-6 gap-8">
                <div className="flex-1 text-base text-black what_we_think_column mr-4">Editors should not gatekeep science</div>
                <div className="mx-4 flex-shrink-0 svg_column"><FaRegHandshake className="h-10 w-10 text-yellow-600" /></div>
                <div className="flex-1 text-base text-black what_we_do_column ml-4">So editors don&apos;t manage the peer review process, researchers do</div>
              </div>
              {/* 4 */}
              <div className="flex flex-row items-center text-center px-4 py-6 gap-8">
                <div className="flex-1 text-base text-black what_we_think_column mr-4">Publishing a peer-reviewed paper should be free</div>
                <div className="mx-4 flex-shrink-0 svg_column"><LuPencilLine className="h-8 w-8 text-green-600" /></div>
                <div className="flex-1 text-base text-black what_we_do_column ml-4">So you can spend tokens to hire peer reviews</div>
              </div>
              {/* 5 (from what we don't do) */}
              <div className="flex flex-row items-center text-center px-4 py-6 gap-8">
                <div className="flex-1 text-base text-black what_we_think_column mr-4">Scientific knowledge should be free</div>
                <div className="mx-4 flex-shrink-0 svg_column"><FaRegNewspaper className="h-8 w-8 text-[#EB406D]" /></div>
                <div className="flex-1 text-base text-black what_we_do_column ml-4">So we make it free.<br/> 𝒻 paywalls</div>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <div className="w-full max-w-4xl mx-auto bg-white border border-black rounded-lg overflow-hidden">
              <div className="text-base text-black text-left bg-white bg-opacity-80 p-6 rounded-lg">
                <div
                  className="markdown-body"
                  style={{
                    background: 'white',
                    borderRadius: '0.5rem',
                    padding: '1.5rem',
                    color: 'black'
                  }}
                >
                  <ReactMarkdown>{summary}</ReactMarkdown>
                </div>
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
