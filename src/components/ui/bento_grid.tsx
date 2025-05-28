"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./grid_globe";
import { techStack } from "@/data";
import { AnimatedSlide } from "./animated_slide";
import { MagicButton } from "./border_magic";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "@/data/confetti.json";

import dynamic from 'next/dynamic'

// Dynamically import the Lottie component
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  spareImg,
  titleClassName,
  imgClassName,
  hasGradient

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  spareImg?: string;
  titleClassName?: string;
  imgClassName?: string;
  hasGradient?: boolean;

}) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('lennoxmathew@gmail.com');
        setCopied(true)
    }
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-white/[0.1] bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none overflow-hidden relative",
        className
      )}
      style={{
        background: hasGradient
            ? "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)"
            : undefined,
        }}

    >
      {img && (
        <div className="absolute inset-0 z-0">
          <Image
            src={img}
            alt="main-img"
            fill
            className={cn(
              "w-full h-full object-cover object-center opacity-60",
              imgClassName
            )}
            sizes="100vw"
            priority
          />
      {/* Optional overlay/spare image */}
      {spareImg && (
        <div className="absolute bottom-0 right-0 z-10 w-full">
          <Image
            src={spareImg}
            alt="spare-img"
            width={800}
            height={200}
            className="w-full h-auto object-cover object-center opacity-70"
            sizes="100vw"
            priority={false}
          />
        </div>
      )}
        </div>
      )}
      {id === 6 && (
  <BackgroundGradientAnimation>
    <div className="flex flex-col items-center justify-center h-screen gap-4 px-5">
      <div className="relative w-full flex justify-center items-center">
        {/* Lottie background animation */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Lottie
            animationData={animationData}
            loop={copied}
            autoplay={copied}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice',
            }}
            className="w-full h-full"
          />
        </div>

        {/* Button in front */}
{/* <div className="absolute lg:-bottom-50 w-full flex justify-end md:left-4 pr-4 md:pr-0 z-10">
  <MagicButton
    title={copied ? 'Email copied' : 'Copy my email'}
    icon={<IoCopyOutline />}
    position="left"
    otherClasses="!bg-[#161a31]"
    handleClick={handleCopy}
  />
</div> */}

      </div>
    </div>
  </BackgroundGradientAnimation>
)}

        {
            id === 2 && <GlobeDemo />
        }

        {id === 3 && (
            <div className="w-fit md:w-[30%] flex gap-4 lg:gap-5 absolute right-2 lg:right-2">
                <AnimatedSlide direction="up" items={techStack} prefix="top" />
                <AnimatedSlide direction="down" items={techStack} prefix="bottom" />
            </div>
            
        )}


      <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
        <div className="font-sans font-extralight text-[-#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div
            className={cn(
              "mt-2 mb-2 font-sans font-bold text-neutral-100 dark:text-neutral-100 lg:text-3xl max-w-96 z-10",
              titleClassName
            )}
          >
            {title}
          </div>

      </div>

      {/* Foreground content */}
      <div className="relative z-20">
        {header}
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          {icon}
        </div>
      </div>
    </div>
  );
};
