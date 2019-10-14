import React, { Fragment } from 'react';

const Sushi = props => {
  const { name, img_url: img, price, id, eaten } = props.sushi;

  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={() => {
          props.eatSushi(id);
        }}
      >
        {/* Tell me if this sushi has been eaten! */

        eaten ? null : <img src={img} width="100%" alt="" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
