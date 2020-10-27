import React, { Component } from 'react';
import './style.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer">
                &copy; 2020 Wahyu F. Widagdo [Edo] | Ini Footer Bosque
            </div>
         );
    }
}
 
export default Footer;