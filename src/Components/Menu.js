import '../Styles/Menu.css';
import React from 'react';
import Categories from './Categories';
import Card from './Card';


function createCard(category){
    return <Card 
    name={category.name}
    item1 = {category.item1}
    item2 = {category.item2}
    item3 = {category.item3}
    item4 = {category.item4}
    item5 = {category.item5}
    item6 = {category.item6}
    item7 = {category.item7}
    item8 = {category.item8}
    item9 = {category.item9}
    item10 = {category.item10}
    />
}

function Menu() {
  return (
    <div className="Menu">
      {Categories.map(createCard)}
    </div>
  );
}
 
export default Menu;