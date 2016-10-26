import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/sessionActions';
import {bindActionCreators} from 'redux';

import './App.scss'

export class App extends Component {
    logOut(e) {
        e.preventDefault();
        this.props.actions.logOutUser();
    }
  render() {
    return (
        <div className='container'>
            <nav className='navbar navbar-default'>
                <div className='navbar-header'>
                    <IndexLink to='/' className='navbar-brand'>Marusia App</IndexLink>
                </div>
                <ul className='nav navbar-nav'>
                    <li><Link to='/brands'>Бренды</Link></li>
                    <li><Link to='/phones'>Модели</Link></li>
                    <li><Link to='/templates'>Шаблоны</Link></li>
                </ul>
                <ul className='nav navbar-nav navbar-right'>
                    <li><a href='/logout' onClick={::this.logOut}><span className='glyphicon glyphicon-log-out'></span> Выйти</a></li>
                </ul>
            </nav>
          {this.props.children}
        </div>
    )
  }
}

App.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps() {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
