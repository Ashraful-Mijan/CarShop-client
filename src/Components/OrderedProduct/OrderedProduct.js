import React from 'react';

const OrderedProduct = ({order}) => {
    const {name, price, date} = order;
    return (
        <tr>
        <td>{name}</td>
        <td>${price}</td>
        <td>{date}</td>
    </tr>
    );
};

export default OrderedProduct;