import './contact.css'

const contact = () => {
  return (
    <section id="contact" >
       <div className="container contact_container">
       
       {/* <img src= { HomeImg} id="img" alt="Home Image"/> */}

    
        <h2>Feel Free to Contact Us! </h2>
        <p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.6863772192405!2d86.14154107446122!3d22.777017379346688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4daa475a5cd%3A0xd87b53fadcd771a1!2sNational%20Institute%20of%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1691087002663!5m2!1sen!2sin" width="100%" height="250" style={{border:'0'}} 
        allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </p>
          
       <p>
          <div className='Cnotainer'>
          <div className='container_form'>

            <form action='#' method='POST' className='contactInputs'> 
              <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete='off'
              required  />

             <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete='off'
              required  />
              

              <textarea name="message" cols="30" rows="6" autocomplete="off" required></textarea>

             <input type="submit" value="send"/>

            </form>

          </div>
          </div>


          
          </p>


        {/* <p></p> */}


        {/* some links or something i guess? */}

      </div>








    </section>
  )
}

export default contact