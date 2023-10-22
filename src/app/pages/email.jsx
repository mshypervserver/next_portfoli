import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Email = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                We'd love to hear from you. <br/>
            </p>
            <div className='socials flex flex-row gap-2'>

            </div>
        </div>
        <div>
            <form className='flex flex-col'>
                <div className='mb-6'>
                <label className='text-white block mb-2  text-sm font-medium' htmlFor='email' >Your Name</label>
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
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
            
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
            </form>
        </div>
    </section>
  )
}

export default Email