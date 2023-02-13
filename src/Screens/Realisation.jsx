import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import CarouselImage1 from '../assets/Images/Realisation/photo1675642397 (1).jpeg'
import CarouselImage2 from '../assets/Images/Realisation/photo1675642397 (2).jpeg'
import CarouselImage3 from '../assets/Images/Realisation/photo1675642397 (3).jpeg'
import CarouselImage4 from '../assets/Images/Realisation/photo1675642397 (4).jpeg'
import CarouselImage5 from '../assets/Images/Realisation/photo1675642397 (5).jpeg'
import CarouselImage6 from '../assets/Images/Realisation/photo1675642397 (6).jpeg'
import CarouselImage7 from '../assets/Images/Realisation/photo1675642397 (7).jpeg'
import CarouselImage8 from '../assets/Images/Realisation/photo1675642397.jpeg'
import CarouselImage9 from '../assets/Images/Realisation/photo1675642568 (1).jpeg'
import CarouselImage10 from '../assets/Images/Realisation/photo1675642568 (2).jpeg'
import CarouselImage11 from '../assets/Images/Realisation/photo1675642568 (3).jpeg'
import CarouselImage12 from '../assets/Images/Realisation/photo1675642568 (4).jpeg'
import CarouselImage13 from '../assets/Images/Realisation/photo1675642568 (5).jpeg'
import CarouselImage14 from '../assets/Images/Realisation/photo1675642568 (6).jpeg'
import CarouselImage15 from '../assets/Images/Realisation/photo1675642568.jpeg'

import Footer from '../Layout/Footer'
import NavBar from '../Layout/NavBar'
import { NavContext } from '../Context/NavContext'
import Drawer from '../Layout/Drawer'
function Realisation() {
    const { open } = useContext(NavContext)
  return (
    <div className='font-["Poppins"] min-h-screen bg-white flex flex-col'>
      <NavBar /> 
      { open && <Drawer /> }
  <h1 className='text-center text-[#233653] font-bold mt-4' >Nos Réalisations</h1>
<div className='flex flex-row gap-4 justify-center flex-wrap'>


<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage1}/>
          
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage2}/>
          
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage3}/>
          
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage4}/>
          
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage5}/>
          
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage6}/>
          
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage7}/>
          
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage8}/>
          
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage9}/>
          
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage10}/>
          
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage11}/>
          
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage12}/>
          
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage13}/>
          
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage14}/>
          
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage15}/>
          
        </div>
{/* <div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage16}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage17}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage18}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage19}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage20}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage21}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage22}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage23}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage24}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage25}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div> */}
</div>

<Footer />
    </div>
  )
}

export default Realisation