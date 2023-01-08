import React, { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import ItemPage from "./ItemPage";
import { items } from "./static-data";
import Cart from "./Cart";
import "./Cart.css";


const summarizeCart = cart => {
  const groupedItems = cart.reduce((summary,item)=>{
    summary[item.id] = summary[item.id] || {
      ...item,
      count:0
    };
    summary[item.id].count++;

    return summary;
  }, {});
  return Object.values(groupedItems);
};

const App = () => {

  const [activeTab, setActiveTab] = useState("items");
  const [cart, setCart] = useState([]);

  const addTocart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = item =>{
    let index = cart.findIndex(i => i.id === item.id);
    if(index >= 0){
      setCart(cart => {
        const copy = [...cart];
        copy.splice(index,1);
        return copy;
      })
    }
  }



  return (
    <div className="App">
      <Nav 
       activeTab={activeTab} 
       onTabChange={setActiveTab}        
       />
      <main className="App-content">
        <Content
          tab={activeTab}
          onAddToCart={addTocart}
          onRemoveItem={removeItem}
          cart={summarizeCart(cart)}
        />
      </main>
    </div>
  );
};

//add this:
const Content = ({ tab, onAddToCart, onRemoveItem, cart }) => {
  switch (tab) {
    default:
    case "items":
      return <ItemPage 
                items={items} 
                onAddToCart={onAddToCart} 
              />;
    case "cart":
      return <Cart 
                items={cart} 
                onAddOne={onAddToCart} 
                onRemoveOne={onRemoveItem}
                
              />;
  }
};

export default App;