import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./app.css";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AMMtheCoder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " py-3 px-24"}>
        <nav className="w-full bg-white p-4 flex justify-between px-8 rounded-lg border-gray-600 border">
          <h1 className="text-2xl font-bold">AMMtheCoder</h1>
          <div className="flex space-x-7 h-full text-2xl">
            <a href="/home" className="hover:text-gray-400">
              Home
            </a>
            <a href="/project" className="hover:text-gray-400">
              Projects
            </a>
            <a href="resume" className="hover:text-gray-400">
              Resume
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Aung-myat-min"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon
                className="leftNavIcons rounded-lg"
                icon={faGithub}
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/aung-myat-min-13higk/"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon
                className="leftNavIcons rounded-lg"
                icon={faLinkedinIn}
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://twitter.com/AMMtheCoder"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon
                className="leftNavIcons rounded-lg"
                icon={faTwitter}
              ></FontAwesomeIcon>
            </a>
          </div>
        </nav>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
