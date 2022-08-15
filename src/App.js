import React, { useState } from 'react';
import './App.css';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';

function App() {

  const orderData = [
    {
      id: Math.random().toString(),
      item: "pizza",
      description: "delicious cheese"
    },
    {
      id: Math.random().toString(),
      item: "pasta",
      description: "tortallini"
    },
    {
      id: Math.random().toString(),
      item: "salad",
      description: "let us eat"
    }
  ];

  const [orders, setOrders] = useState(orderData);

  const deleteHandler = (id) => {
    const newOrders = orders.filter((order) => order.id !== id);
    setOrders(newOrders);
    };

  const orderHandler = (order) => {
    setOrders(prevOrders => {
      return[order, ...prevOrders];
    });
  };  

  return (
    <div className="App">
      <h2>HELLO WRLD</h2>
      <OrderForm onAddOrder={orderHandler}/>
      <OrderList orders={orders} onDeleteOrder={deleteHandler}/>
    </div>
  );
}

export default App;
