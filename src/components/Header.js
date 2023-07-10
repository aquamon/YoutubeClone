import React from 'react'
import Hamburger from '../../src/assets/images/hamburger.png'
import YoutubeLogo from '../../src/assets/images/yout.png'
const Header = () => {
  return (
    <div className='p-2 m-2 grid grid-flow-col shadow-lg'>
        <div className='flex col-span-1'>
            <img className='h-7' alt="hamburger-icon" src={Hamburger}/>
            <img className='h-8 mx-2' alt="youtube-logo" src={YoutubeLogo}/>
        </div>
        <div className='col-span-10'>
            <input className="p-2 w-1/2 ml-20  border border-gray-400 rounded-l-full" type="text"/>
            <button className='px-5 py-2 border border-gray-400  rounded-r-full bg-gray-100'>🔍</button>
        </div>
        <div className='col-span-1'>
            <img  className="h-8" alt="user-icon" src="https://cdn-icons-png.flaticon.com/512/552/552721.png"/>
        </div>
    </div>
  )
}

export default Header 