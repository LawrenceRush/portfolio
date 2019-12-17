import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faenvelope} from '@fortawesome/free-solid-svg-icons'
//import {falinkedin} from '@fortawesome/free-solid-svg-icons'
var FontAwesome = require('react-fontawesome')

function Contact() {
    console.log(FontAwesomeIcon)
    return (
       <section className = "contact-con">
           <div className="contact-div">
               <h1>Reach Out!</h1>
               <h2>I'd be happy to hear from you</h2>
               <ul className="link-list">
                   <li><a className="link-a" href="#"><FontAwesome className="link-icon" name="fab fa-github" size="2x"/>Github</a></li>
                   <li><a className="link-a" href="#"><FontAwesome className="link-icon" name="fab fa-linkedin" size="2x"/>Linked In</a></li>
                   <li><a className="link-a" href="#"><FontAwesome className="link-icon" name="fab fa-envelope" size="2x"/>Email</a></li>
                </ul>
           </div>
       </section>
    )
}

export default Contact
