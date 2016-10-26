import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as sessionActions from '../actions/sessionActions'

export class LoginPage extends Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.actions.logInUser({name: e.target.elements[0].value, password: e.target.elements[1].value});
    }
    render() {
        return (
                <form className='form-signin' onSubmit={::this.handleSubmit}>
                    <h2 className='form-signin-heading'>Marusia Admin Panel</h2>
                    <input name='name' type='text' className='form-control' placeholder='login'/>
                    <input name='password' type='password' className='form-control' placeholder='password'/>
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