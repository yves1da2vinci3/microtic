import React, { useContext } from 'react'
import { NavContext } from '../../Context/NavContext'
import Drawer from '../../Layout/Drawer'
import NavBar from '../../Layout/NavBar'
import Film from '../../assets/Icon/Video1.jpg'
import video2 from '../../assets/Icon/Video2.jpg'
import Plan from '../../assets/Icon/planning.png'
import Integration from '../../assets/Icon/illustrator.png'
import InT from '../../assets/Icon/data-integration.png'
import Img3 from '../../assets/Icon/famous.png'
import accessibility from '../../assets/Icon/authorization.png'
import codeing from '../../assets/Images/coding.png'
import formation from '../../assets/Images/online-training.png'
import deployment from '../../assets/Images/deployment.png'
import { Link } from 'react-router-dom'
import Mobile from '../../assets/Icon/app-development.png'
import ideaIcon from '../../assets/Icon/idea.png'
import analytics from '../../assets/Icon/analytics.png'
import reference from '../../assets/Icon/refer.png'
import trafic from '../../assets/Icon/cloud-storage.png'
import AD from '../../assets/Icon/project.png'
import Seo from '../../assets/Icon/search-engine-optimization.png'
import update from '../../assets/Icon/software.png'
import { FcAdvertising } from 'react-icons/fc'
import { Carousel } from '@mantine/carousel'
import CarouselItem from '../../Components/CarouselItem'
import useMediaQuery from '../../Hooks/UseMediaQuey'
import Footer from '../../Layout/Footer'
function Video() {
  const {open} = useContext(NavContext)
  const matches = useMediaQuery('(min-width: 768px)')

  return (
    <div className='font-["Poppins"] min-h-screen bg-white flex flex-col' >
        <NavBar /> 
      { open && <Drawer /> }
      {/* Descrption */}
      <div className='min-h-[60vh] md:grid md:grid-cols-2  ' >
        <div className=' flex gap-y-4 flex-col p-10 md:p-14'>
  <h1 className='text-left text-[#233653]  text-3xl font-bold mt-4' >Atteignez votre coeur de cible grâce à la vidéo publicitaire</h1>
<p className='text-gray-400 text-lg' >La vidéo d’entreprise est un excellent moyen pour faire connaître ses activités, fidéliser ses clients et véhiculer l’image caractéristique de sa société.
La vidéo d’entreprise peut avoir de multiples usages et être utilisée sur différents supports : sites web, appareils mobiles, emails, foires et salons…
La vidéo d’entreprise est à la fois un outil d’information, de prospection et surtout de différenciation. Les avantages de la publicité d’entreprise sont multiples</p>


        </div>
        <div className='flex items-center justify-center'>
            <img src={Film} className="h-[30rem] w-[30rem] " />
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
        <p className='text-[#233653] font-semibold  text-md md:text-lg ml-3' >Séduire et impacter</p>
        <p className='text-gray-400  text-md md:text-lg mt-5 ml-3' >Les vidéos parlent à tout le monde et sont très engageantes. Bon nombre d’internautes préfèrent visionner un contenu vidéo au lieu d’un contenu écrit.</p>

        </div>
    </li>
    <li className='flex  md:translate-x-36 flex-row items-center mb-8'>
        <div className='md:h-36 md:w-36 h-24 w-24  cursor-pointer   border-4 border-green-500  bg-white  hover:bg-green-500  rounded-full justify-center items-center flex' >
            <img src={Img3} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold  text-md md:text-lg ml-3' >Viralité</p>
        <p className='text-gray-400  text-md md:text-lg mt-5 ml-3' >Les internautes ont tendance à partager des vidéos plus qu’aucun autre type de contenu. Votre vidéo peut ainsi se diffuser de façon exponentielle sur le web.</p>

        </div>
    </li>
    <li className='flex  flex-row items-center mb-8'>
        <div className='md:h-36 md:w-36 h-24 w-24  cursor-pointer   border-4 border-yellow-500  bg-white  hover:bg-yellow-500  rounded-full justify-center items-center flex' >
            <img src={accessibility} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold  text-md md:text-lg ml-3' >Accessibilité</p>
        <p className='text-gray-400  text-md md:text-lg mt-5 ml-3' >Les vidéos sont consultables depuis les PC et les appareils mobiles, et demandent parfois moins de disponibilité que les contenus écrits.</p>

        </div>
    </li>
    <li className='flex flex-row  items-center mb-8'>
        <div className='md:h-36 md:w-36 h-24 w-24  cursor-pointer   border-4 border-pink-500  bg-white  hover:bg-pink-500  rounded-full justify-center items-center flex' >
            <img src={trafic} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold  text-md md:text-lg ml-3' >Génération de trafic</p>
        <p className='text-gray-400  text-md md:text-lg mt-5 ml-3' >Après avoir visionné votre vidéo, les internautes sont plus tentés d’aller visiter votre site web et de découvrir votre offre.</p>

        </div>
    </li>
    <li className='flex flex-row md:translate-x-36 items-center mb-8'>
        <div className='md:h-36 md:w-36 h-24 w-24  cursor-pointer   border-4 border-violet-500  bg-white  hover:bg-violet-500  rounded-full justify-center items-center flex' >
            <img src={reference} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold   md:text-lg ml-3' >Référencement</p>
        <p className='text-gray-400   md:text-lg mt-5 ml-3' >Amélioration du référencement sur les moteurs de recherche, tant sur Google que sur YouTube.</p>

        </div>
    </li>
    
    
   
</ul>
        </div>
        <div className='flex w-[35rem] h-full items-center justify-center'>
            <img src={video2} className="md:h-[30rem] h-[25rem] w-[25rem] md:w-[30rem]" />
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

<div className='h-[17rem] cursor-pointer w-[23rem] gap-y-4 group  drop-shadow-lg  hover:dropdown-xl hover:rounded-xl hover:shadow-lg p-3 flex flex-col'>
<img className='h-24 w-24 self-center' src={Plan} />

<h1 className='text-center text-xl font-semibold mt-5  '>
Strategie</h1>
<p className='text-gray-500 text-center  '>
Stratégie éditoriale.
</p>
</div>
<div className='h-[17rem] cursor-pointer w-[23rem] gap-y-8 group  drop-shadow-lg  hover:dropdown-xl hover:rounded-xl hover:shadow-lg p-3 flex flex-col'>
<img className='h-24 w-24 self-center' src={Integration} />
<h1 className='text-center text-xl font-semibold mt-5  '>
Realisation</h1>
<p className='text-gray-500 text-center  '>

Réalisation et montage des vidéos.
                                       
                                       </p>
</div>
<div className='h-[17rem] cursor-pointer w-[23rem] gap-y-8 group  drop-shadow-lg  hover:dropdown-xl hover:rounded-xl hover:shadow-lg p-3 flex flex-col'>
<img className='h-24 w-24 self-center' src={InT} />

<h1 className='text-center text-xl font-semibold mt-5  '>
Integration</h1>
<p className='text-gray-500 text-center  '>

Intégrationdes vidéos au sein de chaînes Youtube, Dailymotion, etc.
                                       
                        
</p>
</div>
<div className='h-[17rem] cursor-pointer w-[23rem] gap-y-4 group  drop-shadow-lg  hover:dropdown-xl hover:rounded-xl hover:shadow-lg p-3 flex flex-col'>
<img className='h-24 w-24 self-center' src={Seo} />

<h1 className='text-center text-xl font-semibold mt-5  '>
SEO
</h1>
<p className='text-gray-500 text-center  '>

Référencement des vidéos.
                                       
                        
</p>
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

export default Video