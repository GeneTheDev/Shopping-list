import React, { useState, useEffect } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [items, setItems] = useState([
    { itemName: "item 1", qauntity: 1, isSelected: false },
    { itemName: "item 2", qauntity: 3, isSelected: true },
    { itemName: "item 3", qauntity: 2, isSelected: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  // Adding new items to list
  const handleAddButtonClick = () => {
    const newItem = {
      itemName: inputValue,
      qauntity: 1,
      isSelected: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setInputValue("");
    calculateTotal();
  };

  // function for toggling an item
  const toggleComplete = (index) => {
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
  };

  // Updating qauntity
  const handleQauntityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].qauntity++;

    setItems(newItems);
    calculateTotal();
  };

  const handleQauntityDecrease = (index) => {
    const newItems = [...items];

    newItems[index].qauntity--;

    setItems(newItems);
    calculateTotal();
  };

  // Calculate the total qauntity
  const [totalItemCount, setTotalItemCount] = useState("6");

  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.qauntity;
    }, 0);

    setTotalItemCount(totalItemCount);
  };

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="add-item-input"
            placeholder="Add an item..."
          />
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => handleAddButtonClick()}
          />
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container">
              <div className="item-name" onClick={() => toggleComplete(index)}>
                {false ? (
                  <>
                    <span className="completed">{item.itemName}</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="qauntity">
                <button>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => handleQauntityDecrease(index)}
                  />
                </button>
                <span>{item.qauntity}</span>
                <button>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={() => handleQauntityIncrease(index)}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total: {totalItemCount}</div>
      </div>
    </div>
  );
};

export default App;
