/* import React, { useState } from 'react'
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import {items} from  './static-data';

const App = () => {
  const [activeTab, setActiveTab] = useState('items');
  return (
    <div className="App">
      <h1>Shopping Site </h1>
      <Nav 
      activeTab={activeTab}
      onTabChange={setActiveTab}
      />
      
      <main className='App-content'>
        <Content tsb = {activeTab} />
      </main>
    </div>
  );
}

export default App;


  const Content = ({tab}) => {
    switch(tab){
      default:
        case 'items' :
          return <span>the items</span>
          case 'cart' :
            return <span>the cart</span>
    }
  }

 */

/* import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import ItemPage from './ItemPage';
import {items} from  './static-data';


const App = () => {
  const [activeTab,setActiveTab] = useState('items');
  return(
    <div className='App'>
    <Nav 
      activeTab={activeTab}
      onTabChange={setActiveTab}
     />
    <main className='App-content'>
      <Content tab={activeTab} />
    </main>
    </div>
  );
};

//add this:
const Content =({tab}) => {
  switch(tab){
    default:
      case 'items' :
          return <span>the items</span>
      case 'cart' :
          return <span>the cart</span>
  }
}

export default App; */

/* import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import ItemPage from './CartItem';
import { items } from './static-data';

const summarizeCart= cart => {
  const groupedItems = cart .reduce(summary.item)=> {
    summary[item.id] = summary[item.id]
  }
}


const App = () => {
  const [activeTab,setActiveTab] = useState('items');
  const [cart,setCart] = useState([]);

  const addTocart = item =>{
    setCart(prevCart => [...prevCart,item]);
  };
  return(
    <div className='App'>
    
    <Nav 
      activeTab={activeTab}
      onTabChange={setActiveTab}
     />
    <main className='App-content'>

    
      <Content 
        tab={activeTab} 
        onAddToCart={addTocart}
        cart={summarizeCart(cart)}

      />
      
    </main>
    </div>
  );
};

//add this:
const Content =({tab, onAddToCart, cart}) => {
  switch(tab){
    default:
      case 'items' :
          return <ItemPage items={items} onAddToCart={onAddToCart} />
      case 'cart' :
          return <Cart items = {cart}/>;
  }
}

export default App; */
"use strict";