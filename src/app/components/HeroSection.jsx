"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return(
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className='text-white mb-4 text-1xl sm:text-2xl lg:text-5xl lg:leading-normal font-extrabold'>
                        Hello, I&apos;m <br></br>
                        <span>
                            <TypeAnimation
                                sequence={[
                                    'Hamza Khan',
                                    1000,
                                    'a Full-Stack Developer',
                                    1000,
                                    'a Polyglot Programmer',
                                    1000,
                                    'an Agile Learner',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{fontSize:'1em', display: "inline-block"}}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Junior developer with strong skills in Java, Python, JavaScript, and 
                        web frameworks (React.js, Next.js). Experienced in building APIs, 
                        databases, and UIs. Proficient in Git and Figma.
                    </p>
                    <div>
                        <a href="mailto:hamza-k18@hotmail.com" className="px-6 py-3 mb-3 w-full sm:w-fit rounded-full mr-4 bg-[#0000FF] hover:bg-[#0000ffbd] text-white">Contact Me</a>
                        <a href="/HamzaResume-1.pdf" download className="px-6 py-3 w-full sm:w-fit rounded-full bg-[#303877] hover:bg-[#101748] text-white">Download CV</a>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image className="bg-[#1A5653] rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                        src='/images/profilePic.png' alt="profile pic" width={300} height={500}/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HeroSection;