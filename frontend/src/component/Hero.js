import React from'react'
import {Link} from 'react-router-dom'
// import CreateUser from '../patients/user'
import Image from '../images/doctors.png'
import '../component/cssfiles/Hero.css'

const Hero = () => {
    return(
        <div className='hero'>
          <div className='container'>
            <div className='content'>
            <div className='col-1'>
                <h1>A Heritage in Care.</h1>
                <h1><span className='primary-color'>Keeping You Well.</span></h1>
                <p>We treat minor and serious diseases, illnesses and disorders of the body<br></br> function of varying types and severity. <br></br>We also help in promoting health, giving information on the prevention of illnesses <br></br>and providing curative services.We provide many services which include short-term <br></br>hospitalization.<br></br>
                We also offers emergency room services and general and speciality surgical <br></br>services.We offer x-ray and radiology and laboratory services.</p>
                <div className="button-container">
                  <Link to='/CreateUser'>
                  <button className="custom-button">
                    Book Appointment
                    </button>
                    </Link>
                </div>
                <div className="button-container">
                  <Link to="/Doctors">
                  <button className="custom-button">Veiw Doctors</button>
                  </Link>
                </div>
            </div>
                <div className='col-2'>
                <img src={Image} alt='doctors'style={{position: 'absolute', right: 0}}/>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Hero