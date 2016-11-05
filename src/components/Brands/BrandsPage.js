import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux';
import * as brandActions from '../../actions/brandActions'
import BrandList from './BrandList'

class BrandsPage extends Component {
    render() {
        return (
            <div className='col-md-12'>
                <h1>Brands</h1>
                <div className='col-md-4'>
                    <BrandList brands={this.props.brands} />
                </div>
            </div>
        )
    }
}

BrandsPage.propTypes = {
    brands: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {brands: state.brands}
}

export default connect(mapStateToProps)(BrandsPage);
