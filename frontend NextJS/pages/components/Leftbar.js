import React from 'react';
import Link from 'next/link';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'


const icons = [
  {
    id: "1",
    type: "github",
    link: "https://github.com/harshal255",
    icon: FiGithub
  },
  {
    id: "2",
    type: "instagram",
    link: "https://www.instagram.com/undefined_harshal",
    icon: FaInstagram
  },
  {
    id: "3",
    type: "LinkedIn",
    link: "https://www.linkedin.com/in/harshal-kahar-4115a321b",
    icon: FaLinkedinIn
  },
  {
    id: "4",
    type: "twitter",
    link: "https://twitter.com/harshalkahar389",
    icon: FiTwitter
  },
]

const Leftbar = () => {



  const iconsyle = "hover:scale-125 transition-transform  lg:text-4xl text-3xl rounded-full  border-secondary p-1 "
  return (

    <div className={`hidden lg:flex text-2xl fixed flex-col bottom-5 left-5 z-20`}>
      {
        icons.map((element) => {
          const IconComponent = element.icon; // Dynamically assign the icon component based on element.icon
          return (
            <div className='lg:my-4 my-2 mx-auto' key={element.id}>

              <Link href={element.link} target='blank'>
                <IconComponent className="text-secondary hover:text-primary duration-300"></IconComponent>
              </Link>

            </div>
          )
        })
      }

    </div>
  )
}

export default Leftbar

