import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  pageSize = 15;
  state ={
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <>
      <Navbar></Navbar>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" key={'general'} element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={'in'}  category={'general'}/>} />
            <Route exact path="business" key={'business'} element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={'in'}  category={'business'}/>} />
            <Route exact path="health" key={'health'} element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={'in'}  category={'health'}/>} />
            <Route exact path="science" key={'science'} element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={'in'}  category={'science'}/>} />
            <Route exact path="sports" key={'sports'} element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={'in'}  category={'sports'}/>} />
            <Route exact path="entertainment" key={'entertainment'} element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={'in'}  category={'entertainment'}/>} />
            <Route exact path="technology" key={'technology'} element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={'in'}  category={'technology'}/>} />
          </Routes>
        </BrowserRouter>
        </>
    )
  }
}