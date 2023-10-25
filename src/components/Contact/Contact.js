
import React, { Component } from 'react';
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import './Contact.css';

class Contact  extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            YourName: '',
            Phone:' ',
            Email: '',
            Message: '',
        };
      }
      
  onChangeYourName = (event) => {
    this.setState({ YourName: event.target.value });
  };

  onChangePhone = (event) => {
    this.setState({ Phone: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ Email: event.target.value });
  };

  onChangeMessage= (event) => {
    this.setState({ Message: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    alert(`Thank You, Submitted Successfully`);
  };

render()
{


    return (
        <div className='Contactmain'>
            <div className='Contactmain__container'>

                {/* CONTACT  */}
                <div className='Contactmain_card'>
                    <div className='Contactmain_box'>

                        <div className='Contactmain_Contact'>
                            <div className='Contactmain_location'>
                                <FaHome size={20} style={{ color: "black", marginRight: "5rem" }} />
                                <p> <b>25, 1st Street,</b> </p>
                                <p> <b>Annamalaiyar Nagar,</b> </p>
                                <p> <b>Murugampalayam,</b> </p>
                                <p><b> Tiruppur, Tamilnadu</b>  </p>
                            </div>

                            <div className='Contactmain_phone'>
                                <h4> <FaPhone size={20} style={{ color: "black", marginRight: "5rem" }} />
                                    <h5>+91 8072283302 / +91 9092824519</h5></h4>
                            </div>

                            <div className='Contactmain_email'>
                                <h4><FaMailBulk size={20} style={{ color: "black", marginRight: "5rem" }} />
                                    priyavenkatesan41@gmail.com </h4>
                            </div>


                            <div className='Contactmain_social'>

                                <a href='https://www.facebook.com'>
                                    <FaFacebook
                                        size={30} style={{ color: "black", marginRight: "1rem", marginLeft: "4rem" }} />
                                </a>

                                <a href='https://twitter.com/'>
                                    <FaTwitter
                                        size={30} style={{ color: "black", marginRight: "1rem" }} />
                                </a>

                                <a href='https://www.linkedin.com/'>
                                    <FaLinkedin
                                        size={30} style={{ color: "black", marginRight: "1rem" }} />

                                </a>

                                <a href='https://www.instagram.com/'>
                                    <FaInstagram
                                        size={30} style={{ color: "black", marginRight: "1rem" }} />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>


                {/* CONTACT FORM  */}

                <div className='Contactmain_card'>
                    <div className='Contactmai_form'>
                        <form onSubmit={this.onSubmit}>
                            <label>Name</label>
                            <input type="text" 
                            name='YourName'
                            value={this.state.YourName}
                            onChange={this.onChangeYourName}></input>


                            <label>Phone No:</label>
                            <input type="number"
                            name="Phone" 
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                            value={this.state.Phone}
                            onChange={this.onChangePhone}></input>

                            <label>Email</label>
                            <input type="email"
                            name='Email'
                            value={this.state.Email}
                            onChange={this.onChangeEmail}></input>

                            <label>Message:</label>
                            <textarea rows='5' placeholder='Type your Message here' name='Message'
                            value={this.state.Message}
                            onChange={this.onChangeMessage}></textarea>
                            <button className='btn'>Submit</button>
                            
                        </form>
                        
                    </div>
                </div>

                {/* Map  */}

                <div className='Contactmain_card'>
                    <div className='Contactmain_box'>
                        <div className='Contactmain_map'>
                        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Murugampalayam,%20Tirupur,%20Tamilnadu+(Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>

                        </div>
                    </div>
                </div>

            </div>
        </div>




    )
}
}

export default Contact;