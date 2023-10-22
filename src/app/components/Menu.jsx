<<<<<<< HEAD
import React from 'react'
import Navlink from './Navlink'

const Menu =({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index) => 
        (<li key={index}>
            <Navlink href={link.path} title={link.title}/>
        </li>))}</ul>
  )
}

=======
import React from 'react'
import Navlink from './Navlink'

const Menu =({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index) => 
        (<li key={index}>
            <Navlink href={link.path} title={link.title}/>
        </li>))}</ul>
  )
}

>>>>>>> 378cc9e485104b3e6d2f04a9c94101fadd100d80
export default Menu