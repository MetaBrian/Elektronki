import NavBar from "./components/navBar"
import CardFront from "./components/cardFront";
import { Route, Routes } from 'react-router-dom';
import HomeContainer from "./containers/HomeContainer";
import ErrorPage from "./components/ErrorPage";
import ExamMode from "./components/ExamMode";
import FlashCards from "./components/FlashCards";
import ContactMe from "./components/contactMe";

function App() {

  return (
    <>
    <div>
      <div>
      <NavBar/>
      </div>

      <br/>
      
      <Routes>
        <Route path='/'element={<HomeContainer/>}/>
        <Route path='/flashcards' element={<FlashCards/>}/>
        <Route path='/createcards' element={<CardFront/>}/>
        <Route path='/exammode' element={<ExamMode/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>

      <br/>

      <div>
      
      <ContactMe/>

      </div>
      </div>
    </>
  )
}

export default App
