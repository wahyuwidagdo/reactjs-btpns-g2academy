import React, { Component } from 'react';
import './style.css'
import RowInput from '../../components/rowInput';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    onChangeInput = e => {
        // console.log(e.target)
        this.setState( {
            [e.target.name] : e.target.value
        })
        // console.log(e)
    }

    onClickLogin = async () => {
        // let login = this.props.dataRegister.filter(register => register.username === this.state.username && register.password === this.state.password)
        // if (login.length) {
        //     this.props.updateLogin(login)
        //     alert('Berhasil login')
        // } else {
        //     alert('Username atau password salah bosq')
        // }
        // this.setState(x => x = {})

        const { username, password } = this.state

        const admin = this.props.dataAdmin.find(admin => admin.username === username && admin.password === password)
        if (admin) {
            alert('Selamat Datang Admin Edo, apakah kamu siap untuk menjadi imam dari Ayana Jihye Moon')
            this.props.changeStatus()
        } else {
            const exist = await this.props.users.find(user => user.username === username && user.password  === "123")
            console.log(exist)
            if (exist) {
                alert('Terima kasih sudah mendukung Edo berjodoh dengan Ayana')
                this.props.changeStatus()
            } else {
                alert('Anda belum daftar atau username dan password salah')
            }
        }
    }

    render() { 
        if (this.props.statusLogin)
            return <Redirect to="/" />
        
        return ( 
            <div className="login">
                <div className="card-content">
                    <div className="card-title">
                        <h2>{this.props.title}</h2>
                        <div className="underline-title"></div>
                    </div>
                    <form className="form">
                        <RowInput label="Username" type="text" name="username" placeholder="Isi Username kamu disini" onChangeInput={this.onChangeInput} />
                        <RowInput label="Password" type="password" name="password" placeholder="Rahasia" onChangeInput={this.onChangeInput} />
                        <button type="button" className="submit-btn" onClick={this.onClickLogin}>Sign In</button>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Login;