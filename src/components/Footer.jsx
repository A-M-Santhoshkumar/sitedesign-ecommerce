import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom';
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Collection', path: '/collection' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
 
];

const Footer = (props) => {
  return (
    <div>
      <div className='flex flex-col sm:grid sm:grid-cols-3 gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} alt="Logo" className='mb-5 w-60' />
          <p>Crafting Websites with Heart and Code.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-500'>
          

              {navItems.map((item, index) => (
                <NavLink 
                  key={index}
                  to={item.path}
                  className={({ isActive }) => 
                    `flex flex-col  gap-1 ${isActive ? 'text-black' : 'text-gray-700'}`
                  }
                >
                  <p>{item.name}</p>
                  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
                </NavLink>
              ))}
          
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Get In Touch</p>
          <ul className='flex flex-col gap-2 text-gray-500'>
            <li>Address: Tamil Nadu, India</li>
            <li>Phone: +91 96291 40160</li>
            <li>Email: amsanthoshkumar2@gmail.com</li>
          </ul>
        </div>
        <hr />
        <p className='py-5 text-center text-sm'>
  Copyright &copy; {new Date().getFullYear()} <a href="https://sitedesign.in/" target='_black'><spam >sitedesign</spam></a>. All rights reserved
</p>

      </div>
    </div>
  )
}

export default Footer
