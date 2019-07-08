import React, { Component } from "react";
import PokemonImage from "./pokemonImage";
class Pokemons extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      currentPage: 1,
      pokemon: [],
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
        pokemon: [],
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
          let pokemon = this.state.pokemon;
          pokemon.push(testPoack);
          this.setState({ pokemon });
        });
      id += 1;
    }
  };

  render() {
    const { currentId, currentPage, pokemon, prevBtnStyle } = this.state;
    const sortPockemons = pokemon.sort((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    });
    return (
      <div className="m-5 container">
        <h2>Pokemons</h2>
        {pokemon.map(pock => {
          return <PokemonImage key={pock.id} pockemon={pock} />;
        })}

        <div className="row mt-4">
          <button
            className={prevBtnStyle}
            onClick={() => this.handleChange(currentId - 3, currentPage - 1)}
          >
            Prev
          </button>
          <h5 className="mt-2">Page no: {currentPage}</h5>
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
export default Pokemons;
