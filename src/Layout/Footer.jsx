import React from 'react'

function Footer() {
  return (
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
                  microtic.ci@gmail.com
                </a>
              </li>
              
              <li>
                <a
                  className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  +(225) 0153625618
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer