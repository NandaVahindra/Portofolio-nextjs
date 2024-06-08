import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='pb-15'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className='flex justify-between my-20 z-10 w-full max-w-screen-xl mx-auto'>
                <div className='max-w-[60vw] flex flex-col items-start justify-center'>
                    <h2 className='uppercase tracking-widest text-base text-center text-blue-100 max-w-80'></h2>
                    <TextGenerateEffect
                        className='text-left text-[40px] md:text-5xl lg:text-6xl'
                        words='Hello, I&apos;m Made Nanda Wija Vahindra'
                        />
                    <p className='text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        An informatics undergraduate passionate about programming, cloud computing, and web development
                    </p>
                    <a href="#about">
                        <MagicButton 
                            title="Explore my journey!"
                            icon=''
                            position='right'
                            />
                    </a>
                </div>
                <div className='max-w-[30vw] flex justify-end'>
                    <Image src="/horrr.png" alt="Your Image" className="rounded-3xl object-cover" height={800} width={800}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
