import React from 'react'
import { CV_Data } from '../data.mjs'

function Experience() {
  return (
    <div className='header-cv'>
        <div>
            <h2>Experience</h2>
            <div>
                <ul>
                    <li>{CV_Data.data.experience[0].company}</li>
                    <li>{CV_Data.data.experience[0].jobDescription}</li>
                </ul>
                <ul>
                    <li>{CV_Data.data.experience[0].startDate}</li>
                    <li>{CV_Data.data.experience[0].endDate}</li> 
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience