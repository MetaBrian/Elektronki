import NavBar from "./components/NavBar";
import CardFront from "./components/CardFront";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import ErrorPage from "./components/ErrorPage";
import ExamMode from "./components/ExamMode";
import FlashCards from "./components/FlashCards";
import ContactMe from "./components/ContactMe";

function App() {

  return (
    <>   
      <NavBar/>
     
      <br/>

      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/flashcards' element={<FlashCards/>}/>
        <Route path='/createcards' element={<CardFront/>}/>
        <Route path='/exammode' element={<ExamMode/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>      

      <br/>
      
      <ContactMe/>
    </>
  )
}

export default App
