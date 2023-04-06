import NavBar from "./components/NavBar";
import CardFront from "./components/NewCardFront";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import ErrorPage from "./components/ErrorPage";
import ExamMode from "./components/QuizMe";
import FlashCards from "./components/FlashCards";
import ContactMe from "./components/Footer";
import NewCardBack from "./components/NewCardBack";
import {useState, useEffect} from 'react';


function App() {

  return (
    <>  
    <div className='App'>
      <NavBar/>
      <br/>

      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/flashcards' element={<FlashCards/>}/>
        <Route path='/createcardsfront' element={<CardFront/>}/>
        <Route path='/createcardsback' element={<NewCardBack/>}/>
        <Route path='/exammode' element={<ExamMode/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>      

      <br/>
      
      <ContactMe/>

      </div> 
    </>
  )
}

export default App
