import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Product from './components/Product';


const products = {
  1: [
    {
      name: 'product 1',
      price: 30,
      capacity: 20
    },
    {
      name: 'Menu 1 product 2',
      price: 50,
      capacity: 0
    },
    {
      name: 'Menu 1 product 3',
      price: 30,
      capacity: 20
    },
    {
      name: 'Menu 1 product 4',
      price: 30,
      capacity: 20
    }
  ],
  2: [
    {
      name: 'Menu 2 product 1',
      price: 30,
      capacity: 20
    },
    {
      name: 'Menu 2 product 2',
      price: 50,
      capacity: 0
    },
    {
      name: 'Menu 2 product 3',
      price: 30,
      capacity: 20
    },
    {
      name: 'Menu 2 product 4',
      price: 30,
      capacity: 20
    }
  ],
  3: [
    {
      name: 'Menu 3 product 1',
      price: 30,
      capacity: 20
    },
    {
      name: 'Menu 3 product 2',
      price: 50,
      capacity: 0
    }
  ]
}

const initialHeadersMenu = [
  {
    name: 'Menu 1',
    id: 1
  },
  {
    name: 'Menu 2',
    id: 2
  },
  {
    name: 'Menu 3',
    id: 3
  }
]

function App() {
  const [selectedMenu, setSelectedMenu] = useState(1);

  // modifyMenuItems 

  return (
    <div className="App">
      <Header menuList={initialHeadersMenu} handleSelectedMenu={(value) => { setSelectedMenu(value) }} />
      <Product products={products[selectedMenu]} />
    </div>
  );
}

export default App;
