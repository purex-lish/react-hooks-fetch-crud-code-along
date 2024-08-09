import React, { useState } from "react";

function ItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Dessert");

  async function handleSubmit(event) {
    event.preventDefault();
    const newItem = { id: Date.now(), name, category };

    // Send a POST request to add the new item
    try {
      const response = await fetch("http://localhost:4000/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
      const addedItem = await response.json();
      onAddItem(addedItem);
    } catch (error) {
      console.error("Failed to add item", error);
    }

    setName("");
    setCategory("Dessert");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Dessert">Dessert</option>
          <option value="Produce">Produce</option>
          
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
