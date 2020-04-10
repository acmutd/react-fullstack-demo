import React from 'react';
import axios, { AxiosResponse } from 'axios';

type Props = {

}

type State = {
    username: string,
    password: string,
    serverResponse: string
}

class Body extends React.Component<Props, State> {
    state: State = {
        username: '',
        password: '',
        serverResponse: 'loading...'
    }


    handleUsername = (e: React.FormEvent<HTMLInputElement>) => {
        // do setting username state here
        const newUsername: string = e.currentTarget.value;

        this.setState(function setstate() {
            return { username: newUsername }
        })

    }

    handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
        // do password setting here
        const newPassword: string = e.currentTarget.value;

        this.setState(() => {
            return {
                password: newPassword
            }
        })
    }

    handleLoginAttempt = (e) => {
        // handle login attempt here
        window.alert(`Your attempted to login with ${this.state.username}, ${this.state.password}`)

        axios.get('/api', {
            params: {
                username: this.state.username,
                password: this.state.password
            }
        }).then((response: AxiosResponse<{ response: string }>) => {
            setTimeout(() => this.setState({
                serverResponse: response.data.response
            }), 2000)
        })
    }

    render() {
        console.log('Rendering Body again')

        return (<div>
            Body
            <div>
                <label about="Username" >Username</label>
                <input onChange={this.handleUsername} name="username" />
                {this.state.username}
            </div>
            <div>
                <label about="Password" >Password</label>
                <input onChange={this.handlePassword} name="password" />
            </div>
            <button onClick={this.handleLoginAttempt} type="submit">Log In</button>
            <div style={{ backgroundColor: 'black', color: 'yellow', border: 'rgb(200,200,200) 4px solid' }}>
                {this.state.serverResponse}
            </div>
        </div>)
    }
}

export default Body;