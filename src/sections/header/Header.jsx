import './header.css';
import HeaderImg from '../../asessts/me.jpg';











const Header = () => {
  return (
    <header id ="header">
      <div className="container header_container">
       
       <img src= { HeaderImg} id="img" alt="Header Portrait"/>

    
        <h2>Hi and Welcome to my portfolio website! </h2>
        <p>Here I have showcased my journey and passion for development. As you explore these pages, you'll discover a collection of my works, and the diverse projects </p>


{/* some links or something i guess? */}

      </div>
    </header>
  )
}

export default Header