import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return(
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>portfolio website</h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl">
                    this is test description.
                    </p>
                </div>
            </div>
        </section>
    )
}


export default HeroSection;