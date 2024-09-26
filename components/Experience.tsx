import React from 'react'
import { workExperience } from '../../data'
import { Button } from './ui/MovingBorder'

const Experience = () => {
  return (
    <div className='py-10  ' id='testimonials'>
        <h1 className='heading'>
        My Work  {" "}
        <span className='text-purple'>Experience</span>
        </h1>
    

    <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperience.map(({id,title, desc,className, thumbnail}) =>(
            <Button key={id}
            duration={Math.floor(Math.random()*10000 +10000)}
            borderRadius='1.75rem'
            className=' text-white border-neutral-200 dark:border-slate-800'
            > 
              <div className='flex lg:flex-grow flex-col lg:items-center p-3 py-6 lg:p-10 gap-2'>
                <img className='w-16 md:w-20 lg:w-32'
                src={thumbnail}

                />
                <div className='lg:ms-5'>
                    <h1 className='text-start font-bold text-xl md:text-2xl'>{title}</h1>
                    <p className='text-start    font-semibold mt-3 text-white-100'>{desc}</p>
                </div>
              </div>
            </Button>
        ))}
    </div>
   </div>
  )
}

export default Experience