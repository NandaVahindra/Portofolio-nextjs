import React from 'react'
import MagicButton from './ui/MagicButton'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div className='w-full absolute left-0 bottom-0 overflow-hidden'>
            <Image
                src="/footer-grid.svg"
                alt="grid"
                className='w-full h-auto max-h-full opacity-40'
                width={800}
                height={800}
            />
        </div>

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Leverage <span className='text-purple'>technology</span> to drive <span className='text-purple'>innovation</span> and shape the <span className='text-purple'>future</span>
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Let&apos;s work together and bring your ideas to life!</p>
            <a href="mailto:nandavahindra@gmail.com">
                <MagicButton
                    title='Reach out to me'
                    icon=''
                    position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light mb-5'>Copyright © 2024 Nandavahindra</p>
            <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile) => (
                <a key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300' href={profile.link} target="_blank">
                   <Image src={profile.img} alt='profile' width={25} height={25}/> 
                </a>
            ))}
        </div>
        </div>

    </footer>
  )
}

export default Footer