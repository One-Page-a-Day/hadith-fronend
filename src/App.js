import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Body from "./components/Body";
import AllHadiths from "./components/AllHadiths";
import MyFavs from "./components/MyFavs";
// import FavItem from "./components/FavItem";
import About from "./components/About";
import Profile from "./components/login/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/login/Login";




function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    {/* <Route exact path="/profile" element={<Profile/>}/> */}
     <Route exact path='/about' element ={<About/>}/> 
      <Route exact path='/' element ={isAuthenticated ? <MyFavs/>:<Login/>}/>
      <Route exact path='/profile' element ={<Profile/>}/>
      <Route exact path ='/allHadith' element ={<AllHadiths/>}/>
    </Routes>
    {/* <Body/> */}
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
