import React, { Component } from "react";
const PockemonImage = props => {
  const { pockemon } = props;
  const { id, name, imageUrl } = pockemon;
  return (
    <span>
      <img src={imageUrl} alt="img" />
      <div>
        <span className="m-2">name :{id}</span>
        <span className="m-2">name :{name}</span>
      </div>
    </span>
  );
};

export default PockemonImage;
