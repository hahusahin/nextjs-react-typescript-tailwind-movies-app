import React from 'react'
import {FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='p-4'>
      <div className='flex justify-center gap-8 mb-2'>
        <a className='' href="https://www.github.com/hahusahin" target="_blank" rel="noreferrer">
          <FaGithub size='1.5rem'/>
        </a>
        <a className='' href="https://www.twitter.com/hahusahin" target="_blank" rel="noreferrer">
          <FaTwitter size='1.5rem'/>
        </a>
        <a className='' href="https://www.instagram.com/hahusahin" target="_blank" rel="noreferrer">
          <FaInstagram size='1.5rem'/>
        </a>
      </div>
      <p className='text-center'>{`© Copyright ${new Date().getFullYear()} Huseyin SAHIN`}</p>
    </footer>
  )
}

export default Footer