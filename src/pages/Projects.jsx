import React from 'react';
import { projects } from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';
import SocialLink from '../components/SocialLink';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span></h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Welcome to my Projects page, where innovation meets execution. Below, you'll find a curated collection of my endeavors in the realm of technology and development. Each project reflects not only my technical proficiency but also my passion for creating impactful solutions. Explore the diverse range of projects that I have undertaken, each presenting a unique set of challenges and opportunities for creativity.</p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={project.iconUrl} alt="Project icon" className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {project.description}
              </p>
              <div className='flex justify-between left-2 right-2 mt-5'>
                <div className='ml-2 flex justify-center items-center gap-2 font-poppins'>
                <Link to={project.liveLink} target='_blank' rel='noopener noreferrer' className='font-semibold text-blue-600'>
                Live Link
                </Link>
                <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
                </div>
                <div className='mr-10 flex justify-center items-center gap-2 font-poppins'>
                <Link to={project.link} target='_blank' rel='noopener noreferrer' className='font-semibold text-blue-600'>
                View Code
                </Link>
                <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />
      <CTA/>
      <hr className='border-slate-200 mt-5' />
      <SocialLink/>
    </section>
  )
}

export default Projects