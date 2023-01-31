import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import residenceItLogo from '../assets/Images/ResidenceITLogo.png'
function CarouselItem() {
  return (
   <div className="px-16 py-12 bg-white rounded-10">
        <img
          className="mb-11 h-16"
          src={residenceItLogo}
          alt=""
        />
        <h2 className="mb-9 font-heading font-medium text-md sm:text-2xl text-black">
         Microtic  m'a permis de mettre sur place mon site web responsive qui me permet de manager mieux mon bussiness , en publiant les residences libres , de recevoir les remarques ou problemes rencontres par mes clients et cela avec  la meilleure experience possible.
        </h2>
        <div className="flex flex-wrap items-end justify-between -m-6">
          <div className="w-auto p-6">
            <div className="flex flex-wrap -m-1.5">
              <div className="w-auto p-1.5">
                <img
                className='h-14 w-14 rounded-full'
                  src="https://media.licdn.com/dms/image/C4E03AQGr1ATJxgLlFg/profile-displayphoto-shrink_800_800/0/1639553598181?e=2147483647&v=beta&t=UInTmNwhvz8vV051gs45Uo28k_e5aYk6NKnmMSRj5Zo"
                  alt=""
                />
              </div>
              <div className="w-auto p-1.5">
                <h3 className="font-heading font-semibold text-gray-900 text-lg">
                  DAO Madou
                </h3>
                <p className="text-sm text-gray-600">Cofondeur,CEO de Residence IT</p>
              </div>
            </div>
          </div>
          {/* <div className="w-auto p-6">
            <div className="flex flex-wrap -m-2">
                
              <AiOutlineArrowLeft size={25} color="grey" />
              <AiOutlineArrowRight size={25} color="black" />
             
            </div>
          </div> */}
        </div>
      </div>
  )
}

export default CarouselItem