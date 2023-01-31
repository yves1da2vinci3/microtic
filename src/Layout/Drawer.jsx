import { Accordion } from '@mantine/core'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavContext } from '../Context/NavContext'

function Drawer() {
  const { Toggle} = useContext(NavContext)
  return (
    <div className=" fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
    <div className=" fixed inset-0 bg-gray-800 opacity-80" />
    <nav className="relative z-10 px-9 py-8 bg-white h-full">
      <div className="flex flex-wrap justify-between h-full">
        <div className="w-full">
          <div className="flex items-center justify-between -m-2">
            <div className="w-auto p-2">
              <a className="inline-block" href="#">
                <img src="https://static.shuffle.dev/uploads/files/de/de01ec5bf4d9796145533f1f5924c22fe5aedfae/LOGO-MICROTIC-03-04-2022.png" alt="" />
              </a>
            </div>
            <div onClick={()=> Toggle()} className="w-auto p-2">
              <a className="navbar-burger" href="#">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="#111827"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center py-8 w-full">
          <ul>
         <li className="mb-12">
         <Accordion defaultValue="services">
      <Accordion.Item value="Services">
        <Accordion.Control><p className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700">Services</p></Accordion.Control>
        <Accordion.Panel>
          <ul className='list-none'>
            <li className='font-semibold p-2  cursor-pointer hover:bg-[#F9BE7A] hover:text-white rounded-lg'>
              <Link to="/service/web">
              creation de site web

              </Link>
              </li>
            <li className='font-semibold p-2  cursor-pointer hover:bg-[#F9BE7A] hover:text-white rounded-lg'>
              <Link to="/service/ecommerce">
              Creation de E-commerce
              </Link>
              </li>
            <li className='font-semibold p-2  cursor-pointer hover:bg-[#F9BE7A] hover:text-white rounded-lg'>
            <Link to="/service/app">
              Application Mobile
              </Link>
              </li>
            <li className='font-semibold p-2  cursor-pointer hover:bg-[#F9BE7A] hover:text-white rounded-lg'>
            <Link to="/service/ad">
              Publicite en ligne
              </Link>
              </li>
            <li className='font-semibold p-2  cursor-pointer hover:bg-[#F9BE7A] hover:text-white rounded-lg'>
            <Link to="/service/identity">
              Identite Visuelle
              </Link>
              </li>
            <li className='font-semibold p-2  cursor-pointer hover:bg-[#F9BE7A] hover:text-white rounded-lg'>
            <Link to="/service/video">
              Vidéo
              </Link>
              </li>
          </ul>
        </Accordion.Panel>
      </Accordion.Item>

    
    </Accordion>
         </li>
         <li className="mb-12">
         <Link to="/references" >
              <a
                className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                href="#"
              >
                References
              </a>
            </Link>
         </li>
            
         <li className="mb-12">
         <Link to="/realisation" >
              <a
                className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                href="#"
              >
                Realisation
              </a>
            </Link>
         </li>
         <li className="mb-12">
         <Link to="/about" >
              <a
                className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                href="#"
              >
                A propos
              </a>
            </Link>
         </li>
          </ul>
        </div>
        <div className="flex flex-col justify-end w-full">
          <div className="flex flex-wrap">
            {/* <div className="w-full">
              <button className="p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10">
                <div className="py-2 px-5 rounded-10">
                  <p>Login</p>
                </div>
              </button>
            </div> */}
            <div className="w-full">
            <Link to="/askPrice" className="w-auto ">
          <button className="font-heading block py-3.5 px-5 uppercase text-xs tracking-px text-white font-bold bg-[#FEC73C]  hover:bg-yellow-700 transition ease-in rounded-10">
            Demandez un devis gratuit
          </button>
        </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Drawer