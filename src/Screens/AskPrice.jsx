import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavContext } from '../Context/NavContext'
import Drawer from '../Layout/Drawer'
import Footer from '../Layout/Footer'
import NavBar from '../Layout/NavBar'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import {toast} from 'react-toastify'
function AskPrice() {
  const { open} = useContext(NavContext)
  const LastNameInput = useRef(null)
  const FirstNameInput = useRef(null)
  const EmailInput = useRef(null)
  const descriptionInput = useRef(null)
  const serviceSelect = useRef(null)
  const Navigate  = useNavigate()
  const askPriceHandler = async (e) => { 
    const templateParams = {
      lastName:LastNameInput.current.value,
      firstName:FirstNameInput.current.value,
      clientEmail:EmailInput.current.value,
    
      description:descriptionInput.current.value,
      serviceName: serviceSelect.current.value,
     
    };
    console.log(templateParams)
    emailjs.send('service_w838kjy','template_mx224kl', templateParams, 'AyFzL0yXEHeNeJXaD')
    .then((response) => {
      toast.success(` message envoyé avec succes ,microtic vous revient bientot !`         , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true, 
        progress: undefined,
        });
        Navigate("/")
    }, (err) => {
      toast.error(` il y a un soucis lors de l'envoi !`         , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true, 
        progress: undefined,
        });
    });


   
 

   }
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
  <input ref={FirstNameInput} className='h-12 bg-gray-100 border-2 p-2  w-full  flex-1' placeholder='prenom'/>
  <input ref={LastNameInput} className='h-12 bg-gray-100 border-2 p-2  w-full flex-1 ' placeholder='nom de famille'/>
</div>
{/* Email */}
<input ref={EmailInput} className='h-12 bg-gray-100 border-2 p-2 w-full ' placeholder='Email professionel'/>
<h1 className=' text-[#233653]  text-lg font-bold ' >Decrivez votre projet</h1>
{/* Select */}
<select ref={serviceSelect} className='h-12 bg-gray-100 border-2 p-2 w-full'>
  <option value="site web">Site web</option>
  <option value="Site Ecommerce" >Site Ecommerce</option>
  <option value="Application Mobile">Application Mobile</option>
  <option value="Publicite en ligne">Publicite en ligne</option>
  <option value="Identite Visuelle">Identite Visuelle</option>
  <option value="Vidéo">Vidéo</option>
  <option value="Impremérie"> Impremérie</option>
  <option value="Enseignes Lumineuse"> Enseignes Lumineuse</option>
  <option value="Revêtement De Façade">  Revêtement De Façade</option>
  <option value="Construction Métallique">  Construction Métallique</option>
</select>
{/* description */}
<textarea ref={descriptionInput}  className='flex-1 bg-gray-100 border-2 p-2' placeholder='entrez votre description ici  ' ></textarea>

{/* Boutton */}
<button onClick={()=> askPriceHandler()} className="font-heading block py-3.5 px-5  self-end uppercase text-xs tracking-px text-white font-bold bg-[#FEC73C]  hover:bg-yellow-700 transition ease-in rounded-10">
           Valider la Demande 
          </button>
    </div>
{/* Footer */}
<Footer/>
    </div>
  )
}

export default AskPrice