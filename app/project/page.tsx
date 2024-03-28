"use client";
import { useState, useEffect } from "react";
import MyProject from "./components/project";
import axios from "axios";
import myLogo from "../../public/MyLOGO.jpg";
import Image from "next/image";
import "./page.css";

export default function Project() {
  const [projectData, setProjectData] = useState({
    projectTitles: [] as string[],
    descriptions: [] as string[],
  });

  const [languagesData, setLanguagesData] = useState(
    {} as {
      [key: string]: string[];
    }
  ); // State to store languages data

  useEffect(() => {
    fetch("https://api.github.com/users/Aung-myat-min/repos")
      .then(async (response) => {
        const data = await response.json();
        const projectTitles = data.map((repo: any) => repo.name);
        const descriptions = data.map((repo: any) => repo.description);

        setProjectData({ projectTitles, descriptions });

        // Fetch languages for each repository
        const fetchLanguagesPromises = projectTitles.map(
          (projectTitle: string) =>
            axios.get(
              `https://api.github.com/repos/Aung-myat-min/${projectTitle}/languages`
            )
        );

        Promise.all(fetchLanguagesPromises)
          .then((languagesResponses) => {
            const languagesData: { [key: string]: string[] } = {};
            languagesResponses.forEach((languagesResponse, index) => {
              const projectTitle = projectTitles[index];
              const languages = Object.keys(languagesResponse.data);
              languagesData[projectTitle] = languages;
            });
            setLanguagesData(languagesData);
          })
          .catch((error) => {
            console.error("Error fetching languages:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
      });
  }, []);

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
            className="bg-gray-100 w-fit px-3 h-10 items-center flex rounded-xl text-sm mt-3 hover:bg-black hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </div>
      <div
        className="border rounded-xl overflow-auto"
        style={{ width: "48%", height: "84vh" }}
      >
        <h1 className="text-center mt-3 font-bold text-3xl">My Projects</h1>
        {projectData.projectTitles.map((projectTitle, index) => (
          <MyProject
            languages={languagesData[projectTitle] || []} // Use languages from state
            projecttitle={projectTitle}
            description={projectData.descriptions[index]}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
