import './App.css';
import React, { Component, useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  const country = 'in';
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  };
  return (
    <div>
      <BrowserRouter>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}

        />
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path='/' exact element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} key='general' pageSize={pageSize} country={country} category="general" ></News>}></Route>
          <Route path='/general' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} key='general' pageSize={pageSize} country={country} category='general' />}></Route>
          <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} key='business' pageSize={pageSize} country={country} category='business' />}></Route>
          <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} key='entertainment' pageSize={pageSize} country={country} category='entertainment' />}></Route>
          <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} key='health' pageSize={pageSize} country={country} category='health' />}></Route>
          <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} key='science' pageSize={pageSize} country={country} category='science' />}></Route>
          <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} key='sports' pageSize={pageSize} country={country} category='sports' />}></Route>
          <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} mode={mode} key='technology' pageSize={pageSize} country={country} category='technology' />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
