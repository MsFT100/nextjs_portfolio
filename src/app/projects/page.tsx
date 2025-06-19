"use client"; // Keep this at the very top

import { PinContainer } from "@/components/ui/3d-pin";
import { DotBackgroundDemo } from "@/components/ui/dot_background_demo";
import { Spotlight } from "@/components/ui/spotlight";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "@/components/ui/moving-border"; // Assuming this is your Button component
import { useRouter } from "next/navigation"; // Import useRouter

const ProjectsPage = () => {
  const router = useRouter(); // Get the router instance

  return (
    <div className="min-h-screen relative bg-black" id="projects">
      <DotBackgroundDemo />

      {/* Spotlight effects */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      <Spotlight className="top-125 left-150 h-[80vh] w-[70vw]" fill="indigo" />
      <Spotlight className="top-108 left-40 h-[80vh] w-[90vw]" fill="red" />

      <div className="py-20 relative z-10">
        {/* Back Button */}
        <div className="flex justify-start px-8 mb-8"> {/* Added padding and margin for positioning */}
          <Button
            borderRadius="1.75rem" // Example from moving-border button
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 px-6 py-4"
            onClick={() => router.back()} // Go back to the previous page in history
          >
            Back
          </Button>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-center leading-snug text-white">
          A small selection of{" "}
          <span className="text-purple-500">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item) => (
            <div
              key={item.id}
              className="lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-center sm:w-96 w-[80vw]"
            >
              <div
                className="cursor-pointer h-full w-full"
                onClick={() => {
                  window.open(item.link, '_blank', 'noopener noreferrer');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.open(item.link, '_blank', 'noopener noreferrer');
                  }
                }}
                tabIndex={0}
                role="link"
                aria-label={`View live site for ${item.title}`}
              >
                <PinContainer>
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    />
                    <Image src={item.img} alt="project cover" fill style={{ objectFit: "cover" }} />
                  </div>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-purple-500">
                    {item.title}
                  </h1>
                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 "
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>
                  <div className="flex items-center justify-between mt-7 mb-3 w-full">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <Image src={icon} alt={`icon-${index}`} width={32} height={32} className="p-2" />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;