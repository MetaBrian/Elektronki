import NavBar from "./components/navBar"
import ContactMe from "./components/contactMe"
import { Route, Routes } from 'react-router-dom';
import HomeContainer from "./containers/HomeContainer";
import ErrorPage from "./components/ErrorPage";

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
