<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'

 const Navlink = ({ href, title }) => {

  return (
    <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
  >
    {title}
  </Link>
  )
}


=======
import React from 'react'
import Link from 'next/link'

 const Navlink = ({ href, title }) => {

  return (
    <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
  >
    {title}
  </Link>
  )
}


>>>>>>> 378cc9e485104b3e6d2f04a9c94101fadd100d80
export default Navlink;