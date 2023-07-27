import React from 'react';
import { CV_Data } from './data.mjs';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import DoubleArticleHorizontal from './components/DoubleArticleHorizontal';

function App() {
  return (
    <div>
        < Header/>
        < Profile/>
        < Experience/>
        < DoubleArticleHorizontal tittle="Academic tittle" Div1Li1={ CV_Data.data.Academic[0].institution } Div1Li2={ CV_Data.data.Academic[0].degree } Div1Li3={ CV_Data.data.Academic[0].startDate } Div1Li4={ CV_Data.data.Academic[0].endDate } Div2Li1={ CV_Data.data.skills[0].name } Div2Li2={ CV_Data.data.skills[0].percentage } Div2Li3={ CV_Data.data.interest[0] } Div2Li4={ CV_Data.data.interest[1] }/>
    </div>
  )
}

export default App