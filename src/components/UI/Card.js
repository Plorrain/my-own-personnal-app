import { Fragment } from "react";

import './Card.css';

const Card = (props) => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-content">{props.children}</div>
      </div>
    </Fragment>
  );
};

export default Card;
