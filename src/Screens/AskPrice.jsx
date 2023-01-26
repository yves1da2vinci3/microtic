import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Layout/Footer'

function AskPrice() {
  return (
    <div className='font-["Poppins"] min-h-screen bg-white flex flex-col'>
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
          <li className="font-heading mr-9 text-black hover:text-yellow-500 text-lg">
            <a href="#">References</a>
          </li>
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
    {/* Banner */}
  
    <section className="pt-20 pb-32 bg-black overflow-hidden">
  <div className="container mx-auto px-4">
    <img
      className="mx-auto mb-28"
      src="gradia-assets/logos/gradia-name-white.svg"
      alt=""
    />
    <div className="flex flex-wrap items-center -m-6">
      <div className="w-full md:w-1/2 p-6">
        <div className="bg-gradient-cyan2 p-1 mx-auto max-w-max overflow-hidden rounded-full">
          <img
            className="object-cover rounded-full"
            src="https://shuffle.dev/gradia-assets/images/sign-up/woman.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <div className="md:max-w-md">
          <h2 className="mb-3 font-heading font-bold text-white text-6xl sm:text-5xl">
            Evaluation de votre projet
          </h2>
          <p className="mb-16 text-lg text-gray-500">
          Un projet à réaliser ? Vous souhaitez plus d’informations et de renseignements sur votre futur projet ? N’hésitez pas à prendre contact, nous aimons les nouveaux défis !
          </p>
          <div className="flex flex-wrap -m-2 mb-6">
            <div className="w-full p-2">
              <p className="mb-2.5 font-medium text-base text-white">
               Nom de la Societé
              </p>
              <div className="p-px bg-gradient-cyan focus-within:ring-4 focus-within:ring-indigo-500 rounded-lg">
                <input
                  className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-black outline-none rounded-lg"
                  type="text"
                  placeholder="ResidenceIt"
                  name="name"
                />
              </div>
            </div>
         
            <div className="w-full p-2">
              <p className="mb-2.5 font-medium text-base text-white">
                Addresse Mail
              </p>
              <div className="p-px bg-gradient-cyan focus-within:ring-4 focus-within:ring-indigo-500 rounded-lg">
                <input
                  className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-black outline-none rounded-lg"
                  type="text"
                  placeholder="yves.lieon@gmail.com"
                  name="email"
                />
              </div>
            </div>
            <div className="w-full p-2">
              <p className="mb-2.5 font-medium text-base text-white">
               Numero de telephone
              </p>
              <div className="p-px bg-gradient-cyan focus-within:ring-4 focus-within:ring-indigo-500 rounded-lg">
                <input
                  className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-black outline-none rounded-lg"
                  type="text"
                  placeholder="ResidenceIt"
                  name="name"
                />
              </div>
            </div>
            <div className="w-full p-2">
              <p className="mb-2.5 font-medium text-base text-white">
               Service
              </p>
              <div className="p-px bg-gradient-cyan focus-within:ring-4 focus-within:ring-indigo-500 rounded-lg">
                <input
                  className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-black outline-none rounded-lg"
                  type="text"
                  placeholder="ResidenceIt"
                  name="name"
                />
              </div>
            </div>
            <div className="w-full p-2">
              <p className="mb-2.5 font-medium text-base text-white">
                Descrption du projet
              </p>
              <div className="p-px bg-gradient-cyan focus-within:ring-4 focus-within:ring-indigo-500 rounded-lg">
                <input
                  className="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 bg-black outline-none rounded-lg"
                  type="text"
                  placeholder="Mon projet consistera ...."
                  name="password"
                />
              </div>
            </div>
          </div>
          
          <div className="group relative md:max-w-max mb-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-blue opacity-0 group-hover:opacity-50 rounded-full transition ease-out duration-300" />
            <button className="p-1 w-full font-heading font-semibold text-xs text-white uppercase tracking-px overflow-hidden rounded-full">
              <div className="relative py-5 px-14 bg-gradient-blue overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500" />
                <p className="relative z-10 group-hover:text-gray-900">
                    envoyer
                </p>
              </div>
            </button>
          </div>
       
        </div>
      </div>
    </div>
  </div>
</section>
{/* Footer */}
<Footer/>
    </div>
  )
}

export default AskPrice