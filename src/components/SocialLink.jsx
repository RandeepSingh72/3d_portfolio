import React from 'react'
import { socialLinks } from '../constants';
import { Link } from 'react-router-dom';

const SocialLink = () => {
  return (
    <footer className='cta'>
      <h2 className='cta-text'>Social Links</h2>
      <div className='mt-10 flex flex-row justify-center gap-5'>
        {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank' rel='noopener noreferrer' className='flex flex-col gap-2 justify-center items-center w-full h-full cursor-pointer'>
                <img src={link.iconUrl} alt="icon" className='w-10 h-10 object-contain' />
                <p className='text-center'>{link.name}</p>
            </Link>
        ))}
      </div>
    </footer>
  )
}

export default SocialLink