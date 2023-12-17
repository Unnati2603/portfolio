import './portfolio.css';
import cvMine from '../../asessts/CVUnnati.pdf'
import { BiDownload} from 'react-icons/bi'


const Portfolio = () => {
  return (
    <section id="portfolio" >
     <div className="container portfolio_container">



     <p>Download the portfolio here!</p>
    <a href={cvMine} download className='button'> Download CV 
    <BiDownload/> 
    </a>





     </div>

  
      


    </section>
  )
}

export default Portfolio