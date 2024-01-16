import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import "./app.css";
import profilePic from "./images/pf.jpg";

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
        <section>
          <h1>My Projects</h1>
          <div className="highlight rounded-lg">
            <h2 className="rounded-lg">HTML</h2>
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
          </section>
          <section className="resume">
            <h1>Resume</h1>
          </section>
        </div>
      </div>
    </main>
  );
}
