import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import api from "../service/api";
import Header from "./Header";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import "../stylesheets/App.scss";
import Filters from "./Filters";

const App = () => {
  // STATE
  const [characters, setCharacters] = useState([]);
  //Defines a new state for the text written in the input
  const [filterText, setFilterText] = useState("");

  //API
  useEffect(
    () => {
      api.getDataFromApi().then((data) => {
        // console.log(data);
        setCharacters(data);
      });
    },
    //Empty array so that the first useEffect parameter gets executed only once
    []
  );

  //EVENT
  const handleFilter = (inputValue) => {
    // console.log("Estoy en App y he hecho lifting");
    setFilterText(inputValue);
  };

  //FILTER
  const filteredCharacters = characters.filter((character) => {
    const characterName = character.name;
    return characterName.toLowerCase().includes(filterText.toLowerCase());
  });

  //RENDER DETAIL
  const renderDetail = (props) => {
    // debugger;
    // console.log(props.history);
    console.log(props);
    console.log(props.match.params.characterId);

  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <main>
            <Filters handleFilter={handleFilter} />
            <CharacterList characters={filteredCharacters} />
          </main>
        </Route>
        <Route path="/character-detail/:characterId" component={renderDetail}/>
          {/* <Header /> */}
          {/* <CharacterDetail /> */}
        {/* </Route> */}
      </Switch>
    </div>
  );
};

App.propTypes = {
  characters: PropTypes.array,
  handleFilter: PropTypes.func,
  renderDetail: PropTypes.func
};

export default App;
