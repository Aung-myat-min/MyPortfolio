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
import { Providers } from "./ThemeProvider";
import ThemeSwitch from "./ThemeSwitcher";
import { Link, ViewTransitions } from "next-view-transitions";
import Notice from "./project/components/Notice";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AMMtheCoder",
  description: "AMMtheCoder's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <Providers>
          <body className={inter.className + " py-3 px-24 relative"}>
            <nav className="w-full bg-white p-4 flex justify-between px-8 rounded-lg border-gray-600 border dark:bg-gray-800">
              <h1 className="text-2xl font-bold">AMMtheCoder</h1>
              <div className="flex space-x-7 h-full text-2xl">
                <Link href="/home" className="hover:text-gray-400">
                  Home
                </Link>
                <Link href="/project" className="hover:text-gray-400">
                  Projects
                </Link>
                <Link href="resume" className="hover:text-gray-400">
                  Resume
                </Link>
              </div>
              <div className="flex space-x-4 items-center">
                <ThemeSwitch />
                <a
                  target="_blank"
                  href="https://github.com/Aung-myat-min"
                  className="hover:text-gray-400"
                >
                  <FontAwesomeIcon
                    className="leftNavIcons rounded-lg dark:text-gray-950"
                    icon={faGithub}
                  ></FontAwesomeIcon>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/aung-myat-min-13higk/"
                  className="hover:text-gray-400"
                >
                  <FontAwesomeIcon
                    className="leftNavIcons rounded-lg dark:text-gray-950"
                    icon={faLinkedinIn}
                  ></FontAwesomeIcon>
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/AMMtheCoder"
                  className="hover:text-gray-400"
                >
                  <FontAwesomeIcon
                    className="leftNavIcons rounded-lg dark:text-gray-950"
                    icon={faTwitter}
                  ></FontAwesomeIcon>
                </a>
              </div>
            </nav>
            <Analytics />
            {children}
            <Notice />
          </body>
        </Providers>
      </html>
    </ViewTransitions>
  );
}
