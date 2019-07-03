import React, { Component } from "react";
import PockemonImage from "./pockemonImage";
class Pockemons extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      currentPage: 1,
      pockemons: [],
      prevBtnStyle: ""
    };
  }

  componentDidMount() {
    this.getPocksApi();
    this.setState({
      prevBtnStyle: "m-2 btn btn-primary"
    });
  }

  handleChange = (id, page) => {
    if (id > 0) {
      this.setState({
        pockemons: [],
        currentId: id,
        currentPage: page
      });
      this.getPocksApi(id);
    }
  };

  getPocksApi = givenid => {
    let id = givenid || 1;
    let start = id - 1;
    let end = id + 2;
    for (let index = start; index < end; index++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(results => results.json())
        .then(data => {
          let testPoack = {
            id: data.id,
            name: data.name,
            imageUrl: data.sprites.front_default
          };
          let pockemons = this.state.pockemons;
          pockemons.push(testPoack);
          this.setState({ pockemons });
        });
      id += 1;
    }
  };

  render() {
    const { currentId, currentPage } = this.state;
    return (
      <div className="m-5 container">
        {this.state.pockemons.map(pock => {
          return <PockemonImage key={pock.id} pockemon={pock} />;
        })}

        <div className="row mt-4">
          <button
            className={this.state.prevBtnStyle}
            onClick={() => this.handleChange(currentId - 3, currentPage - 1)}
          >
            Prev
          </button>
          <h5 className="mt-2">Page no: {this.state.currentPage}</h5>
          <button
            className="m-2 btn btn-primary"
            onClick={() => this.handleChange(currentId + 3, currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
export default Pockemons;
