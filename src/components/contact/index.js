import React, { Component } from 'react';
import './style.css'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="contact">
                Tenang kawan, kamu tidak perlu mengisi form untuk dapat mengontakku. <br />
                Kamu bisa mengontakku cukup dengan mengunjungi salah satu dari akun Media Sosial dibawah ini.
                <ul>
                    <li>
                        <a href="https://github.com/wahyuwidagdo" target="_blank" rel='noopener noreferrer'><span>Open Github account in new tab</span><svg aria-hidden='true'><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></a>
                    </li>
                    <li>
                        <a href='https://linkedin.com/in/giosakti' target='_blank' rel='noopener noreferrer'><span>Open Linkedin account in new tab</span><svg aria-hidden='true'><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/channel/UCfElKJgU6QbHvwRofVKUo_Q' target='_blank' rel='noopener noreferrer'><span>Open Youtube account in new tab</span><svg aria-hidden='true'><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/edowidagdo" target="_blank" rel="noopener noreferrer">Ini Instagram, sorry nggak ada icon, teehee.!!</a>
                    </li>
                    <li></li>
                </ul>
            </div>
         );
    }
}
 
export default Contact;