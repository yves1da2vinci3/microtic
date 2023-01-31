import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button, Text } from '@mantine/core';
import {IoMdArrowDropdown} from 'react-icons/io'
import { NavContext } from '../Context/NavContext';
function NavBar() {
  const [Scroll,setScroll] = useState(false)
  const { Toggle} = useContext(NavContext)
 const NavBarRef = useRef(null)

 const handleScroll = () => {
  setScroll(window.scrollY >  120);
  console.log("sss",window.scrollY >  120)
  console.log(
    "mercon hein!!"
  )
}
 useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return (
    <div ref={NavBarRef} className={`flex h-20  ${Scroll ? "fixed  w-full z-50"  : ""  }  bg-white   shadow-xl items-center justify-between px-8 py-5`}>
    <div className="w-auto"> 
      <div className="flex flex-wrap items-center">
        <div className="w-auto mr-14">
          <Link to="/" >
            <img
              src="https://static.shuffle.dev/uploads/files/de/de01ec5bf4d9796145533f1f5924c22fe5aedfae/LOGO-MICROTIC-03-04-2022.png"
              alt=""
              className="h-14"
            />
          </Link>
        </div>
      </div>
    </div>
    <div className="w-auto hidden lg:block">
      <ul className="flex items-center mr-10">
        <Link className="font-heading mr-9 text-black hover:text-yellow-500 text-lg">
          <a href="#">Accueil</a>
        </Link>
        <li className="font-heading mr-9 text-black hover:text-yellow-500 text-lg">
        <Menu shadow="md" width={200}>
    <Menu.Target>
      <div className='items-center cursor-pointer flex flex-row '>
      <p>Services</p>
          <IoMdArrowDropdown size={20} color="black" />
      </div>
    </Menu.Target>

    <Menu.Dropdown>
      <Menu.Item >
        <Link to="/service/web">
        Creation de Site Web </Link></Menu.Item>
      <Menu.Item>
      <Link to="/service/ecommerce">
      Creation de E-commerce </Link>
        </Menu.Item>
      <Menu.Item >
      <Link to="/service/app">
      Application Mobile </Link>
        </Menu.Item>
     


      <Menu.Item >
      <Link to="/service/ad">
      Publicite en ligne</Link>
        </Menu.Item>
      <Menu.Item >
      <Link to="/service/identity">
      Identite Visuelle</Link>
        </Menu.Item>
      <Menu.Item >
      <Link to="/service/identity">
      Vidéo</Link>
        </Menu.Item>
    </Menu.Dropdown>
  </Menu>
        </li>
        <Link to="/reference" className="font-heading mr-9 text-black hover:text-yellow-500 text-lg">
          <a href="#">References</a>
        </Link>
        <Link to ="/realisation" className="font-heading mr-9 text-black hover:text-yellow-500 text-lg">
          <a href="#">Realisation</a>
        </Link>
        <Link to="/about" className="font-heading text-black hover:text-yellow-500 text-lg">
          <a href="#">A propos</a>
        </Link>
      </ul>
    </div>
    <div className="w-auto">
      <div className="flex flex-wrap items-center">
        <Link to="/askPrice" className="w-auto hidden lg:block">
          <button className="font-heading block py-3.5 px-5 uppercase text-xs tracking-px text-white font-bold bg-[#FEC73C]  hover:bg-yellow-700 transition ease-in rounded-10">
            Demandez un devis gratuit
          </button>
        </Link>
        <div onClick={()=> Toggle()} className="w-auto cursor-pointer  lg:hidden">
          <a href="#">
            <svg
              className="navbar-burger  text-gray-800"
              width={51}
              height={51}
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={56} height={56} rx={28} fill="currentColor" />
              <path
                d="M37 32H19M37 24H19"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NavBar