import React, { Component } from "react";
class PockemonImage extends Component {
  state = {
    id: "god",
    imageUrl: "https://picsum.photos/200"
  };
  render() {
    const { pockemon } = this.props;
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
  }
}

export default PockemonImage;
