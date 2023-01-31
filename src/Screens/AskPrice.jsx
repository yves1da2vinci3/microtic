import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavContext } from '../Context/NavContext'
import Drawer from '../Layout/Drawer'
import Footer from '../Layout/Footer'
import NavBar from '../Layout/NavBar'

function AskPrice() {
  const { open} = useContext(NavContext)
  return (
    <div className='font-["Poppins"] min-h-screen bg-white  flex flex-col'>
      <NavBar /> 
      { open && <Drawer /> }
    {/* Banner */}
    <h1 className='text-center text-[#233653]  text-3xl font-bold mt-4' >Demander un devis</h1>
  
    <div className='md:h-[40rem] md:w-[40rem] h-[40rem] w-[24rem] gap-y-5 flex-col p-5  bg-white drop-shadow-lg rounded-lg self-center mt-4 flex border-2  ' >
    <h1 className=' text-[#233653]  text-lg font-bold mt-4' >Qui etes vous ?</h1>
{/* inPut */}
<div className='w-full min-h-20  flex-col sm:flex-row  gap-4 flex items-center px-1 sm:px-4'>
  <input className='h-12 bg-gray-100 border-2 p-2  w-full  flex-1' placeholder='prenom'/>
  <input className='h-12 bg-gray-100 border-2 p-2  w-full flex-1 ' placeholder='nom de famille'/>
</div>
{/* Email */}
<input className='h-12 bg-gray-100 border-2 p-2 w-full ' placeholder='Email professionel'/>
<h1 className=' text-[#233653]  text-lg font-bold ' >Decrivez votre projet</h1>
{/* Select */}
<select className='h-12 bg-gray-100 border-2 p-2 w-full'>
  <option>Site web</option>
  <option>Site Ecommerce</option>
  <option>Application Mobile</option>
</select>
{/* description */}
<textarea  className='flex-1 bg-gray-100 border-2 p-2' placeholder='entrez votre description ici  ' ></textarea>

{/* Boutton */}
<button className="font-heading block py-3.5 px-5  self-end uppercase text-xs tracking-px text-white font-bold bg-[#FEC73C]  hover:bg-yellow-700 transition ease-in rounded-10">
           Valider la Demande 
          </button>
    </div>
{/* Footer */}
<Footer/>
    </div>
  )
}

export default AskPrice