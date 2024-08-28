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
        <li>Python</li>
        <li>R</li>
        <li>SQL</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
      </ul>
    ),
  },
  {
    title: "Technologies",
    id: "technologies",
    content: (
      <ul className="list-disc pl-4">
        <li>SQL-Toad/SSMS</li>
        <li>AWS</li>
        <li>MS Office</li>
        <li>Tableau</li>
        <li>Github</li>
        <li>JIRA/GitLab</li>
      </ul>
    ),
  },
  {
    title: "Business",
    id: "business",
    content: (
      <ul className="list-disc pl-4">
        <li>Business Process Analysis & Design</li>
        <li>Requirement Gathering</li>
        <li>Use Case Modeling</li>
        <li>Product Management</li>
      </ul>
    ),
  },
  {
    title: "Frameworks/Libraries",
    id: "frameworks/libraries",
    content: (
      <ul className="list-disc pl-4">
        <li>Agile</li>
        <li>Waterfall</li>
        <li>Pandas</li>
        <li>NumPy</li>
        <li>Java Database Connectivity (JDBC)</li>
        <li>React.js</li>
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
          <p className="text-base lg:text-lg text-[#ADB7BE]">As a skilled data analyst with a proven track record, I have successfully leveraged my expertise in SQL, Python, 
            and Tableau to drive data-driven decision-making. My ability to extract, clean, and analyze complex datasets has enabled me to uncover valuable insights and optimize 
            business processes. Through my experience in Agile methodologies and regulatory compliance, I have demonstrated a strong understanding of the entire project lifecycle, 
            from product conception to Go Live. My proficiency in data visualization allows me to effectively communicate complex findings to both technical and non-technical stakeholders, 
            empowering them to make informed decisions.
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