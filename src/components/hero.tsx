"use client";

import { DotBackgroundDemo } from "./ui/dot_background_demo";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text_generate_effect";
import { MagicButton } from "./ui/border_magic";
import { FaLocationArrow } from "react-icons/fa6";

export const Hero = () => {
  return (
    <div className="pb-20 pt-36 min-h-screen" id="home">
        {/* Dotted background */}
        <DotBackgroundDemo />
    
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight className="top-125 left-150 h-[80vh] w-[70vw]" fill="indigo" />
        <Spotlight className="top-108 left-40 h-[80vh] w-[90vw]" fill="red" />
    
        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs text-center text-white ">
                    Hello, I am
                </h2>

                <TextGenerateEffect
                    className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mt-2"
                    words="Web & mobile products, from API to app"
                    filter={false}>
                </TextGenerateEffect>

                <p className="text-center text-sm md:tracking-wider lg:text-lg text-gray-300 my-4">
                    Hi, I&apos;m Lennox, a full-stack engineer based in Nairobi. I build web and mobile products end to end: Next.js and Flutter front ends, NestJS and Django backends, and the payment integrations Kenyan businesses need, including M-Pesa, Pesapal, Paystack and Flutterwave. Recent work includes an EV battery-swapping platform and a referral network for Rotarians.
                    <br />
                </p>
                <a href="/projects" title="Show me more about my portfolio">
                    <MagicButton
                    title="Show me more"
                    icon={<FaLocationArrow/>}
                    position="left"
                    handleClick={() => console.log("Button clicked")}
                    otherProps={{}}
                    otherClasses=""
                    >
                    </MagicButton>
                </a>

            </div>

        </div>
    </div>
    
  );
}