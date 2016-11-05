import React, { PropTypes } from 'react';

const BrandList = ({brands}) => {
    return (
        <ul className='list-group'>
            {brands.map(brand =>
                <li className='list-group-item' key={brand.id}>
                    {brand.title}
                </li>
            )}
        </ul>
    );
};

BrandList.propTypes = {
    brands: PropTypes.array.isRequired
};

export default BrandList;