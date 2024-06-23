"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-4">
        <li>Java</li>
        <li>C++/C</li>
        <li>C#</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>SQL</li>
        <li>HTML/CSS</li>
      </ul>
    ),
  },
  {
    title: "Technologies",
    id: "technologies",
    content: (
      <ul className="list-disc pl-4">
        <li>AWS</li>
        <li>Figma</li>
        <li>GitHub</li>
        <li>WebRTC</li>
        <li>AgoraRTM</li>
      </ul>
    ),
  },
  {
    title: "Frameworks/Libraries",
    id: "frameworks/libraries",
    content: (
      <ul className="list-disc pl-4">
        <li>React.js</li>
        <li>Next.js</li>
        <li>Vue.js</li>
        <li>JQuery</li>
        <li>Java Database Connectivity (JDBC)</li>
        <li>Javalin (Java web framework)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4">
        <li>Kennesaw State University</li>
        <li>Bachelors of Science in Computer Science</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/q.png" width={500} height={500} alt="icon" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE]">I am a full-stack developer with a strong foundation in both front-end and back-end development.
             My experience includes 3 years focused on front-end development, but my skillset spans across various technologies including Java, 
            C++, Python, Javascript, SQL, and cloud platforms like AWS. I&apos;m also well-versed in design tools (Figma) and possess experience 
            with version control (Git) and real-time communication technologies (WebRTC, AgoraRTM). 
            This range of expertise allows me to effectively contribute to all stages of the development lifecycle.
          </p>
          <div className="flex flex-row flex-wrap justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("technologies")}
              active={tab === "technologies"}
            >
              {" "}
              Technologies{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frameworks/libraries")}
              active={tab === "frameworks/libraries"}
            >
              {" "}
              Frameworks/Libraries{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-2">
          {TAB_DATA.find((t) => t.id === tab)?.content ?? "No content found"}          
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;