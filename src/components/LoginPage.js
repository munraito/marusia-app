import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as sessionActions from '../actions/sessionActions'

export class LoginPage extends Component {
    constructor(props) {
        super();
        this.state = {credentials: {name: '', password: ''}};
    }
    onChange(e) {
        const field = e.target.name;
        const credentials = this.state.credentials;
        credentials[field] = e.target.value;
        return this.setState({credentials: credentials});
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.actions.logInUser(this.state.credentials);
        //{name: e.target.elements[0].value, password: e.target.elements[1].value}
    }
    render() {
        return (
                <form className='form-signin' onSubmit={::this.handleSubmit}>
                    <h2 className='form-signin-heading'>Marusia Admin Panel</h2>
                    <input name='name' type='text' className='form-control' placeholder='login'
                           value={this.state.credentials.name} onChange={::this.onChange}/>
                    <input name='password' type='password' className='form-control' placeholder='password'
                           value={this.state.credentials.password} onChange={::this.onChange}/>
                    <button className='btn btn-lg btn-primary btn-block' type='submit'>Войти</button>
                </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)