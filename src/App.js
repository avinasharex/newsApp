import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

  const App = ()=> {
  const apiKey = process.env.REACT_APP_NEWS_API
  const pageSize = 15;
  const [progress, setProgress] = useState(0)
  
    return (
      <>
      <Navbar></Navbar>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" key={'general'} element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={'in'}  category={'general'}/>} />
            <Route exact path="business" key={'business'} element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={'in'}  category={'business'}/>} />
            <Route exact path="health" key={'health'} element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={'in'}  category={'health'}/>} />
            <Route exact path="science" key={'science'} element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={'in'}  category={'science'}/>} />
            <Route exact path="sports" key={'sports'} element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={'in'}  category={'sports'}/>} />
            <Route exact path="entertainment" key={'entertainment'} element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={'in'}  category={'entertainment'}/>} />
            <Route exact path="technology" key={'technology'} element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={'in'}  category={'technology'}/>} />
          </Routes>
        </BrowserRouter>
        </>
    )
}

export default App