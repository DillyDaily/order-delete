import React, { useState } from 'react';

const OrderForm = (props) => {
   
    const [enteredItem, setItem] = useState('');
    const [enteredDescription, setDescription] = useState('');

    const itemChangeHandler = (event) => {
        setItem(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    };

    const submitFormHandler = (event) => {
        event.preventDefault();

        const orderData = {
            id: Math.random().toString(),
            item: enteredItem,
            description: enteredDescription
        };

        props.onAddOrder(orderData);
        setItem('');
        setDescription('');

    };

    return(
        <form onSubmit={submitFormHandler}>
            <div>
                <label htmlFor='item'>Item</label>
                <input id='item' type='text' value={enteredItem} onChange={itemChangeHandler} />
            </div>
            <div>
                <label htmlFor='description'>Description</label>
                <input id='description' type='text' value={enteredDescription} onChange={descriptionChangeHandler} />
            </div>
            <button type='submit'>Add to Order</button>
        </form>
    );
};

export default OrderForm;