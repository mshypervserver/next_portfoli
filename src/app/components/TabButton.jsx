<<<<<<< HEAD
import React from 'react'

function TabButton({active, selectTab, children }) {
    const buttonClasses = active ? 'text-[#ADB7BE] border-b border-purple-500' : 'text-white'

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
        </p>
 
 
    </button>)
}

=======
import React from 'react'

function TabButton({active, selectTab, children }) {
    const buttonClasses = active ? 'text-[#ADB7BE] border-b border-purple-500' : 'text-white'

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
        </p>
 
 
    </button>)
}

>>>>>>> 378cc9e485104b3e6d2f04a9c94101fadd100d80
export default TabButton