import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  
  if(!isMenuOpen) return null;
  
  return (
    <div className='shadow-lg w-48 p-5'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Comedy</li>
        <li>News</li>
        <li>Finance</li>
        <li>Travel</li>
      </ul>
    </div>
  )
}

export default Sidebar