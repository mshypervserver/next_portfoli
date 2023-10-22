<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
const EmailForm = () => {
  return (
<main className='flex min-h-screen flex-col bg-[#121212]'>
<Navbar />
<section className='grid md:grid-cols-1 my-15 md:my-12 md:mt-0 py-24 gap-4 bg-[#121212] w500 '>
       
        <div className='text-center flex flex-col items items-center '>
        <span className=' text-xl font-bold text-transparent ml-0 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Let's Connect</span>
            <p className='text-[#ADB7BE] mb-4 '>
                {" "}
                Schedule time with the <bold className="text-xl font-bold text-transparent ml-0 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">X.AI</bold> team to: <br/>

            </p>
            <ul className='list-disc pl-4 text-[#ADB7BE] text-left '>
                    <li>Discuss your project</li>
                    <li>Get a quote</li>
                    <li>Get a demo</li> 

                </ul>
            <div className='socials flex flex-row gap-2'>

            </div>
        </div>
        <div className='flex justify-center items-center '> 
            <form className='flex flex-col  max-w-lg'>
                <div className='mb-6'>
                <label className='text-white block mb-2  text-sm font-medium ' htmlFor='email' >Your Name</label>
                <input 
                    type='name' 
                    id='name' 
                    required 
                    placeholder='What is your name?' 
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 '/>
               
                </div>
                <div className='mb-6'>
                <label className='text-white block mb-2  text-sm font-medium' htmlFor='email' >Your Email</label>
                <input 
                    type='email' 
                    id='email' 
                    required 
                    placeholder='janedoe@gmai.com' 
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 '/>
               
                </div>
                <div className='mb-6'>
                 <label className='text-white block mb-2 text-sm font-medium' htmlFor='email' >Subject</label>
                    <input 
                    type='subject' 
                    id='subject' 
                    required 
                    placeholder='How can we help you?' 
                    className='bg-[#18191E] border border-[#33353F]  placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
            
                </div>
                <div className='mb-6'>
                <lable className='text-white block mb-2 text-sm font-medium' htmlFor='message' >Message</lable>
                <textarea 
                    name="message" 
                    id="message" 
                    placeholder='Leave you message here'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            >

                </textarea>
                </div>
                <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                    Send Message
                </button>
            </form>
        </div>
    </section>
</main>
    
  )
}

=======
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
const EmailForm = () => {
  return (
<main className='flex min-h-screen flex-col bg-[#121212]'>
<Navbar />
<section className='grid md:grid-cols-1 my-15 md:my-12 md:mt-0 py-24 gap-4 bg-[#121212] w500 '>
       
        <div className='text-center flex flex-col items items-center '>
        <span className=' text-xl font-bold text-transparent ml-0 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Let's Connect</span>
            <p className='text-[#ADB7BE] mb-4 '>
                {" "}
                Schedule time with the <bold className="text-xl font-bold text-transparent ml-0 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">X.AI</bold> team to: <br/>

            </p>
            <ul className='list-disc pl-4 text-[#ADB7BE] text-left '>
                    <li>Discuss your project</li>
                    <li>Get a quote</li>
                    <li>Get a demo</li> 

                </ul>
            <div className='socials flex flex-row gap-2'>

            </div>
        </div>
        <div className='flex justify-center items-center '> 
            <form className='flex flex-col  max-w-lg'>
                <div className='mb-6'>
                <label className='text-white block mb-2  text-sm font-medium ' htmlFor='email' >Your Name</label>
                <input 
                    type='name' 
                    id='name' 
                    required 
                    placeholder='What is your name?' 
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 '/>
               
                </div>
                <div className='mb-6'>
                <label className='text-white block mb-2  text-sm font-medium' htmlFor='email' >Your Email</label>
                <input 
                    type='email' 
                    id='email' 
                    required 
                    placeholder='janedoe@gmai.com' 
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 '/>
               
                </div>
                <div className='mb-6'>
                 <label className='text-white block mb-2 text-sm font-medium' htmlFor='email' >Subject</label>
                    <input 
                    type='subject' 
                    id='subject' 
                    required 
                    placeholder='How can we help you?' 
                    className='bg-[#18191E] border border-[#33353F]  placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
            
                </div>
                <div className='mb-6'>
                <lable className='text-white block mb-2 text-sm font-medium' htmlFor='message' >Message</lable>
                <textarea 
                    name="message" 
                    id="message" 
                    placeholder='Leave you message here'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            >

                </textarea>
                </div>
                <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                    Send Message
                </button>
            </form>
        </div>
    </section>
</main>
    
  )
}

>>>>>>> 378cc9e485104b3e6d2f04a9c94101fadd100d80
export default EmailForm