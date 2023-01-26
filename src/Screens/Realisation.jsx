import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import CarouselImage1 from '../assets/Images/photo1674.jpeg'
import CarouselImage2 from '../assets/Images/photo1674634854(2).jpeg'
import CarouselImage3 from '../assets/Images/photo1674577346(6).jpeg'
import CarouselImage4 from '../assets/Images/photo1674577346.jpeg'
import CarouselImage5 from '../assets/Images/photo1674577346jpeg.jpeg'
import CarouselImage6 from '../assets/Images/photo167463480.jpeg'
import CarouselImage7 from '../assets/Images/photo1674634805(4).jpeg'
import CarouselImage8 from '../assets/Images/photo1674634805(5).jpeg'
import CarouselImage9 from '../assets/Images/photo1674634805(6).jpeg'
import CarouselImage10 from '../assets/Images/photo1674634805(7).jpeg'
import CarouselImage11 from '../assets/Images/photo1674634805(8).jpeg'
import CarouselImage12 from '../assets/Images/photo1674634806.jpeg'
import CarouselImage13 from '../assets/Images/photo1674634854(2).jpeg'
import CarouselImage14 from '../assets/Images/photo1674634854(1).jpeg'
import CarouselImage15 from '../assets/Images/photo1674634854 .jpeg'
import CarouselImage16 from '../assets/Images/photo1674634854 (5).jpeg'
import CarouselImage17 from '../assets/Images/photo1674634854 (4).jpeg'
import CarouselImage18 from '../assets/Images/photo1674634854 (3).jpeg'
import CarouselImage19 from '../assets/Images/photo167463485.jpeg'
import CarouselImage20 from '../assets/Images/photo1674634846.jpeg'
import CarouselImage21 from '../assets/Images/photo1674634845.jpeg'
import CarouselImage22 from '../assets/Images/photo1674634845(8).jpeg'
import CarouselImage23 from '../assets/Images/photo1674634845(7).jpeg'
import CarouselImage24 from '../assets/Images/photo1674634845(6).jpeg'
import CarouselImage25 from '../assets/Images/photo1674634845(5).jpeg'
import CarouselImage26 from '../assets/Images/photo1674634845(4).jpeg'
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
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage2}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage3}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage4}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage5}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage6}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage7}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage8}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage9}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage10}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage11}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage12}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage13}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage14}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
    <div className='bg-black bg-opacity-20 w-[25rem] hidden group-hover:flex  h-[25rem] absolute '></div>
          <img className='h-[25rem] w-full object-fill' src={CarouselImage15}/>
          <h1 className='text-white text-2xl hidden group-hover:flex font-semibold z-50 absolute'>Conception de tricot</h1>
        </div>
<div className='h-[25rem]  relative group   cursor-pointer flex justify-center items-center  w-[25rem]'>
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
        </div>
</div>

<Footer />
    </div>
  )
}

export default Realisation