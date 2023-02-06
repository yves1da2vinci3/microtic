import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button, Text } from '@mantine/core';
import {IoMdArrowDropdown} from 'react-icons/io'
import { NavContext } from '../Context/NavContext';
import { AiOutlineMenu } from 'react-icons/ai';
function NavBar() {
  const { Toggle} = useContext(NavContext)
 
  return (
    <section>
    <div className="flex items-center sm:shadow-none shadow-lg justify-between px-8 py-5">
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
          <Link to ="/" className="font-heading mr-9 text-black hover:text-yellow-500 hover:font-semibold text-lg">
            <a href="#">Accueil</a>
          </Link>
          <li className="font-heading mr-9 text-black hover:text-yellow-500 hover:font-semibold text-lg">
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
          <Link to="/reference" className="font-heading mr-9 text-black hover:text-yellow-500 hover:font-semibold text-lg">
            <a href="#">References</a>
          </Link>
          <Link to="/realisation" className="font-heading mr-9 text-black hover:text-yellow-500 hover:font-semibold text-lg">
            <a href="#">Realisation</a>
          </Link>
          <Link to="/about" className="font-heading text-black hover:text-yellow-500 hover:font-semibold text-lg">
            <a href="#">A propos</a>
          </Link>
        </ul>
      </div>
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <Link to="/askPrice" className="w-auto hidden lg:block">
            <button className="font-heading block py-3.5 px-5 bg-yellow-500 uppercase text-xs tracking-px text-white font-bold   hover:bg-opacity-10 transition ease-in rounded-10">
              Demandez un devis gratuit
            </button>
          </Link>
          <div  onClick={()=> Toggle()} className="w-auto  cursor-pointer hover:bg-gray-100 rounded-full  py-1 px-3  lg:hidden">
            <AiOutlineMenu size={27} color="black" />
          </div>
        </div>
      </div>
    </div>
    {/* Drawer */}
  
  </section>
  )
}

export default NavBar