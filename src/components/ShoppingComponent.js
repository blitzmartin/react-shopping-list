import Button from './Button'
import React, { useState } from 'react'

/* const items = [];
function ShoppingList({ items }) { */

function ShoppingList() {

  const [listItems, setItem] = useState([]); //creating a copy of the array
  const [value, setValue] = useState("");

  function submitHandler() {
    const duplicate = (element) => element.name === value;
    if (listItems.some(duplicate)) {
      console.log(listItems[0].name);
      console.log('already exists ')
    } else {
      let newItem = { name: value, quantity: 0, id: Math.floor(Math.random() * 1000) };
      setItem([...listItems, newItem]);
    }
    setValue("");
}


  function deleteItem(id) {
    const newArray = listItems.filter(item => item.id !== id);
    setItem(newArray);
  }

  function increaseItem(index) {
    const newArray = [...listItems];  //spreading to have a clean copy of listitems, try not to modify the initial array
    newArray[index].quantity++;
    setItem(newArray);
  }

  function decreaseItem(index) {
    const newArray = [...listItems];
    if (newArray[index].quantity > 0) {
      newArray[index].quantity--;
    }
    setItem(newArray);
  }

  function resetItem(index) {
    const newArray = [...listItems];
    newArray[index].quantity = 0;
    setItem(newArray);
  }

  function calculateClass(name){
    if(name===value){
      return 'highlight'
    } else {
      return ''
    }
  }


  return (
    <div className="App">

      <label> Add new item to list:
        <input
          type="text"
          placeholder='add item'
          value={value}
          onChange={(e) => setValue(e.target.value)} />
      </label>
      <button onClick={submitHandler}>Add</button>


      <div className="ShoppingDiv">
        <h1 className="ShoppingTitle">Shopping List</h1>
        {listItems.length === 0&&<h2>The list is empty</h2>}
        <ul>
          {listItems.map((item, index) => {
            return (
              <li className="ShoppingItem" key={item.id}>
                <span className={calculateClass(item.name)}>{item.name}:</span>
                <span>{item.quantity}</span>
                <Button color={{ backgroundColor: 'green' }} btnValue="+" handler={() => increaseItem(index)} />
                <Button color={{ backgroundColor: 'blue' }} btnValue="-" handler={() => decreaseItem(index)} />
                <Button color={{ backgroundColor: 'lightgrey' }} btnValue="Reset" handler={() => resetItem(index)} />
                <Button color={{ backgroundColor: 'red' }} btnValue="Delete" handler={() => deleteItem(item.id)} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>)
}


export default ShoppingList
