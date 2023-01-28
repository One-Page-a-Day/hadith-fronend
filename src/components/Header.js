import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import '../styles/Header.css';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login/LoginButton";
import LogoutButton from "./login/LogoutButton";


function Header () {
    const { isAuthenticated } = useAuth0();
    return(
      
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Hadith by: Taiwo Bidmos</Navbar.Brand> 
          <Link to ='/about'>About</Link>
          <Link to ='/allHadith'>All Hadiths</Link>
          {isAuthenticated && <Link to='/'>Favourites</Link>}
          {isAuthenticated && <Link to ='/profile'>Profile</Link>} 
          {isAuthenticated ?<LogoutButton/>:<LoginButton/>} 
        </Navbar>
    
    )
}

export default Header;