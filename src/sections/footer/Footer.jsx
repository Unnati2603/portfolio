// import FooterCol2 from "./FooterCol2"
import './footer.css'
import {BsDiscord} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FaYoutube} from 'react-icons/fa'

// css to be imported
const Footer = () => {
  return (
    <footer id ="footer">
      
       <div className="container footer_container">

        <div className="footer_col1">
        <h2 className="footer_col1_title"> Unnati Chaurasia </h2>
        <p>Student at National Instituteof Technology, Jamshedpur</p>
        </div>


        <div className="footer_col2">
        <h2 className="footer_col2_title"> Want to get Important Updates from us? </h2>
        <p>Subscribe Here</p>
        <form action="#">
            <input type='email' required autoComplete='off' placeholder='Email'/>
            <input type="submit " value="Subscribe"/>
        </form>
        </div>
      
        <div className="footer_col3">
        <h2 className="footer_col3_title"> Social Media </h2>
         <div className='socialLinks'>
            <div className='discord'><BsDiscord/></div>
         </div>
         <div className='socialLinks'>
            <div className='insta'><AiFillInstagram/></div>
         </div>
         <div className='socialLinks'>
            <div className='youtube'><FaYoutube/></div>
         </div>
        </div>


        <div className="footer_col4">
        <h2 className="footer_col4_title"> Phone no: </h2>
        <p>123456789</p>
        </div>


       














      </div>
    </footer>
  )
}

export default Footer