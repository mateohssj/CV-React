import React from 'react'

function DoubleArticleHorizontal(props) {
  return (
    <div className='div-main-DoubleArticle'>
        <div>
            <div>
                <h2>Interest</h2>
                <ul>
                    <li>{ props.Div1Li1 }</li>
                    <li>{ props.Div1Li2 }</li>
                    <li>{ props.Div1Li3 }</li>
                    <li>{ props.Div1Li4 }</li>
                </ul>
            </div>
        </div>
        <div>
            <div>
            <h2>Languaje</h2>
                <ul>
                    <li>{ props.Div2Li1 }</li>
                    <li>{ props.Div2Li2 }</li>
                    <li>{ props.Div2Li3 }</li>
                    <li>{ props.Div2Li4 }</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default DoubleArticleHorizontal