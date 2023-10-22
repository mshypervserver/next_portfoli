"use client"
import React, {useState, useTransition} from 'react'
import develop from '../icons/develop.svg'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Power Apps",
        id:"Power Apps",
        content: (
            <ul className='list-disc pl-2'>
                <li>Canvas Apps</li>
                <li>Model Driven Apps</li>
                <li>Portal Apps</li>
                <li>Desktop/Web Apps</li>
                <li>Mobile Apps</li>
            </ul>
        )
    },
    {
        title: "Power Automate",
        id:"Power Automate",
        content: (
            <ul className='list-disc pl-2'>
                <li>Web Automation</li>
                <li>Desktop Automation</li>
                <li>Scripts Automation</li>
            </ul>
        )
    }
    ,
    {
        title: "SSIS Package",
        id:"SSIS Package",
        content: (
            <ul className="list-disc pl-2">
                <li>Packages of any complexity</li>
                <li>C# scripts</li>
                <li>SQL queries</li>
            </ul>
        )
    }
    ,
    {
        title: "SQL query",
        id:"SQL query",
        content: (
            <ul className='list-disc pl-2'>
                <li>SQL queries of any complexity</li>
                <li>Store procedures</li>
                <li>SQL Jobs</li>
            </ul>
        )
    }
]
const About=()=> {
    const [tab, setTab] = useState('Power Apps')
    const [ isPending, startTransition] = useTransition()


    const handleTabChange = (id) => {
        
        startTransition(() => {
            setTab(id)
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src={develop} alt='icon' width={500} height={300}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold ml-0 mb-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                    About Us
            </h2>
            <p className='text-base lg:text-lg justify text-justify'>At <bold className="bg-gradient-to-r from-purple-400 to-pink-600">X.AI</bold>, we specialize in helping businesses automate their business processes and streamline their workflow using Power Apps, Power Automate, SQL, and SSIS automation. We offer a wide range of services, including:
                Power Apps app development
                Power Automate workflow creation
                SQL and SSIS automation
                Queries and data analysis
                Training and support
                Our team of experienced and certified professionals has a deep understanding of the Microsoft Power Platform and how it can be used to solve real-world business problems. We are committed to providing our clients with high-quality, cost-effective solutions that meet their specific needs.
                We believe that automation is the key to unlocking efficiency, productivity, and profitability. By automating your repetitive tasks and business processes, you can free up your employees to focus on more strategic and value-added activities.
</p>
 <div className='flex flex-row justify-start mt-8'>
    <TabButton selectTab={() => handleTabChange("Power Apps")} active={tab === "Power Apps"}>
       {" "} Power Apps{" "}
        </TabButton>
    <TabButton selectTab={() => handleTabChange("Power Automate")} active={tab === "Power Automate"}>
    {" "}Power Automate{" "}
        </TabButton>
    <TabButton selectTab={() => handleTabChange("SSIS Package")} active={tab === "SSIS Package"}>
    {" "}SSIS Package{" "}
        </TabButton>
        <TabButton selectTab={() => handleTabChange("SQL query")} active={tab === "SQL query"}>
    {" "}SQL query{" "}
        </TabButton>
 </div>
 <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        </div>
        </section>
  )
}


export default About
