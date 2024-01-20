import React from "react";
import SkillBandages from "@/app/home/components/SkillBandages";
import "../page.css";

export default function MyProject(props: {
  languages: string[];
  projecttitle: string;
  description: string;
}) {
  return (
    <section
      className={` rounded-xl flex flex-col justify-around p-5`}
      // style={{ backgroundColor: "randomBgColor" }}
      id="project"
    >
      <div id="glitchContainer">
        <h1 className="glitch" data-text={props.projecttitle}>
          {props.projecttitle}
        </h1>
      </div>
      <p>{props.description}</p>
      <div className="flex">
        {/* take in lists of languages and parse them into SkillBandages components */}
        {props.languages.map((language, index) => (
          <SkillBandages language={language} key={index} />
        ))}
        {/* take in lists of languages and parse them into SkillBandages components */}
      </div>
      <a
        href={"https://github.com/Aung-myat-min/" + props.projecttitle}
        className="bg-black text-white w-fit px-3 h-10 items-center flex rounded-xl text-sm mt-3 hover:bg-gray-400"
      >
        Get in touch
      </a>
    </section>
  );
}
