"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { projects } from "@/data";
import { PinContainer } from "@/components/ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">

        <h1 className="text-3xl md:text-5xl font-bold text-center leading-snug">
            A small selection of{" "}
            <span className="text-purple-500">recent projects</span>
        </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }} />
                <Image src="/bg.png" alt="bgimg" fill style={{ objectFit: "cover" }} />
              </div>
              <Image
                src={item.img}
                alt="cover"
                width={400}
                height={250}
                className="z-10 absolute bottom-0"
                style={{ objectFit: "contain" }}
              />
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3 w-full">
                <div className="flex flex-wrap items-center gap-1.5 max-w-[62%]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/[.2] rounded-full bg-black px-2.5 py-1 text-[10px] lg:text-xs whitespace-nowrap"
                      style={{ color: "#BEC1DD" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {item.linkLabel}
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;