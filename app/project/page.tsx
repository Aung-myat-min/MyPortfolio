"use client";
import { useState, useEffect, Suspense } from "react";
import MyProject from "./components/project";
import myLogo from "../../public/MyLOGO.jpg";
import Image from "next/image";
import "./page.css";
import ErrorBoundary from "./components/ErorBountry";

export default function Project() {
  const [projectData, setProjectData] = useState({
    projectTitles: [] as string[],
    descriptions: [] as string[],
  });

  const [languagesData, setLanguagesData] = useState(
    {} as {
      [key: string]: string[];
    }
  );

  const [loading, setLoading] = useState(true); // Track loading state

  const fetchData = async () => {
    try {
      const res = await fetch("/api/project");
      const data = await res.json();
      const projectTitles = data.repositories;
      const descriptions = data.descriptions;
      const languagesData: { [key: string]: string[] } = data.languages;
      setProjectData({ projectTitles, descriptions });
      setLanguagesData(languagesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading state to false when data fetching completes
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full text-center text-6xl flex items-center justify-center">
        Loading...
      </div>
    ); // Display loading indicator
  }

  return (
    <div className="flex justify-between" style={{ margin: "22px 0" }}>
      <div
        className="border rounded-xl"
        style={{ width: "48%", height: "84vh" }}
      >
        <Image
          src={myLogo}
          alt="My logo"
          width={200}
          height={200}
          id="myLogo"
        />
        <div style={{ margin: "5% 0 0 5%" }}>
          <p className="text-4xl font-bold leading-tight">
            Over the past few years, I&apos;ve <br />
            worked on various projects. <br />
            Here&apos;s a few of my best:
          </p>
          <a
            href="mailto:koaungmyatmin0@gmail.com"
            className="bg-gray-100 w-fit px-3 h-10 items-center flex rounded-xl text-sm mt-3 hover:bg-black hover:text-white dark:text-black dark:hover:text-white dark:hover:border-white dark:hover:border-2"
          >
            Get in touch
          </a>
        </div>
      </div>
      <div
        className="border rounded-xl overflow-auto no-scrollbar"
        style={{ width: "48%", height: "84vh" }}
      >
        <h1 className="text-center mt-3 font-bold text-3xl">My Projects</h1>
        <ErrorBoundary>
          <Suspense fallback="loading...">
            {projectData.projectTitles.map((projectTitle, index) => (
              <MyProject
                languages={languagesData[projectTitle] || []} // Use languages from state
                projecttitle={projectTitle}
                description={projectData.descriptions[index]}
                key={index}
              />
            ))}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
