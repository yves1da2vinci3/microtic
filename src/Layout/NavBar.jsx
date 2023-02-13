import { Menu } from '@mantine/core'
import React, { useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import { NavContext } from '../Context/NavContext'
import microticLogo from '../assets/Images/microticlogo.png'
function NavBar() {
    const {Toggle } = useContext(NavContext)
    const location = useLocation()
  return (
    <section>
    <div className="flex items-center sm:shadow-none shadow-lg justify-between px-8 py-5">
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-auto mr-14">
            <Link to="/" >
              <img
                src={microticLogo}
                alt=""
                className="h-14"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-auto hidden lg:block">
        <ul className="flex items-center mr-10">
          
          <li className={` ${location.pathname.startsWith("/service") ?  "text-yellow-500 font-semibold" : 'text-black'} font-heading mr-9  hover:text-yellow-500 hover:font-semibold text-lg`}>
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
      <Link to="/service/video">
      Vidéo</Link>
        </Menu.Item>
      <Menu.Item >
      <Link to="/service/print">
      Impremérie
      </Link>
        </Menu.Item>
      <Menu.Item >
      <Link to="/service/light">
      Enseignes Lumineuse
      </Link>
        </Menu.Item>
      <Menu.Item >
      <Link to="/service/wear">
      Revêtement De Façade
      </Link>
        </Menu.Item>
      <Menu.Item >
      <Link to="/service/building">
      Construction Métallique
      </Link>
        </Menu.Item>
    </Menu.Dropdown>
  </Menu>
          </li>
          <Link to="/reference" className={` ${location.pathname.includes("/reference") ?  "text-yellow-500 font-semibold" : 'text-black'} font-heading mr-9  hover:text-yellow-500 hover:font-semibold text-lg`}>
            <a href="#">Références</a>
          </Link>
          <Link to="/realisation" className={` ${location.pathname.includes("/realisation") ?  "text-yellow-500 font-semibold" : 'text-black'} font-heading mr-9  hover:text-yellow-500 hover:font-semibold text-lg`}>
            <a href="#">Réalisation</a>
          </Link>
          <Link to="/about" className={` ${location.pathname.includes("/about") ?  "text-yellow-500 font-semibold" : 'text-black'} font-heading mr-9  hover:text-yellow-500 hover:font-semibold text-lg`}>
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