import React from 'react'
import { CV_Data } from '../data.mjs';
import '/src/App.css'


function Header() {
  return (
    <header className='header-cv'>
        <img src="public\Messi.webp" alt="messi" width={100} height={100}/>
        <div>
          <h2>{CV_Data.data.name}</h2>
          <ul>
            <li>{CV_Data.data.phone}</li>
            <li>{CV_Data.data.website}</li>
            <li>{CV_Data.data.address}</li>
          </ul>
        </div>
    </header>
  )
}

export default Header