import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            admin: [
                {
                    name: "admin",
                }
            ],
         }
    }

    // componentDidMount() {
    //     if (this.props.statusLogin) {
    //         fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(json => {
    //             const dataUsers = json.map(user => ({
    //                 ...user,
    //                 password: "1234"
    //             }))

    //             console.info('dataUsers: ', dataUsers)
    //             this.setState({
    //                 users: [...dataUsers, ...this.state.admin]
    //             })

    //             const result = dataUsers.find(value => value.password === "1234")
    //             const resultFilter = dataUsers.filter(value => value.password === "1234")
    //             console.log("result : ", result)
    //             console.log("resultFiler : ", resultFilter)
    //         })
    //     }
    // }

    clickBtn = () => {
        this.props.history.push('./login')
    }

    render() { 
        if (!this.props.statusLogin)
            return <Redirect to="/login" />

        return ( 
            <>
                <h2>Daftar Users</h2>
                <table>
                    <thead>
                        <th>No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                    {
                        this.props.users.map((user, idx) => {
                        return <tr key={idx}>
                        {/* // <div key={idx}>Name : {user.name}</div> */}
                        <th scope="row">{idx+1}</th>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                            <td>  
                                <button className='btn btn sizefix'>Detail</button>
                                <button className='btn btn-warning sizefix'> Edit</button>
                                <button className='btn btn-danger sizefix'>Delete</button>
                            </td>
                        </tr>
                        })
                    }
                    </tbody>
                </table>
            </>
         );
    }
}

const mapStateToProps = (state) => ({
    statusLogin: state.auth.statusLogin,
    dataLogin: state.auth.dataLogin,
})
 
export default connect(mapStateToProps)(UserList);