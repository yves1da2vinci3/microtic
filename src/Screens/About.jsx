import React from 'react'
import { BsFillArrowRightCircleFill, BsFillPlayFill } from 'react-icons/bs'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { AiOutlineRocket } from 'react-icons/ai'
import { FcAdvertising } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import teamBlack from '../assets/Images/team.jpg'
import lightIcon from '../assets/Icon/light-bulb.png'
import RocketIcon from '../assets/Icon/rocket.png'
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
function About() {
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
    {/* About Us */}
    <div className='min-h-[90vh] mt-12 md:mt-0 flex flex-wrap  md:grid md:grid-cols-2' >
<div class="w-full  flex items-center px-4">
          <div class="relative mx-auto md:mr-0 max-w-max">
            <img class="absolute z-10 -left-14 -top-12 w-28 md:w-auto" src="https://shuffle.dev/flex-ui-assets/elements/circle3-yellow.svg" alt=""/>
            <img class="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto" src="https://shuffle.dev/flex-ui-assets/elements/dots3-blue.svg" alt=""/>
            <img class="relative rounded-7xl h-[80%]" src={teamBlack} />
          </div>
        </div>
    <div className=' flex flex-col justify-center p-3' >
        <h1 className=' text-5xl text-left font-bold mt-4'>A propos </h1>
        <div className='min-h-48 mt-24 break-words mb-16 relative flex justify-center items-center text-gray-600'>
          <div className='absolute z-2 top-0 h-[25rem] w-[22rem]' >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#ff8a73c7" d="M59.5,-43.7C73.9,-29.3,80.3,-4.8,76.2,19.1C72.1,42.9,57.5,66.1,37.4,74.7C17.2,83.2,-8.5,77.2,-30.1,65.6C-51.8,54,-69.3,36.9,-75.9,15.2C-82.6,-6.5,-78.3,-32.8,-63.9,-47.2C-49.4,-61.6,-24.7,-64,-1.1,-63.2C22.5,-62.3,45.1,-58.1,59.5,-43.7Z" transform="translate(100 100)" />
</svg>
          </div>
            <p className='font-semibold z-40'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            </p>
        </div>
        <div className='bg-[#FF8A73] ml-3 shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 shadow-[#FF8A73] border-2 drop-shadow-md border-[#FF8A73]  cursor-pointer w-12  h-12 rounded-full flex items-center justify-center' >
<BsFillPlayFill size={24} color='white' />
</div>
    </div>
</div>
{/* Why Us */}
<h1 className='text-center text-6xl font-semibold mt-5'>Pourquoi Microtic?</h1>
<div className='min-h-[45vh] mb-9 pt-5 flex flex-wrap mt-5 gap-x-8 justify-center items-center  '>

    <div className='h-[30rem] cursor-pointer w-[23rem] gap-y-4 group  drop-shadow-lg cardGradient p-3 flex flex-col'>
<FcAdvertising size={120} className="self-center" color="#FF8A73" />
<h1 className='text-center text-xl font-semibold mt-5 group-hover:text-white '>Une offre  Complete?</h1>
<p className='text-gray-500 text-center font-semibold group-hover:text-white'>Un site web de qualité et simple à utiliser et à gérer.
Un site web optimisé pour le référencement naturel, qui vous apportera un nombre croissant de visiteurs et vous permettra donc de développer votre clientèle.
Un tableau de bord qui vous permettra de suivre et d’améliorer la rentabilité de votre site web.</p>
    </div>
    <div className='h-[30rem] cursor-pointer w-[23rem] gap-y-8 group  drop-shadow-lg cardGradient p-3 flex flex-col'>
<img className='h-24 w-24 self-center' src={lightIcon} />
<h1 className='text-center text-xl font-semibold mt-5 group-hover:text-white '>Conseil et suivi de projet</h1>
<p className='text-gray-500 text-center font-semibold group-hover:text-white'>Un chef de projet qui répond présent à n’importe quelle étape du projet, et qui se porte garant de la bonne livraison de votre site web.
Une formation personnalisée et gratuite qui assurera votre autonomie dans la gestion de votre site web.</p>
    </div>
    <div className='h-[30rem] cursor-pointer w-[23rem] gap-y-8 group  drop-shadow-lg cardGradient p-3 flex flex-col'>
    <img className='h-24 w-24 self-center' src={RocketIcon} />

<h1 className='text-center text-xl font-semibold mt-5 group-hover:text-white '>Support technique</h1>
<p className='text-gray-500 text-center font-semibold group-hover:text-white'>Un support technique est disponible. Que ce soit par mail ou par téléphone, nous serons toujours à l’écoute.
Tout bug ou tout dysfonctionnement sera traité en priorité et dans les plus brefs délais.</p>
    </div>
    
</div>
{/* Paternaire */}
<div className='min-h-[80vh] bg-[#FF8A73] flex flex-col p-4 '>
  <h1 className='text-center text-[#233653] font-bold mt-4' >Plus de 1000 clients nous ont fait confiance pour leurs projets</h1>

  <div className='flex-1  flex flex-row items-center justify-center flex-wrap   p-4'>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src={gcb} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src={gcb2} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src={gcb3} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src={gcb4} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src={gcb5} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src={gcb6} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src={gcb7} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src={gcb8} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src={gcb9} />
    </div>
    <div className='w-56 m-4 h-48  rounded-lg drop-shadow-md flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src={gcb} />
    </div>
  </div>

  
</div>
{/* Footer */}
<Footer/>
    </div>
  )
}

export default About