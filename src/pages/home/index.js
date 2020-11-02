import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import profile from '../../casualprofile.jpg'
import './style.css'
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users : [],
         }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(json => this.setState({ users : json }))
    // }

    clickBtn = () => {
        this.props.history.push('/login')
    }

    render() { 
        if (!this.props.statusLogin)
            return <Redirect to="/login" />

        return ( 
            <>
                <div className="main">
                    <div className="intro">
                        <h1>Hai, Saya Wahyu Fajri Widagdo</h1>
                        <h2>Biasanya teman-teman memanggil saya Edo</h2>
                        <h4>Salam Kenal</h4>
                    </div>
                    <img src={ profile } className="profile" alt="" />
                </div>
                <h3>Ayo...!!!</h3>
                <h4>Bantu, dukung, dan do'a kan Edo agar berjodoh dengan <div style={{ color:'#e25555' }}>Ayana Jihye Moon &hearts;</div></h4>
                <p>Dengan cara login/register...!!!!</p>
                <p style={{textAlign:'center', fontSize: 10, color:'green'}}>Cringe Euy</p>

                {/* {
                    this.state.users.map((user, idx) => {
                    return <div key={idx}>Name : {user.name}</div>
                    })
                } */}
            </>
         );
    }
}

const mapStateToProps = (state) => ({
    statusLogin: state.auth.statusLogin,
    dataLogin: state.auth.dataLogin,
})

export default connect(mapStateToProps)(Home);