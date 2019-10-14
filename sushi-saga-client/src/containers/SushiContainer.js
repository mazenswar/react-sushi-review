import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushiToDisplay.map(sushi => {
          return (
            <Sushi sushi={sushi} key={sushi.id} eatSushi={props.eatSushi} />
          );
        })}
        <MoreButton handleAddSushi={props.handleAddSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
