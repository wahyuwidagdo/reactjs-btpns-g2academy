import React, { Component } from 'react';
import './style.css'
import RowInput from '../../components/rowInput';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : {},
            nama : "",
            username : "",
            password : "",
         }
    }

    onChangeInput = e => {
        this.setState({
            [e.target.name] : e.target.value
            // console.log(data)
        })
    }

    onClickRegister = async () => {
        const { nama, username, password } = this.state
        this.props.goRegister({ nama, username, password })
        console.log(this.props.goRegister.length)
        if (this.props.goRegister.length) {
            alert('Terima kasih sudah register bosq, satu langkah lagi, silahkan login')
        // } else {
        //     this.props.goRegister(this.state.data)
        //     this.setState(x => x.data = {})
        //     document.formRegister.reset()
        }
    }

    render() { 
        return ( 
            <div className="register">
                <div className="card-content">
                    <div className="card-title">
                        <h2>{this.props.title}</h2>
                        <div className="underline-title"></div>
                    </div>
                    <form className="form" name="formRegister">
                    <RowInput label="Nama" type="text" name="nama" placeholder="Isi nama kamu disini" onChangeInput={this.onChangeInput} />
                    <RowInput label="Username" type="text" name="username" placeholder="Isi Username kamu disini" onChangeInput={this.onChangeInput} />
                    <RowInput label="Password" type="password" name="password" placeholder="Rahasia" onChangeInput={this.onChangeInput} />
                    <button type="button" className="submit-btn" onClick={this.onClickRegister}>Sign Up</button>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Register;