import React, { useContext } from 'react'
import { NavContext } from '../../Context/NavContext'
import Drawer from '../../Layout/Drawer'
import NavBar from '../../Layout/NavBar'
import ecommerce from '../../assets/Icon/ecom.jpg'
import ecomm from '../../assets/Icon/ecommerce.jpg'
import { BsCheckLg } from 'react-icons/bs'
import sourceCode from '../../assets/Images/source-code.png'
import Img2 from '../../assets/Images/nanotechnology.png'
import Img3 from '../../assets/Images/developing.png'
import codeing from '../../assets/Images/coding.png'
import formation from '../../assets/Images/online-training.png'
import deployment from '../../assets/Images/deployment.png'
import { Link } from 'react-router-dom'
import Mobile from '../../assets/Icon/app-development.png'
import RocketIcon from '../../assets/Icon/rocket.png'
import customerService from '../../assets/Icon/customer-service.png'
import analytics from '../../assets/Icon/analytics.png'
import support from '../../assets/Icon/technical-support.png'
import AD from '../../assets/Icon/project.png'
import Seo from '../../assets/Icon/search-engine-optimization.png'
import update from '../../assets/Icon/software.png'
import foncational from '../../assets/Icon/functional.png'
import graphic from '../../assets/Icon/graph-report.png'
import { Carousel } from '@mantine/carousel'
import CarouselItem from '../../Components/CarouselItem'
import useMediaQuery from '../../Hooks/UseMediaQuey'
import Footer from '../../Layout/Footer'
function Ecommerce() {
  const {open} = useContext(NavContext)
  const matches = useMediaQuery('(min-width: 768px)')

  return (
    <div className='font-["Poppins"] min-h-screen bg-white flex flex-col' >
        <NavBar /> 
      { open && <Drawer /> }
      {/* Descrption */}
      <div className='min-h-[60vh] md:grid md:grid-cols-2  ' >
        <div className=' flex gap-y-4 flex-col p-10 md:p-14'>
  <h1 className='text-left text-[#233653]  text-3xl font-bold mt-4' >Développez votre activité grâce à un site internet.</h1>
<p className='text-gray-400 text-lg' >Non seulement nous créons de beaux sites, mais nous construisons des marques !</p>
<p className='text-gray-400 text-lg' >Nous souhaitons aider votre entreprise à se développer avec notre gamme de services conçue pour vous donner un avantage concurrentiel.</p>

{/* List  */}
<ul className='flex flex-col list-none' >
    <li className='flex items-center mb-8'>
        <div className='h-8 w-8 bg-gray-100 hover:bg-[#F9BE7A] rounded-full justify-center items-center flex' >
            <BsCheckLg size={17}  />
        </div>
        <p className='text-gray-400 text-lg ml-3' >Conception sur-mesure.</p>
    </li>
    <li className='flex items-center mb-8'>
        <div className='h-8 w-8 bg-gray-100 hover:bg-[#F9BE7A] rounded-full justify-center items-center flex' >
            <BsCheckLg size={17}  />
        </div>
        <p className='text-gray-400 text-lg ml-3' >Optimisation pour le référencement naturel.</p>
    </li>
    <li className='flex items-center mb-8'>
        <div className='h-8 w-8 bg-gray-100 hover:bg-[#F9BE7A] rounded-full justify-center items-center flex' >
            <BsCheckLg size={17}  />
        </div>
        <p className='text-gray-400 text-lg ml-3' >Statistiques des visites.</p>
    </li>
    <li className='flex items-center mb-8'>
        <div className='h-8 w-8 bg-gray-100 hover:bg-[#F9BE7A] rounded-full justify-center items-center flex' >
            <BsCheckLg size={17}  />
        </div>
        <p className='text-gray-400 text-lg ml-3' > Version mobile du site et bien d’autres…!</p>
    </li>
</ul>
        </div>
        <div className='flex items-center justify-center'>
            <img src={ecommerce} className="h-[30rem] w-[30rem] " />
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
        <p className='text-[#233653] font-semibold  text-md md:text-lg ml-3' >Étude du projet</p>
        <p className='text-gray-400  text-md md:text-lg mt-5 ml-3' >Identification de vos besoins avec une définition des objectifs.</p>

        </div>
    </li>
    <li className='flex  md:translate-x-36 flex-row items-center mb-8'>
        <div className='md:h-36 md:w-36 h-24 w-24  cursor-pointer   border-4 border-green-500  bg-white  hover:bg-green-500  rounded-full justify-center items-center flex' >
            <img src={Img2} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold  text-md md:text-lg ml-3' >Conception de la maquette</p>
        <p className='text-gray-400  text-md md:text-lg mt-5 ml-3' >Création graphique : couleurs, typographie, images …etc.</p>

        </div>
    </li>
    <li className='flex  flex-row items-center mb-8'>
        <div className='md:h-36 md:w-36 h-24 w-24  cursor-pointer   border-4 border-yellow-500  bg-white  hover:bg-yellow-500  rounded-full justify-center items-center flex' >
            <img src={codeing} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold  text-md md:text-lg ml-3' >Développement</p>
        <p className='text-gray-400  text-md md:text-lg mt-5 ml-3' >Création technique du site et des fonctionnalités et insertion du contenu.</p>

        </div>
    </li>
    <li className='flex flex-row  items-center mb-8'>
        <div className='md:h-36 md:w-36 h-24 w-24  cursor-pointer   border-4 border-pink-500  bg-white  hover:bg-pink-500  rounded-full justify-center items-center flex' >
            <img src={deployment} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold  text-md md:text-lg ml-3' >Mise en ligne</p>
        <p className='text-gray-400  text-md md:text-lg mt-5 ml-3' >Lancement du site web sur le serveur pour le rendre accessible à tous.</p>

        </div>
    </li>
    <li className='flex flex-row md:translate-x-36 items-center mb-8'>
        <div className='md:h-36 md:w-36 h-24 w-24  cursor-pointer   border-4 border-violet-500  bg-white  hover:bg-violet-500  rounded-full justify-center items-center flex' >
            <img src={formation} className="md:h-16 h-8 " />
        </div>
        <div className='flex flex-col flex-1'>
        <p className='text-[#233653] font-semibold   md:text-lg ml-3' >Formation</p>
        <p className='text-gray-400   md:text-lg mt-5 ml-3' >Formation du client à la mise à jour de son site.</p>

        </div>
    </li>
    
    
   
</ul>
        </div>
        <div className='flex w-[35rem] h-full items-center justify-center'>
            <img src={ecomm} className="md:h-[30rem] h-[25rem] w-[25rem] md:w-[30rem]" />
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

<div className='h-[30rem] cursor-pointer w-[23rem] gap-y-4 group  drop-shadow-lg  hover:dropdown-xl hover:rounded-xl hover:shadow-lg p-3 flex flex-col'>
<img className='h-24 w-24 self-center' src={Mobile} />

<h1 className='text-center text-xl font-semibold mt-5  '>
Version mobile (responsive design)</h1>
<p className='text-gray-500 text-center  '>
Pour un site accessible n’importe où et n’importe quand, nous développons la version mobile pour que l’affichage de votre contenu soit optimisé pour l’ensemble des smartphones et tablettes du marché.</p>
</div>
<div className='h-[30rem] cursor-pointer w-[23rem] gap-y-8 group  drop-shadow-lg  hover:dropdown-xl hover:rounded-xl hover:shadow-lg p-3 flex flex-col'>
<img className='h-24 w-24 self-center' src={update} />
<h1 className='text-center text-xl font-semibold mt-5  '>
Mises à jour intuitives</h1>
<p className='text-gray-500 text-center  '>
Que ce soit pour publier l’actualité de votre entreprise ou annoncer vos promotions, vous allez avoir la possibilité de vous exprimer sans limites, car nous mettons à votre disposition un outil vous offrant la possibilité de créer autant de pages que vous le souhaitez.</p>
</div>
<div className='h-[30rem] cursor-pointer w-[23rem] gap-y-8 group  drop-shadow-lg  hover:dropdown-xl hover:rounded-xl hover:shadow-lg p-3 flex flex-col'>
<img className='h-24 w-24 self-center' src={Seo} />

<h1 className='text-center text-xl font-semibold mt-5  '>
Optimisation pour les moteurs de recherche (SEO)</h1>
<p className='text-gray-500 text-center  '>

Un site internet sans audience est inutile aussi beau soit-il. C’est pourquoi nous optimisons l’architecture et le contenu de votre site pour qu’il soit correctement visité et indexé par les moteurs de recherche.</p>
</div>
<div className='h-[30rem] cursor-pointer w-[23rem] gap-y-4 group  drop-shadow-lg  hover:dropdown-xl hover:rounded-xl hover:shadow-lg p-3 flex flex-col'>
<img className='h-24 w-24 self-center' src={analytics} />

<h1 className='text-center text-xl font-semibold mt-5  '>
Statistiques des visites
</h1>
<p className='text-gray-500 text-center  '>Découvrez enfin qui sont réellement vos visiteurs, quelles sont les pages les plus visités afin d’optimiser les performances de votre site web.</p>
</div>
<div className='h-[30rem] cursor-pointer w-[23rem] gap-y-8 group  drop-shadow-lg  hover:dropdown-xl hover:rounded-xl hover:shadow-lg p-3 flex flex-col'>
<img className='h-24 w-24 self-center' src={customerService} />
<h1 className='text-center text-xl font-semibold mt-5  '>
Des modules pour attirer encore plus de clients
</h1>
<ul className='list-none text-left text-gray-500 '>
    <li>-Chat en ligne</li>
    <li>-Module de prise de rendez-vous</li>
    <li>-Module d'envoi de newsletter</li>
    <li>-Plan d'acces a google map</li>
    <li>-et bien d'autre...</li>
</ul>
</div>
<div className='h-[30rem] cursor-pointer w-[23rem] gap-y-8 group  drop-shadow-lg  hover:dropdown-xl hover:rounded-xl hover:shadow-lg p-3 flex flex-col'>
<img className='h-24 w-24 self-center' src={AD} />

<h1 className='text-center text-xl font-semibold mt-5  '>
Conseil et suivi de projet
</h1>
<p className='text-gray-500 text-center  '>Nous mettons à votre disposition un interlocuteur unique qui vous accompagne tout au long de votre projet, avec le souci de vous apporter une qualité relationnelle exemplaire et un échange constant.</p>
</div>
<div className='h-[30rem] cursor-pointer w-[23rem] gap-y-8 group  drop-shadow-lg  hover:dropdown-xl hover:rounded-xl hover:shadow-lg p-3 flex flex-col'>
<img className='h-24 w-24 self-center' src={foncational} />

<h1 className='text-center text-xl font-semibold mt-5  '>

Plus de 350 fonctionnalités E-commerce
</h1>

<ul className='list-none text-left text-gray-500 '>
    <li>-Gestion des produits</li>
    <li>-Promotion des ventes</li>
    <li>-Gestion des clients</li>
    <li>-Gestion du stock</li>
    <li>-Statistiques avancées</li>
    <li>-Système de paiement</li>
    <li>-Outils webmarketing</li>
    <li>-Newsletter</li>
</ul>
</div>
<div className='h-[30rem] cursor-pointer w-[23rem] gap-y-8 group  drop-shadow-lg  hover:dropdown-xl hover:rounded-xl hover:shadow-lg p-3 flex flex-col'>
<img className='h-24 w-24 self-center' src={graphic} />

<h1 className='text-center text-xl font-semibold mt-5  '>
Charter graphique
</h1>
<ul className='list-none text-left text-gray-500 '>
    <li>-Charte personnalisée et professionnelle</li>
    <li>-Image de marque mémorable</li>
    <li>-Choix pertinent des polices, couleurs et images</li>
    <li>-Créations graphiques en corrélation avec votre cible</li>
    <li>-Design innovant</li>
</ul>
</div>

</div>
</div>
      </div>
      <section className="relative pt-28 pb-36 bg-gray-100 overflow-hidden">
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
</section>
{/* Client */}
<Footer />
    </div>
  )
}

export default Ecommerce