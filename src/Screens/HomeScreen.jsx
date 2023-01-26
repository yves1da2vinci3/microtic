import { Image } from '@mantine/core'
import React from 'react'
import Logo from '../assets/Images/Logo.png'
import  {IconMenu2} from '@tabler/icons'
import { BsArrowRightCircleFill,BsArrowDownCircleFill, BsImageAlt, BsPlayBtn, BsFillPlayFill, BsFillArrowRightCircleFill} from "react-icons/bs"
import { HiPlay } from "react-icons/hi"
import { FcAdvertising, FcCameraIdentification, FcPhoneAndroid, FcShop, FcVideoProjector } from "react-icons/fc"
import appIcon from '../assets/Icon/app-development.png'
import webIcon from '../assets/Icon/web-design.png'
import ecommerceIcon from '../assets/Icon/online-shop.png'
import videoEditing from '../assets/Icon/video-marketing.png'
import work from '../assets/Icon/working.png'
import chatIcon from '../assets/Icon/chat.png'
import deliver from '../assets/Icon/delivery.png'
import teamBlack from '../assets/Images/team.jpg'
import gcb from '../assets/Images/1575009761_logo-gcb.png'
import gcb2 from '../assets/Images/305810755_420394953533101_1071117596035726979_n.jpeg'
import gcb3 from '../assets/Images/EDA.jpg'
import gcb4 from '../assets/Images/CHAMPYSECURITE.png'
import gcb5 from '../assets/Images/LOGO.jpg'
import gcb6 from '../assets/Images/Logo2022.png'
import gcb7 from '../assets/Images/ResidenceITLogo.png'
import gcb8 from '../assets/Images/SEXIM.jpg'
import gcb9 from '../assets/Images/SEXIM.jpg'
import gcb10 from '../assets/Images/1575009761_logo-gcb.png'
import { Link } from 'react-router-dom'

