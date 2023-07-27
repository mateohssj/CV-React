import React from 'react'
import { CV_Data } from '../data.mjs'

function Profile() {
  return (
    <div className='header-cv'>
    <div>
      <h2>Profile</h2>
      <ul>
        <li>{CV_Data.data.Profile}</li>
        <li>{CV_Data.data.avatar}</li>
        <li>{CV_Data.data.certificate[0].description}</li>
      </ul>
    </div>
</div>
  )
}

export default Profile