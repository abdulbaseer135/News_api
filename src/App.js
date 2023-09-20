import React, { Component, useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=(props)=> {
 const apiKey="d7ba8b3710a145ddaac82a41f40385b6";
  //https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=38a8b0413b104efb8420aa04e3331b0d

 
  const [progress,setProgress]=useState(0);
   
    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
             />
          <Routes>
            <Route exact path="/" element={<News  setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={5} country="us" category="general"/>} />
            <Route exact path="/business"  element={<News  setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={5} country="in" category="business"/>} />
            <Route exact path="/entertainment"  element={<News  setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={5} country="in" category="entertainment"/>} />
            <Route exact path="/sports"  element={<News  setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={5} country="in" category="sports"/>} />
            <Route exact path="/health"  element={<News  setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={5} country="in" category="health"/>} />
            <Route exact path="/science"  element={<News  setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={5} country="in" category="science"/>} />
            <Route exact path="/technology"  element={<News  setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={5} country="in" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }


export default App;