import { Carousel } from '@mantine/carousel';
function HomeScreen() {
  return (
    <div  className='min-h-screen  font-["Poppins"]  bg-white overflow-hidden flex flex-col' >
 <section className=" homeGradient background-animate flex flex-col overflow-hidden">
  <section>
    <div className="flex items-center justify-between px-8 py-5">
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
          <Link to ="/" className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
            <a href="#">Accueil</a>
          </Link>
          <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
            <a href="#">Services</a>
          </li>
          <Link to="/reference" className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
            <a href="#">References</a>
          </Link>
          <Link to="/about" className="font-heading text-white hover:text-gray-200 text-lg">
            <a href="#">A propos</a>
          </Link>
        </ul>
      </div>
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <Link to="/askPrice" className="w-auto hidden lg:block">
            <button className="font-heading block py-3.5 px-5 uppercase text-xs tracking-px text-white font-bold bg-white bg-opacity-20 hover:bg-opacity-10 transition ease-in rounded-10">
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
    {/* Drawer */}
  
  </section>
  {/* Header */}
  <div className="relative container mx-auto px-4">
    <img
      className="hidden xl:block absolute bottom-64 left-56 transform -translate-y-4"
      src="gradia-assets/elements/hero/line2.svg"
      alt=""
    />
    <img
      className="hidden xl:block absolute bottom-64 right-56 transform -translate-y-28"
      src="gradia-assets/elements/hero/line3.svg"
      alt=""
    />
    <div className="relative z-10 flex flex-wrap justify-center items-center -m-6 lg:pt-32 pb-36">
      <div className="w-full lg:w-auto p-6 self-start">
        <img
          className="xl:relative xl:-top-20 mx-auto md:h-48 h-24 w-24 md:w-48 rounded-full "
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div className="flex-1 p-6">
        <div className="lg:max-w-2xl mx-auto">
          <h1
            className="mb-6 font-heading text-center text-white text-6xl md:text-9xl xl:text-12xl font-bold"
            contentEditable="false"
          >
            Decouvrez{" "}
          </h1>
          <p
            className="mb-10 font-medium text-lg md:text-xl text-center text-white"
            contentEditable="false"
          >
            microtic , la meilleure entreprise de services numériques avec
            laquelle vous pourrez travailler. Nous fournissons des solutions sur
            mesure pour tous vos besoins numériques.
          </p>
          <button className="group mb-9  relative flex items-center justify-center font-heading px-16 md:px-24 py-5 mx-auto w-full lg:w-auto uppercase text-white text-xs font-semibold tracking-px btn bg-gray-900 overflow-hidden rounded-md">
            <div className="absolute transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-fuchsia" />
            <p className="relative z-10 mr-2" contentEditable="false">
              Commencer maintenant
            </p>
           <BsArrowRightCircleFill size={15} color="white" />
          </button>
          <ul className="flex justify-center">
            <li className="flex items-center mr-6">
              <svg
                className="mr-2"
                width={19}
                height={19}
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <p className="font-heading text-white text-base" />
            </li>
            <li className="flex items-center"></li>
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-auto p-6  self-end">
        <img
          className="xl:relative xl:-bottom-10 pl-3 mx-auto md:h-48 h-24 w-24 md:w-48 mr-4 rounded-full"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
    </div>
  </div>
  <div className='bg-yellow-400 cursor-pointer animate-bounce rounded shadow-md mb-4 w-48 h-12 justify-center items-center flex self-center' >
    <p className='text-yellow-800 font-bold text-lg mr-2'>Nos services</p>
    <BsArrowDownCircleFill size={15} color="#8C5610" />

</div>
</section>


{/* Nos Services */}
<div className='min-h-screen  w-full relative flex flex-col ' >
  <div className='absolute self-center mr-4 h-auto w-full bottom-0' >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF8A73" fill-opacity="1" d="M0,32L60,48C120,64,240,96,360,101.3C480,107,600,85,720,101.3C840,117,960,171,1080,170.7C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
  </div>
    <div className='w-80 m-4' >
    <div className='bg-[#F9BE7A] w-48 h-12 rounded flex items-center justify-center' >
<p className='text-[#ad5135] font-bold text-lg mr-2'>Nos services</p>
</div>
<p className='text-gray-500 font-semibold mt-5'>Microtic veille a offrir les meilleurs services aux clients ,en repondant a leurs besoins et aussi a leur objectif.</p>

    </div>
    
    {/* Cards */}
    <div className='flex p-2  flex-wrap justify-center ' >
        
       
    <div className='h-64 relative  overflow-hidden rounded-lg cursor-pointer cardGradient z-30 group hover:shadow-xl w-[25rem] border m-4 p-5 flex flex-col border-gray-100 shadow-lg shadow-gray-200 drop-shadow-xl bg-white'>
       {/* loobme */}
       <div className='h-80 w-80  group-hover:translate-y-[4rem]  translate-y-[8rem]   group-hover:translate-x-[12.5rem] translate-x-[23rem] transition duration-[700ms] ease-in-out delay-[100ms]  bg-[white] bg-opacity-10  flex justify-center items-center   rounded-full  absolute '>
        <div className='h-48 w-48 rounded-full  flex justify-center items-center  bg-[#FBC996]  '>
          <div className='h-24 w-24 ml-5 rounded-full bg-[#f55f8d]'></div>
        </div>
       </div>
        <div className='w-24  group-hover:bg-[#FA9099] bg-[#FEEFF3] h-24 flex items-center justify-center rounded-full shadow-sm' >

          <img className='h-14 w-14' src={videoEditing} />
        </div>
        <p className='text-xl capitalize font-bold ml-3 mt-1 text-black group-hover:text-white'>vidéo</p>
        <p className='text-gray-400 font-semibold mt-2 z-40 group-hover:text-white '>La vidéo d'entreprise est un moyen de communication  a la fois ludique , innovant et interactif.</p>
    </div>
    <div className='h-64 relative overflow-hidden rounded-lg cursor-pointer cardGradient z-30 group hover:shadow-xl w-[25rem] border m-4 p-5 flex flex-col border-gray-100 shadow-lg shadow-gray-200 drop-shadow-xl bg-white'>
    <div className='h-80 w-80  group-hover:translate-y-[4rem]  translate-y-[8rem]   group-hover:translate-x-[12.5rem] translate-x-[23rem] transition duration-[700ms] ease-in-out delay-[100ms]  bg-[white] bg-opacity-10  flex justify-center items-center   rounded-full  absolute '>
        <div className='h-48 w-48 rounded-full  flex justify-center items-center  bg-[#FBC996]  '>
          <div className='h-24 w-24 ml-5 rounded-full bg-[#f55f8d]'></div>
        </div>
       </div>
        <div className='w-24 group-hover:bg-[#FA9099] bg-[#FEEFF3] h-24 flex items-center justify-center rounded-full shadow-sm' >
        <img className='h-14 w-14' src={webIcon} />

        </div>
        <p className='text-xl capitalize font-bold ml-3 mt-1 text-black group-hover:text-white'>Création de site web</p>
        <p className='text-gray-400 font-semibold mt-2 z-40 group-hover:text-white '>Vous cherchez une agence de creation  graphique pour votre communication visuelle</p>
    </div>
    <div className='h-64 relative overflow-hidden rounded-lg cursor-pointer cardGradient z-30 group hover:shadow-xl w-[25rem] border m-4 p-5 flex flex-col border-gray-100 shadow-lg shadow-gray-200 drop-shadow-xl bg-white'>
    <div className='h-80 w-80  group-hover:translate-y-[4rem]  translate-y-[8rem]   group-hover:translate-x-[12.5rem] translate-x-[23rem] transition duration-[700ms] ease-in-out delay-[100ms]  bg-[white] bg-opacity-10  flex justify-center items-center   rounded-full  absolute '>
        <div className='h-48 w-48 rounded-full  flex justify-center items-center  bg-[#FBC996]  '>
          <div className='h-24 w-24 ml-5 rounded-full bg-[#f55f8d]'></div>
        </div>
       </div>
        <div className='w-24 group-hover:bg-[#FA9099] bg-[#FEEFF3] h-24 flex items-center justify-center rounded-full shadow-sm' >
        <FcCameraIdentification size={40} color="white"  />
        </div>
        <p className='text-xl capitalize font-bold ml-3 mt-1 text-black group-hover:text-white'>Identité visuelle</p>
        <p className='text-gray-400 font-semibold mt-2 z-40 group-hover:text-white '>La vidéo d'entreprise est un moyen de communication  a la fois ludique , innovant et interactif.</p>
    </div>
    <div className='h-64 relative overflow-hidden rounded-lg cursor-pointer cardGradient z-30 group hover:shadow-xl w-[25rem] border m-4 p-5 flex flex-col border-gray-100 shadow-lg shadow-gray-200 drop-shadow-xl bg-white'>
    <div className='h-80 w-80  group-hover:translate-y-[4rem]  translate-y-[8rem]   group-hover:translate-x-[12.5rem] translate-x-[23rem] transition duration-[700ms] ease-in-out delay-[100ms]  bg-[white] bg-opacity-10  flex justify-center items-center   rounded-full  absolute '>
        <div className='h-48 w-48 rounded-full  flex justify-center items-center  bg-[#FBC996]  '>
          <div className='h-24 w-24 ml-5 rounded-full bg-[#f55f8d]'></div>
        </div>
       </div>
        <div className='w-24 group-hover:bg-[#FA9099] bg-[#FEEFF3] h-24 flex items-center justify-center rounded-full shadow-sm' >
        <img className='h-14 w-14' src={ecommerceIcon} />


        </div>
        <p className='text-xl capitalize font-bold ml-3 mt-1 text-black group-hover:text-white'>Creation de sites E-commerce</p>
        <p className='text-gray-400 font-semibold mt-2 z-40 group-hover:text-white '>Offrir à vos clients une meilleure experience en ligne grace a votre solution e-commerce </p>
    </div>
    <div className='h-64 relative overflow-hidden rounded-lg cursor-pointer cardGradient z-30 group hover:shadow-xl w-[25rem] border m-4 p-5 flex flex-col border-gray-100 shadow-lg shadow-gray-200 drop-shadow-xl bg-white'>
    <div className='h-80 w-80  group-hover:translate-y-[4rem]  translate-y-[8rem]   group-hover:translate-x-[12.5rem] translate-x-[23rem] transition duration-[700ms] ease-in-out delay-[100ms]  bg-[white] bg-opacity-10  flex justify-center items-center   rounded-full  absolute '>
        <div className='h-48 w-48 rounded-full  flex justify-center items-center  bg-[#FBC996]  '>
          <div className='h-24 w-24 ml-5 rounded-full bg-[#f55f8d]'></div>
        </div>
       </div>
        <div className='w-24 group-hover:bg-[#FA9099] bg-[#FEEFF3] h-24 flex items-center justify-center rounded-full shadow-sm' >
        <img className='h-14 w-14' src={appIcon} />

        </div>
        <p className='text-xl capitalize font-bold ml-3 mt-1 text-black group-hover:text-white'>Application Mobile</p>
        <p className='text-gray-400 font-semibold mt-2 z-40 group-hover:text-white '>La vidéo d'entreprise est un moyen de communication  a la fois ludique , innovant et interactif.</p>
    </div>
    <div className='h-64 relative overflow-hidden rounded-lg cursor-pointer cardGradient z-30 group hover:shadow-xl w-[25rem] border m-4 p-5 flex flex-col border-gray-100 shadow-lg shadow-gray-200 drop-shadow-xl bg-white'>
    <div className='h-80 w-80  group-hover:translate-y-[4rem]  translate-y-[8rem]   group-hover:translate-x-[12.5rem] translate-x-[23rem] transition duration-[700ms] ease-in-out delay-[100ms]  bg-[white] bg-opacity-10  flex justify-center items-center   rounded-full  absolute '>
        <div className='h-48 w-48 rounded-full  flex justify-center items-center  bg-[#FBC996]  '>
          <div className='h-24 w-24 ml-5 rounded-full bg-[#f55f8d]'></div>
        </div>
       </div>
        <div className='w-24 group-hover:bg-[#FA9099] bg-[#FEEFF3] h-24 flex items-center justify-center rounded-full shadow-sm' >
            <FcAdvertising size={40} color="white"  />
        </div>
        <p className='text-xl capitalize font-bold ml-3 mt-1 text-black  group-hover:text-white'>Publicité en ligne</p>
        <p className='text-gray-400 font-semibold mt-2 z-40 group-hover:text-white '>La vidéo d'entreprise est un moyen de communication  a la fois ludique , innovant et interactif.</p>
    </div>


    </div>

</div>
{/* Work */}
<div className='min-h-[40vh]'>
  <h1 className='text-center text-3xl font-semibold mt-5'>Quelques uns de nos travaux</h1>
  <div className='flex-1 pt-[4rem] items-center'>
  <Carousel
      withIndicators
      height={300}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
      <Carousel.Slide>
        <div className='h-[30rem] bg-red-500 w-full'>
          <img className='h-[30rem] w-full object-fill' src='data:image/jpeg;base64,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' />
        </div>
      </Carousel.Slide>
      <Carousel.Slide><div className='h-[30rem] bg-pink-500 w-full'></div></Carousel.Slide>
      <Carousel.Slide><div className='h-[30rem] bg-yellow-500 w-full'></div></Carousel.Slide>
      <Carousel.Slide>
        <div className='h-[30rem] bg-blue-500 w-full'></div>
      </Carousel.Slide>
      <Carousel.Slide><div className='h-[30rem] bg-slate-500 w-full'></div></Carousel.Slide>
      <Carousel.Slide><div className='h-[30rem] bg-green-500 w-full'></div></Carousel.Slide>
      <Carousel.Slide>
        <div className='h-[30rem] bg-blue-900 w-full'></div>
      </Carousel.Slide>
      <Carousel.Slide><div className='h-[30rem] bg-pink-100 w-full'></div></Carousel.Slide>
      <Carousel.Slide><div className='h-[30rem] bg-yellow-100 w-full'></div></Carousel.Slide>
      <Carousel.Slide>
        <div className='h-[30rem] bg-red-900 w-full'></div>
      </Carousel.Slide>
      <Carousel.Slide><div className='h-[30rem] bg-pink-900 w-full'></div></Carousel.Slide>
      <Carousel.Slide><div className='h-[30rem] bg-yellow-900 w-full'></div></Carousel.Slide>
    </Carousel>
  </div>

</div>
{/* About */}
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
{/* Why us? */}
<section className="relative pt-24 overflow-hidden  bg-black">
  <div className="container mx-auto px-4">
    <h2
      className="mb-4 font-heading font-semibold text-center text-6xl sm:text-7xl text-white"
      contentEditable="false"
    >
      Pourquoi nous choisir?
    </h2>
    <p className="mb-11 text-gray-400 text-center" contentEditable="false" />
    <div className="flex flex-wrap items-center -m-6">
      <div className="w-full lg:w-1/2 p-6">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="lg:max-w-sm p-0.5 bg-gradient-green rounded-10">
              <div
                className="p-7 bg-gradient-black rounded-10"
                contentEditable="false"
              >
                <div className="flex flex-wrap -m-2 mb-4">
                  <div className="w-auto p-2">
                    <img
                    className='h-10 w-10'
                      src={work}
                      alt=""
                    />
                  </div>
                  <div className="w-auto p-2">
                    <h3
                      className="font-heading font-bold text-white text-xl"
                      contentEditable="false"
                    >
                      L’abnegation dans le travail
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400" contentEditable="false">
                  Conscient qu'au dela de la passion ,il faut être muni d'une
                  discipline pour batir. nous engageons à nous impliquer corps
                  et âme dans la realisation de votre projet.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="lg:max-w-sm p-0.5 rounded-10">
              <div className="p-7 rounded-10">
                <div className="flex flex-wrap -m-2 mb-4">
                  <div className="w-auto p-2">
                    <img
                    className='h-10 w-10'
                      src={chatIcon}
                      alt=""
                    />
                  </div>
                  <div className="w-auto p-2" contentEditable="false">
                    <h3
                      className="font-heading font-bold text-white text-xl"
                      contentEditable="false"
                    >
                      toujours disponible
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400" contentEditable="false">
                  Nous serons présents quelque soit l'heure pour discuter avec
                  vous.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="lg:max-w-sm p-0.5 rounded-10">
              <div className="p-7 rounded-10">
                <div className="flex flex-wrap -m-2 mb-4">
                  <div className="w-auto p-2">
                    <img
                    className='h-10 w-10'
                      src={deliver}
                      alt=""
                    />
                  </div>
                  <div className="w-auto p-2">
                    <h3
                      className="font-heading font-bold text-white text-xl"
                      contentEditable="false"
                    >
                      Livraison rapide&nbsp;
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400" contentEditable="true">
                  Enfin ,nous nous constituons d'une&nbsp; equipe jeune et
                  talenteuse, qui a un seul objectif en tête ,repond aux
                  attentes du client dans les plus bref delais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-6">
        <img src="https://shuffle.dev/gradia-assets/images/features/connects.png" alt="" />
      </div>
    </div>
  </div>
</section>
{/* Our Clients */}
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

  <div className='bg-yellow-400 cursor-pointer animate-bounce rounded shadow-md mb-4 w-48 h-12 justify-center items-center flex self-end' >
    <p className='text-yellow-800 font-bold text-lg mr-2'>Voir la suite</p>
    <BsFillArrowRightCircleFill size={15} color="#8C5610" />

</div>
</div>
{/* Nos Technologies */}
<div className='min-h-[80vh] bg-white flex flex-col p-4 '>
  <h1 className='text-center text-[#233653] font-bold mt-4' >Nos technologies</h1>

  <div className='flex-1  flex flex-row items-center justify-center flex-wrap   p-4'>
    <div className='w-56 m-4 h-48    flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src="data:image/png;base64,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" />
    </div>
    <div className='w-56 m-4 h-48    flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src="data:image/png;base64,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" />
    </div>
    <div className='w-56 m-4 h-48    flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src="data:image/png;base64,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" />
    </div>
    <div className='w-56 m-4 h-48    flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src="data:image/png;base64,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" />
    </div>
    <div className='w-56 m-4 h-48    flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src="data:image/png;base64,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" />
    </div>
    <div className='w-56 m-4 h-48    flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src="data:image/png;base64,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" />
    </div>
    <div className='w-56 m-4 h-48    flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src="data:image/png;base64,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" />
    </div>
    <div className='w-56 m-4 h-48    flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src="data:image/png;base64,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" />
    </div>
    <div className='w-56 m-4 h-48    flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src="data:image/png;base64,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" />
    </div>
    <div className='w-56 m-4 h-48    flex justify-center items-center bg-white'>
      <img className='h-36 w-36' src="data:image/png;base64,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" />
    </div>
  </div>

 
</div>
{/* Footer */}
<section className="relative py-24 overflow-hidden">
  <img
    className="absolute bottom-0 left-0"
    src="gradia-assets/elements/footers/radial.svg"
    alt=""
  />
  <div className="relative z-10 container mx-auto px-4">
    <div className="flex flex-wrap -m-6">
      <div className="w-full md:w-1/2 lg:w-5/12 p-6">
        <div className="flex flex-col justify-between h-full">
          <div>
            <img
              className="mb-16 h-24"
              src="https://static.shuffle.dev/uploads/files/de/de01ec5bf4d9796145533f1f5924c22fe5aedfae/LOGO-MICROTIC-03-04-2022.png"
              alt=""
              contentEditable="false"
            />
          </div>
          <div>
            <p className="text-gray-600 text-sm" contentEditable="false">
              © Copyright 2023. droits réservés a microtic
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/12 p-6" contentEditable="false">
        <div className="h-full">
          <h3
            className="mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px"
            contentEditable="false"
          >
            pages
          </h3>
          <ul>
            <li className="mb-4">
              <a
                className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                href="#"
                contentEditable="false"
              >
                Accueil
              </a>
            </li>
            <li className="mb-4">
              <a
                className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                href="#"
                contentEditable="false"
              >
                A propos
              </a>
            </li>
            <li className="mb-4">
              <a
                className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                href="#"
                contentEditable="false"
              >
                Demande de devis
              </a>
            </li>
            <li contentEditable="false">
              <a
                className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                href="#"
                contentEditable="true"
              >
                Références&nbsp;
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/12 p-6">
        <div className="h-full">
          <h3
            className="mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px"
            contentEditable="false"
          >
            services
          </h3>
          <ul>
            <li className="mb-4">
              <a
                className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                href="#"
                contentEditable="false"
              >
                web development
              </a>
            </li>
            <li className="mb-4" contentEditable="false">
              <a
                className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                href="#"
                contentEditable="false"
              >
                Mobile development
              </a>
            </li>
            <li className="mb-4">
              <a
                className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                href="#"
                contentEditable="false"
              >
                Montage vidéo&nbsp;
              </a>
            </li>
            <li>
              <a
                className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                href="#"
                contentEditable="false"
              >
                Publicité en ligne &nbsp;
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-3/12 p-6">
        <div className="h-full">
          <h3 className="mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">
            Contacts
          </h3>
          <ul>
            <li className="mb-4">
              <a
                className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                href="#"
              >
                microtic@gmail.com
              </a>
            </li>
            
            <li>
              <a
                className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                href="#"
              >
                (+225) 0140117596
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

       </div>

  )
}

export default HomeScreen