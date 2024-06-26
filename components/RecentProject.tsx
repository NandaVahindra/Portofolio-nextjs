import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'

const RecentProject = () => {
  return (
    <div className='py-20 pb-10' id='projects'>
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>recent <a href='https://github.com/NandaVahindra' target='_blank'>projects</a></span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 mt-10'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                            <div className='realitve w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                            </div>
                            <Image
                            src={img}
                            alt={title}
                            className='z-10 absolute bottom-0'
                            width={720}
                            height={400}
                            />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>

                        <div className='flex items-center justify-center mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border bg-black border-purple/[0.2] rounded-full lg:w-10 lg:h-10 w-10 h-10 flex justify-center items-center' 
                                    style={{transform:`translateX(-${5 * index * 2}px`}}>
                                        <Image src={icon} alt={icon} className='p-2' height={50} width={50}/>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProject