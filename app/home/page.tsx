import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import "../app.css";
import profilePic from "../images/pf.jpg";
import SkillBandages from "./components/SkillBandages";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="aboutMe">
        <Image src={profilePic} alt="This is my photo" className="myPhoto" />
        <div className="aboutMeText">
          <h1>About Me</h1>
          <p>
            &quot;Greetings! I&apos;m a backend sorcerer fluent in the languages
            of Node.js and Python, architecting digital realms with lines of
            code. My passion lies in crafting robust systems and optimizing the
            unseen gears that power applications. Beyond the command line,
            I&apos;ve donned the hat of a project manager, orchestrating
            successful ventures through the realms of technology. Let&apos;s
            build seamless experiences and conquer new horizons together!&quot;
          </p>
        </div>
      </section>
      <div className="mySkills">
        <section className="dark:bg-gray-800">
          <h1>My Projects</h1>
          <div className="highlight rounded-lg">
            <h2 className="rounded-lg">HTML, CSS</h2>
            <h3>Are you hungry?</h3>
            <p>
              This is a simple website built with HTML and CSS. And it is very
              cool and fasinating resturant website.
            </p>
            <a
              href="https://aung-myat-min.github.io/MayHninSi/"
              className="rounded-full"
            >
              <FontAwesomeIcon icon={faMousePointer}></FontAwesomeIcon>
            </a>
          </div>
        </section>
        <div className="subMySkills">
          <section className="skills">
            <h1>Skills</h1>
            <div className="flex flex-wrap">
              <SkillBandages language="React" />
              <SkillBandages language="HTML" />
              <SkillBandages language="CSS" />
              <SkillBandages language="JavaScript" />
              <SkillBandages language="Python" />
              <SkillBandages language="Java" />
              <SkillBandages language="MongoDB" />
              <SkillBandages language="NextJS" />
              <SkillBandages language="NodeJS" />
              <SkillBandages language="SQL" />
            </div>
          </section>
          <section className="resume flex justify-around items-center dark:bg-gray-800">
            <h1>Resume</h1>
            <div className="flex w-fit h-16 rounded-xl bg-black  items-center p-5 dark:bg-white">
              <p className="text-white dark:text-black">
                More details about my carrier
              </p>
              <a
                href="#"
                className="ml-5 bg-white px-3 h-10 items-center flex rounded-xl text-sm w-fit dark:bg-black"
              >
                More Over
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
