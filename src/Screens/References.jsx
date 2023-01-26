import React from 'react'
import Footer from '../Layout/Footer'
import gcb from '../assets/Images/1575009761_logo-gcb.png'
import gcb2 from '../assets/Images/305810755_420394953533101_1071117596035726979_n.jpeg'
import gcb3 from '../assets/Images/EDA.jpg'
import gcb4 from '../assets/Images/CHAMPYSECURITE.png'
import gcb5 from '../assets/Images/LOGO.jpg'
import gcb6 from '../assets/Images/Logo2022.png'
import gcb7 from '../assets/Images/ResidenceITLogo.png'
import gcb8 from '../assets/Images/SEXIM.jpg'
import gcb9 from '../assets/Images/SEXIM.jpg'
import { Link } from 'react-router-dom'
function References() {
  return (
    <div className='flex-col min-h-screen flex font-["Poppins"]'>
            <div className="flex h-20   shadow-xl items-center justify-between px-8 py-5">
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
            <a href="#">Services</a>
          </li>
          <Link to="/reference" className="font-heading mr-9 text-black hover:text-yellow-500 text-lg">
            <a href="#">References</a>
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
          <div className="w-auto lg:hidden">
            <a href="#">
              <svg
                className="navbar-burger text-gray-800"
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
        <div className='min-h-[80vh]  flex flex-col p-4 '>
  <h1 className='text-center text-[#233653] font-bold mt-4' >Plus de 1000 clients nous ont fait confiance pour leurs projets</h1>

  <div className='flex-1  flex flex-row items-center justify-center flex-wrap   p-4'>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white border border-gray-300'>
      <img className='h-36 w-36' src={gcb} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white border border-gray-300'>
      <img className='h-36 w-36' src={gcb2} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white border border-gray-300'>
      <img className='h-36 w-36' src={gcb3} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white border border-gray-300'>
      <img className='h-36 w-36' src={gcb4} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white border border-gray-300'>
      <img className='h-36 w-36' src={gcb5} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white border border-gray-300'>
      <img className='h-36 w-36' src={gcb6} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white border border-gray-300'>
      <img className='h-36 w-36' src={gcb7} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white border border-gray-300'>
      <img className='h-36 w-36' src={gcb8} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white border border-gray-300'>
      <img className='h-36 w-36' src={gcb9} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white border border-gray-300'>
      <img className='h-36 w-36' src={gcb} />
    </div>
  </div>

  
</div>
{/* Footer */}
<Footer/>
    </div>
  )
}

export default References