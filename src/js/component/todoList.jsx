import React, { useEffect, useState } from "react";

const List = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  
  
  function addItem() {
    if (!inputValue) {
      alert("Item can't be empty");
      return;
    }
    setItems((prevList) => [...prevList, inputValue]);
    setInputValue("");
  }
  function handleRemove(e) {      

    setItems(items.filter(data =>data != e.target.parentNode.parentNode.firstChild.innerHTML));  
    
  }
  return (
    <div className="d-inline-flex flex-column w-100 container justify-content-center align-items-center shadows">
      <div className="row">
        <h1 className="col-12">To Do List</h1>
      </div>

      <div className="row mt-3">
        <input
          className="col-8"
          size="60"
          type="text"
          placeholder="Add an item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="col-4" onClick={() => addItem()}>
          Add
        </button>
      </div>

      <ul id="list" className="list-group col-12 mt-3">
        {items.length == 0 ? (
          <li className="list-group-item text-center">
            Add a task
          </li>
        ) : (
          items.map((item, i) => {
            return (
              <li
                className="list-group-item text-center"
                id={i}
                key={i}
                onClick={(e)=>{
                  handleRemove(e)
                }}
              >
               <span>{item}</span><span className="hide"><i className="fa fa-trash"/></span>
              </li>
            );
          })
        )}
        <li className="list-group-item text-center text-black-50">{`${items.length} item left`}</li>
        <div className="background1"></div>
        <div className="background2"></div>
      </ul>
    </div>
  );
};

export default List;