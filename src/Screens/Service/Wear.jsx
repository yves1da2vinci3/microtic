import React, { useContext } from 'react'
import { NavContext } from '../../Context/NavContext'
import Drawer from '../../Layout/Drawer'
import NavBar from '../../Layout/NavBar'

import accessibility from '../../assets/Icon/authorization.png'
import Fadding from '../../assets/Images/facade1.jpeg'
import Building from '../../assets/Images/facade2.jpeg'
import Img3 from '../../assets/Icon/famous.png'

import { Link } from 'react-router-dom'
import ideaIcon from '../../assets/Icon/idea.png'
import reference from '../../assets/Icon/refer.png'
import { Carousel } from '@mantine/carousel'
import CarouselItem from '../../Components/CarouselItem'
import useMediaQuery from '../../Hooks/UseMediaQuey'
import Footer from '../../Layout/Footer'
function Wear() {
  const {open} = useContext(NavContext)
  const matches = useMediaQuery('(min-width: 768px)')

  return (
    <div className='font-["Poppins"] min-h-screen bg-white flex flex-col' >
        <NavBar /> 
      { open && <Drawer /> }
      {/* Descrption */}
      <div className='min-h-[60vh] md:grid md:grid-cols-2  ' >
        <div className=' flex gap-y-4 flex-col p-10 md:p-14'>
  <h1 className='text-left text-[#233653]  text-3xl font-bold mt-4' >Vous désirez une façade sobre aux lignes pures ?</h1>
<p className='text-gray-400 text-lg' > Dans ce cas, optez pour un revêtement en cassettes d'Alucobond (plaques composites en aluminium.
Obtenez un look architectural avec le revêtement de façade qui garde son éclat sur plusieurs années malgré les intempéries.</p>


        </div>
        <div className='flex items-center justify-center'>
            <img src={Building} className="h-[30rem] w-[30rem] " />
        </div>
      </div>
      {/* Comment on procede */}
      <div className='min-h-[60vh] flex-wrap  flex flex-row  ' >
        <div className=' flex flex-1 gap-y-4 flex-col p-3'>
  <h1 className='text-left text-[#233653]  text-3xl font-bold mt-4' >Comment nous procédons</h1>


{/* List  */}
<ul className='flex flex-col mt-8 ml-2 md:ml-8  list-none' >
    <li className='flex flex-row items-center mb-8'>
        <div className='md:h-36 md:w-36  h-24 w-24 cursor-pointer   border-4 border-blue-500  bg-white  hover:bg-blue-500  rounded-full justify-center items-center flex' >
            <img src={ideaIcon} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold  text-md md:text-lg ml-3' >Analyse de votre activité</p>
        <p className='text-gray-400  text-md md:text-lg mt-5 ml-3' >Nous assemblons les informations sur l’historique, l’activité et l’organisation de votre entreprise, afin de déterminer la direction artistique que votre identité visuelle doit prendre.</p>

        </div>
    </li>
    <li className='flex  flex-row items-center mb-8'>
        <div className='md:h-36 md:w-36 h-24 w-24  cursor-pointer   border-4 border-green-500  bg-white  hover:bg-green-500  rounded-full justify-center items-center flex' >
            <img src={Img3} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold  text-md md:text-lg ml-3' >Recherche et réflexion</p>
        <p className='text-gray-400  text-md md:text-lg mt-5 ml-3' >Une collaboration étroite entre Microtic et nos clients pour échanger sur les différentes directions et de compléter les visions et les idées.</p>

        </div>
    </li>
    <li className='flex  flex-row items-center mb-8'>
        <div className='md:h-36 md:w-36 h-24 w-24  cursor-pointer   border-4 border-yellow-500  bg-white  hover:bg-yellow-500  rounded-full justify-center items-center flex' >
            <img src={accessibility} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold  text-md md:text-lg ml-3' >Création et proposition</p>
        <p className='text-gray-400  text-md md:text-lg mt-5 ml-3' >Plusieurs variantes vous seront proposés. Vous pourrez donc choisir celui qui vous représente le mieux.</p>

        </div>
    </li>
   
    <li className='flex flex-row  items-center mb-8'>
        <div className='md:h-36 md:w-36 h-24 w-24  cursor-pointer   border-4 border-violet-500  bg-white  hover:bg-violet-500  rounded-full justify-center items-center flex' >
            <img src={reference} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold   md:text-lg ml-3' >Droit d'utilisation et propriété intellectuelle</p>
        <p className='text-gray-400   md:text-lg mt-5 ml-3' >Vous seul serez propriétaire de toute création ou déclinaison. Nous vous cédons entièrement tous les droits d’utilisation.</p>

        </div>
    </li>
    
    
   
</ul>
        </div>
        <div className='flex w-[35rem] h-full items-center justify-center'>
            <img src={Fadding} className="md:h-[26rem] h-[25rem] w-[25rem] md:w-[26rem]" />
        </div>
      </div>

      <div className=' h-[9rem]  md:h-[8rem] flex-wrap px-6 justify-center md:justify-between  bg-[#233653] w-full flex items-center '>
        <p className='text-white text-center font-semibold text-lg '>
       Avec microtic , le seul souci que vous pouvez vous faire c'est d'avoir un travail au minimun excellent 
        </p>
        <div className="flex flex-wrap items-center">
        <Link to="/askPrice" className="w-auto ">
          <button className="font-heading block py-3.5 px-5 uppercase text-xs tracking-px text-white font-bold bg-[#FEC73C]  hover:bg-yellow-700 transition ease-in rounded-10">
            Demandez un devis gratuit
          </button>
        </Link>
       
      </div>
      </div>
     
      {/* <section className="relative pt-28 pb-36 bg-gray-100 overflow-hidden">
  {/* <img
    className="absolute top-0 left-1/2 transform -translate-x-1/2"
    src="https://shuffle.dev/gradia-assets/elements/testimonials/radial3.svg"
    alt=""
  /> */}
  {/* <div className="relative z-10 container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="mb-16 max-w-3xl mx-auto font-heading font-semibold text-center text-3xl sm:text-4xl text-gray-900">
      Écoutez les témoignages d'utilisateurs de microtic qui ont économisé des milliers de francs CFA sur la création de sites Web.

      </h2>
      <Carousel
      withIndicators={true}
      height={matches? 430 : 630}
      slideSize="100%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={1}
      styles={{
        indicator: {
            backgroundColor  : "#1877f2",
          width: 12,
          height: 4,
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: 40,
          },
        },
      }}
    >
      <Carousel.Slide>
   <CarouselItem />
       
      </Carousel.Slide>
      <Carousel.Slide>
   <CarouselItem />
     
        </Carousel.Slide>
      <Carousel.Slide>
   <CarouselItem />
     
      </Carousel.Slide>
      <Carousel.Slide>
   <CarouselItem />
     
      </Carousel.Slide>
      <Carousel.Slide>
   <CarouselItem />
     
      </Carousel.Slide>
      <Carousel.Slide>
   <CarouselItem />
     
      </Carousel.Slide>
      <Carousel.Slide>
   <CarouselItem />
    
      </Carousel.Slide>
      <Carousel.Slide>
   <CarouselItem />
    
      </Carousel.Slide>
      <Carousel.Slide>
   <CarouselItem />
    
      </Carousel.Slide>
      <Carousel.Slide>
   <CarouselItem />
    
      </Carousel.Slide>
      <Carousel.Slide>
   <CarouselItem />
      
      </Carousel.Slide>
      <Carousel.Slide>
   <CarouselItem />
      </Carousel.Slide>
    </Carousel>
    </div>
  </div> */}
{/* </section>  */}
{/* Client */}
<Footer />
    </div>
  )
}

export default Wear