import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {
  // Handler for the Add/Remove item from Cart button
  const handleCartToggle = () => {
    onUpdateItem({
      ...item,
      isInCart: !item.isInCart,
    });
  };

  // Handler for the Delete button
  const handleDelete = () => {
    onDeleteItem(item.id);
  };

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button
        className={item.isInCart ? "remove" : "add"}
        onClick={handleCartToggle}
      >
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default Item;
