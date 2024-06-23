"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "This interactive portfolio website showcases my skills in modern web development. Built with Next.js for efficient server-side rendering and Tailwind CSS for rapid, utility-first styling, it demonstrates my ability to create performant and visually appealing user experiences.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hkhan0001/my-portfolio-v2",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "RTM Chat Application",
    description: "I created a real-time communication application using JavaScript, Bootstrap, and AgoraRTM. This project allowed users to connect directly through their web browsers for voice or video chat. I utilized JavaScript for interactivity, Bootstrap for a user-friendly interface, and AgoraRTM for establishing real-time connections, simulating a web-based communication platform.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hkhan0001/RTMChat",
    previewUrl: "/RTMChat/lobby.html",
  },
  {
    id: 3,
    title: "Medieval Chess Game",
    description: "For my senior project, I developed a variant of chess inspired by medieval rules. This Unity-based game featured an AI opponent powered by a MinMax algorithm I modified to handle the game's unique chance-based mechanics. This project honed my skills in Unity game development, C# scripting, and AI development.",
    image: "/images/projects/3.png",
    tag: ["All", "Unity"],
    gitUrl: "https://github.com/logam555/Capstone-Chess",
    previewUrl: "https://www.youtube.com/watch?v=C5E2GV40ef4",
  },
  {
    id: 4,
    title: "Simple Language Interpreter",
    description: "Developed a Julia interpreter in C++. This interpreter parses, compiles, and executes code written in a minimal Julia dialect (.jl files). It allows users to run basic Julia scripts directly within the interpreter, offering a lightweight solution for those interested in exploring a subset of the Julia language.",
    image: "/images/projects/4.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/hkhan0001/Minimal_Interpreter",
    previewUrl: "https://github.com/hkhan0001/Minimal_Interpreter",
  },
  {
    id: 5,
    title: "Flight Tracker Application",
    description: "Built a flight tracking application with Java and Javalin. This project explored utilizing JDBC to connect to a simulated flight database. Users could search for flights by departure, arrival, or ID, mimicking a real-world flight tracking experience. This project honed my skills in Java, web development frameworks, and database interaction.",
    image: "/images/projects/5.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/hkhan0001/hkhan0001-FlightTracker",
    previewUrl: "https://github.com/hkhan0001/hkhan0001-FlightTracker",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Unity"
          isSelected={tag === "Unity"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <div className="flex flex-col items-center">
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
              />
            </div>
            <div className="flex justify-left mt-4">
                <a href={project.gitUrl} target="_blank" rel="noreferrer">
                  <button className="py-2 px-4 rounded-full mr-2 bg-[#0000FF] hover:bg-[#0000ffbd] text-white">
                    GitHub
                  </button>
                </a>
                <a href={project.previewUrl} target="_blank" rel="noreferrer">
                  <button className="py-2 px-4 rounded-full  bg-[#303877] hover:bg-[#101748] text-white">
                    Preview
                  </button>
                </a>
              </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;