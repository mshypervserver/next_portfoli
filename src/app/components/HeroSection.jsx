"use client"
import React from 'react'
import Image from 'next/image'
import logo from '../icons/logo.svg'
import { TypeAnimation } from 'react-type-animation';


export const HeroSection = () => {
  return (
    <section className="lg:py-13 lg:mb-20" >
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold">
                    <span className='text-transparent ml-0 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>App Makers {" "} </span>
                    <br/>
                    We do {"    "} <br></br>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Power Apps',
                            3000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Power Automate',
                            3000,
                            'SSIS Automation',
                            3000,
                            'SQL Store procedures',
                            3000,


                        ]}
                        wrapper="span"
                        speed={2}
                        //   style={{ fontSize: '40px', display: 'inline-block' }}
                        repeat={Infinity}
                        position="absolute"
                        />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                Your One-Stop place for Power Apps, Power Automate, SQL, and SSIS Automation. <br/>

We help you automate your business processes and streamline your workflow, so you can focus on what's important
                </p>
                <div>
                    <button 
                    className='px-6 py-3 w-full mt-5 rounded-full sm:w-fit mr-4 bg-white hover:bg-slate-200 text-black'>
                        {/* bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 */}
                        CONTACT US
                    </button>
                    <button 
                    className='px-6 py-3 w-full rounded-full bg- sm:w-fit mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>
                       <span className='block bg-[#121212] hover:gb-slate-800 rounded-full px-5'></span> What we do
                    </button>
                </div>
            </div>
            <div className='col-span-5'>
                <div className='rounded-full bg-[#dbd9d9] w-[350px] h-[350px] relative mt-5'> 
                {/* <div className='rounded-full bg-[#181818] w-[350px] h-[350px] relative'>  */}
                    <Image 
                        src={logo} 
                        alt='logo' 
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        
                        width={300} 
                        height={300}/>
                </div>
            </div>
        </div>
       </section>
  )
}




export default HeroSection