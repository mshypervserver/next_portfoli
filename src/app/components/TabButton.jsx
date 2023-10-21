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

export default TabButton