"use client";

import React from "react";
import Image from "next/image";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/infinite_moving_cards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center leading-snug">
        Kind words from
        <span className="text-purple-500"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
                <Image
                  src={company.img}
                  alt={company.name}
                  width={40}
                  height={40}
                  className="md:w-10 w-5"
                />
               
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={40}
                  className="md:w-24 w-20"
                />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;