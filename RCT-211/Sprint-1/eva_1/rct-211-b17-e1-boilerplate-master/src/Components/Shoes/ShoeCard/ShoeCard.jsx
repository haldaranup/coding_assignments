import React from "react";

const ShoeCard = ({id, name, cart_quantity, image}) => {
  const shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`} key={id}>
      <img src={image} data-cy="shoe-card-image" alt="shoe" />
      <div>
        <div data-cy="shoe-name">{name}</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">{cart_quantity}</div>
          <button data-cy="increment-shoe-count-button">+</button>
          <button data-cy="decrement-shoe-count-button">-</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
