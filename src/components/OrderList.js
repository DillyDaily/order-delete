import React, { useState } from 'react';

const OrderList = (props) => {
    console.log("ORDER LIST ", props)
    
    const deleteHandler = (id) => {
        props.onDeleteOrder(id);
    };

    return(
        <ul>
            {props.orders.map((i,index) => (
                <div key={i.id}>
                    <p>{index +1}. Try our {i.item} it is {i.description}</p>
                    <button type='button' onClick={() => deleteHandler(i.id)}>Delete</button>
                </div>
            ))}
        </ul>
    );
};

export default OrderList;