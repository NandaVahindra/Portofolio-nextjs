"use client"

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
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
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('nandavahindra@gmail.com');
    setCopied(true)
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 boarder boarder-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(72,51,93,1) 61%, rgba(91,92,92,1) 100%)',
      }}
    >
      <div className={`${id===6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover, object-center')}
              width={900}
              height={900}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'} `}>
          {spareImg && (
            <Image
            src={spareImg}
            alt={spareImg}
            className={'object-cover, object-center w-full h-full'}
            width={900}
            height={900}
          />
          )}
        </div>
          {id === 6 && (
            <BackgroundGradientAnimation>
            </BackgroundGradientAnimation>
          ) }

          <div className={cn(
            titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 realtive md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}>
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
              {title}
            </div>

          {id === 2 && <GlobeDemo /> }
          {id === 3 && (
            <div className="flex gap-2 lg:gap-5 w-fit absolute -right-3 lg:-right-0">
              <div className="flex flex-col gap-3 lg:gap-4 pt-8 lg:pt-12">
                {['React.js', 'Next.js', 'TypeScript'].map
                ((item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-100 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E] opacity-50"/>
              </div>
              <div className="flex flex-col gap-3 lg:gap-4 pt-0 lg:pt-6">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E] opacity-50"/>
                {['Node.js', 'GCP', 'SQL'].map
                ((item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-100 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings:{
                    preserveAspectRatio: 'xMidYMid slice',
                  }
                }} />
              </div>
                <MagicButton 
                  title={copied? 'Email copied' : 'Copy my email'}icon={<IoCopyOutline/>}
                  position='left'
                  handleClick={handleCopy}
                /> 
            </div>
          )}
        </div>
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
      </div>
    </div>
  );
};
