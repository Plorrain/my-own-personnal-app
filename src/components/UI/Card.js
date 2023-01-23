import React, { Fragment } from "react";

// import "./Card.css";

const Card = (props) => {
  return (
    <Fragment>
        <div className="card" style={{ overflow: "hidden" }}>
          <div className="card-content">{props.children}</div>
        </div>
    </Fragment>
  );
};

export default Card;
