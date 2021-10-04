import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar src={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={"+1234567"} />
        <Detail detailInfo={"gmail@getComputedStyle.com"} />
      </div>
    </div>
  );
}

export default Card;
