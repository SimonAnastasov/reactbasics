import React from 'react';
import './App.css';

import Header from './components/Header';
import Product from './components/Product';

function App() {
  const products = [
    {name: "A", cost: "2000e", src: "/logo192.png"},
    {name: "S", cost: "500e", src: "/logo192.png"},
    {name: "M", cost: "1000e", src: "/logo192.png"},
    {name: "C", cost: "3000e", src: "/logo192.png"},
  ]

  return (
    <div>
      <Header name="Simon" age="20" color="red"/>
      <Header name="David" age="24" color="green"/>
      <Header name="Gis" age="17" color="blue"/>
      <Header name="Laze" age="21" color="black"/>

      <div className="products">
        {
          products.map(product => {
            return (
              <Product name={product.name} cost={product.cost} src={product.src}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;