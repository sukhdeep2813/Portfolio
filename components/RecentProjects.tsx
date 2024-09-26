import React from 'react'
import { projects } from '../../data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-10 '>
          <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
          </h1>
            <div className='flex flex-wrap  items-center justify-center p-4 w-[90vw] '>
               {projects.map(({id, title, des, img, iconLists,link}) => (
                <div key={id} className=' flex sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]   items-center justify-center sm:w-[570px] w-[80vw] mt-20'>
                    <PinContainer title={link} href={link}>
                      <div className="relative sm:w-96 w-[80vw] overflow-hidden sm:h-[40vh] h-[40vh]  mb-10">
                        <div className='relative w-full h-full  lg:rounded-3xl md:rounded-4xl bg-[#13162d] rounded-xl'>
                          <img
                           src="/bg.png"
                           alt='bg-img'
                          />
                        </div>
                        <div>
                          <img 
                          src={img}
                          alt={title}
                          className='z-10 absolute bottom-0'
                          />
                        </div>
                       
                      </div>
                      <h1 className='font-bold lg:text-xl lg:font-normal md:text-xl text-base line-clamp-1'>{title}</h1>
                      <p className='lg:text-xl text-sm line-clamp-2'>{des}</p>

                      <div className='flex items-center justify-between mt-7 mb-3'>
                        <div className='flex items-center'>
                          {iconLists.map((icon,index) =>(
                            <div key={icon} className='h-8 w-8 border border-white/[0.2] rounded-full lg:h-10 lg-w-10 items-center justify-center '
                            style={{transform: `translateX(-${5*index*2}px)`}}
                            >
                              <img src={icon} className='p-2'/>
                            </div>
                          ))}
                        </div>
                        
                        <div className='flex justify-center'>
                          <p className='flex lg:text-xl md:text-xs text-sm'>Check Live Site</p>
                          <FaLocationArrow className ="ms-3 h-4 w-4" color='#CBACF9'/>
                        </div>
                      </div>
                    </PinContainer>
                </div>
               )

               )}
            </div>
      
       
    </div>

  )
}

export default RecentProjects