import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const plants = [
  { id: 1, name: 'Snake Plant', price: 20, image: '/snake-plant.jpg' },
  { id: 2, name: 'Fiddle Leaf Fig', price: 50, image: '/fiddle-leaf.jpg' },
  { id: 3, name: 'Spider Plant', price: 15, image: '/spider-plant.jpg' },
];

function PlantList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Our Plants</h2>
      <div className="plant-list">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-item">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantList;
