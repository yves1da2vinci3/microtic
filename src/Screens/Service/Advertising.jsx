import React, { useContext } from 'react'
import { NavContext } from '../../Context/NavContext'
import Drawer from '../../Layout/Drawer'
import NavBar from '../../Layout/NavBar'
import market from '../../assets/Icon/marketing.png'
import sourceCode from '../../assets/Images/source-code.png'
import Img2 from '../../assets/Images/nanotechnology.png'

import { Link } from 'react-router-dom'
import Mobile from '../../assets/Icon/app-development.png'
import search from '../../assets/Icon/search.png'
import settings from '../../assets/Icon/settings.png'
import facebookAd from '../../assets/Icon/facebookAd.png'
import googleAd from '../../assets/Icon/logotype.png'
import update from '../../assets/Icon/software.png'
import { FcAdvertising } from 'react-icons/fc'
import { Carousel } from '@mantine/carousel'
import CarouselItem from '../../Components/CarouselItem'
import useMediaQuery from '../../Hooks/UseMediaQuey'
import Footer from '../../Layout/Footer'
import book from '../../assets/Icon/book.png'
import marketing from '../../assets/Icon/socialMedia.png'
function Advertising() {
  const {open} = useContext(NavContext)
  const matches = useMediaQuery('(min-width: 768px)')

  return (
    <div className='font-["Poppins"] min-h-screen bg-white flex flex-col' >
        <NavBar /> 
      { open && <Drawer /> }
      {/* Descrption */}
      <div className='min-h-[60vh] md:grid md:grid-cols-2  ' >
        <div className=' flex items-center justify-center p-10 md:p-14'>
  <h1 className='text-left text-[#233653]  text-3xl font-bold mt-4' >Générez de nouveaux clients sans pour autant affecter votre budget</h1>

{/* List  */}
        </div>
        <div className='flex items-center justify-center'>
            <img src={market} className="h-[30rem] w-[30rem] " />
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
            <img src={sourceCode} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold  text-md md:text-lg ml-3' >Etude et analyse</p>
        <p className='text-gray-400  text-md md:text-lg mt-5 ml-3' >Pour mettre en place une stratégie en marketing digitale optimale qui répondra à vos besoins et objectifs, nous étudions les parcours d’achat liés à votre activité et analysons le comportement de votre cible.</p>

        </div>
    </li>
    <li className='flex  md:translate-x-24 flex-row items-center mb-8'>
        <div className='md:h-36 md:w-36 h-24 w-24  cursor-pointer   border-4 border-green-500  bg-white  hover:bg-green-500  rounded-full justify-center items-center flex' >
            <img src={Img2} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold  text-md md:text-lg ml-3' >Création de vos bannières publicitaires</p>
        <p className='text-gray-400  text-md md:text-lg mt-5 ml-3' >Afin de capter l’attention de votre cible et de générer un taux de clics élevé, nous vous concevons des bannières publicitaires personnalisées et créatives répondant aux normes du web.</p>

        </div>
    </li>
    <li className='flex  flex-row items-center mb-8'>
        <div className='md:h-36 md:w-36 h-24 w-24  cursor-pointer   border-4 border-yellow-500  bg-white  hover:bg-yellow-500  rounded-full justify-center items-center flex' >
            <img src={settings} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold  text-md md:text-lg ml-3' >Paramétrages des campagnes</p>
        <p className='text-gray-400  text-md md:text-lg mt-5 ml-3' >Un paramétrage pointu qui permettra la génération des prospects et des ventes, et ce, au coût le plus bas</p>

        </div>
    </li>
    <li className='flex flex-row  items-center mb-8'>
        <div className='md:h-36 md:w-36 h-24 w-24  cursor-pointer   border-4 border-pink-500  bg-white  hover:bg-pink-500  rounded-full justify-center items-center flex' >
            <img src={search} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold  text-md md:text-lg ml-3' >Suivi et optimisation des campagnes</p>
        <p className='text-gray-400  text-md md:text-lg mt-5 ml-3' >Durant toute la durée de vos campagnes, nous assurons un suivi minutieux des annonces publicitaires pour optimiser au mieux leurs rendements et maximiser les conversions.</p>

        </div>
    </li>
    <li className='flex flex-row md:translate-x-36 items-center mb-8'>
        <div className='md:h-36 md:w-36 h-24 w-24  cursor-pointer   border-4 border-violet-500  bg-white  hover:bg-violet-500  rounded-full justify-center items-center flex' >
            <img src={book} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold   md:text-lg ml-3' >Rapports Statistiques et analyses mensuels</p>
        <p className='text-gray-400   md:text-lg mt-5 ml-3' >Vous saurez exactement quel est le nombre d’utilisateurs qui voient vos annonces et le taux de clic vers votre site web ou le taux de conversion, et bien plus d’informations qui vous permettront à la fois de croiser les données et de générer des rapports en fonction des besoins</p>

        </div>
    </li>
    
    
   
</ul>
        </div>
        <div className='flex w-[35rem] h-full items-center justify-center'>
            <img src={marketing} className="md:h-[25rem] h-[25rem] w-[25rem] md:w-[25rem]" />
        </div>
      </div>

      <div className=' h-[9rem]  md:h-[8rem] flex-wrap px-6 justify-center md:justify-between  bg-[#233653] w-full flex items-center '>
        <p className='text-white text-center font-semibold text-lg '>
        Augmentez la visibilité de votre business avec un site internet attrayant 
        </p>
        <div className="flex flex-wrap items-center">
        <Link to="/askPrice" className="w-auto ">
          <button className="font-heading block py-3.5 px-5 uppercase text-xs tracking-px text-white font-bold bg-[#FEC73C]  hover:bg-yellow-700 transition ease-in rounded-10">
            Demandez un devis gratuit
          </button>
        </Link>
       
      </div>
      </div>
      {/* Les fonctionalites d'utilisés */}
      <div className='min-h-[80vh] mt-12 '>
  <h1 className='text-center text-[#233653]  text-3xl font-bold mt-4' >Les fonctionnalités les plus utilisées</h1>
<div className='flex flex-wrap items-center' >
<div className='min-h-[45vh] w-full mb-9 pt-5 flex flex-wrap mt-5 gap-x-8 justify-center items-center  '>

<div className='min-h-[33rem] cursor-pointer w-[33rem] gap-y-4 group  drop-shadow-lg  hover:dropdown-xl hover:rounded-xl hover:shadow-lg p-3 flex flex-col'>
<img className='h-24 w-24 self-center' src={facebookAd} />

<h1 className='text-center text-xl font-semibold mt-5  '>

Publicité Facebook
                                     </h1>
<p className='text-gray-500 text-center  '>                       
Les publicités Facebook, grâce à la variété de leurs formats et à la finesse des ciblages,
                            se sont imposées en quelques années comme l’un des moyens les plus simples et efficaces de
                            toucher quasiment l’ensemble de vos clients potentiels grâce à son nombre d’utilisateurs
                            actifs. 
                                     
                        </p>
                        <ul className='list-none text-left text-gray-500 '>
    <li>-Nous vous créons une page Facebook Entreprise entièrement personnalisée.</li>
    <li>-Vous bénéficiez d’une visibilité immédiate sur un réseau incontournable.</li>
    <li>-Vous touchez les utilisateurs les plus susceptibles d’être intéressés par votre activité.</li>
    <li>-Vous augmentez le nombre de clients potentiels sur votre site web.</li>
</ul>
</div>
<div className='min-h-[33rem] cursor-pointer w-[33rem] gap-y-8 group  drop-shadow-lg  hover:dropdown-xl hover:rounded-xl hover:shadow-lg p-3 flex flex-col'>
<img className='h-24 w-24 self-center' src={googleAd} />




<h1 className='text-center text-xl font-semibold mt-5  '>
Publicité Google Adwords</h1>
<p className='text-gray-500 text-center  '>              
C’est la plus grande régie publicitaire au monde. Google Adwords est un moyen simple et
                                        économique de faire de la publicité sur des millions de pages d'informations, de sites
                                        spécialisés, de sites de vidéos et de blogs de grande qualité.
                                     
</p>

<ul className='list-none text-left text-gray-500 '>
    <li>-Nous suivons les résultats de vos campagnes Google et les optimisons sans cesse pour vous assurer la meilleure position.</li>
    <li>-Dans l’objectif de toucher vos prospects, nous ciblons les mots et les emplacements les plus pertinents liés à votre activité.</li>
    <li>-Vous apparaissez dans les 1ers résultats de recherche Google.</li>
</ul>
</div>


</div>
</div>
      </div>
      {/* <section className="relative pt-28 pb-36 bg-gray-100 overflow-hidden">
  <img
    className="absolute top-0 left-1/2 transform -translate-x-1/2"
    src="https://shuffle.dev/gradia-assets/elements/testimonials/radial3.svg"
    alt=""
  />
  <div className="relative z-10 container mx-auto px-4">
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
  </div>
</section> */}
{/* Client */}
<Footer />
    </div>
  )
}

export default Advertising