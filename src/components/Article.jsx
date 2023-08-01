import React from 'react'

export const Article = (props) => {
  return (
    <div className={props.class}>
        <h2>{props.tittle}</h2>
        <ul>
            <li>{props.ul1}</li>
            <li>{props.ul2}</li>
            <li>{props.ul3}</li>
        </ul>
    </div>
  )
}
