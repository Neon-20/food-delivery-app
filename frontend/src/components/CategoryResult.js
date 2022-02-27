import React, { useEffect } from 'react';

const CategoryResult = ({products}) => {
    useEffect(() => {
        console.log(products)
    })
    return (
        <div>
            This is page for searched result
        </div>
    );
};

export default CategoryResult;