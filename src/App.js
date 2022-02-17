import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const allCategories = new Set(items.map(item => item.category)) 
  const navbar = ["all", ...allCategories]
  

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(navbar);

  const filterItems = (category) => {
    if(category === "all") return setMenuItems(items)
    const newItems = items.filter(item => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
        <h2>Out Menu</h2>
        <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={ filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;
