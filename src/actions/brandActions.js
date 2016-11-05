import * as types from './actionTypes'
import brandApi from '../api/brandApi';

export function loadBrands() {
    return function(dispatch) {
        return brandApi.getAllBrands().then(brands => {
            dispatch(loadBrandsSuccess(brands));
        }).catch(error => {
            throw new Error(error);
        });
    };
}

export function loadBrandsSuccess(brands) {
    return {type: types.LOAD_BRANDS_SUCCESS, brands}
}