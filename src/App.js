import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from './components/search-box/search-box.component'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  // It will load after Dom is rendered properly
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // getting the response then converting it into json using fetch which is based on promises
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          monsters: users,
        })
      );
  }

  handleChange=(event)=>{
    this.setState({
      searchField: event.target.value
    })
  }

  render() {
    // DeStructuring state
    const {monsters,searchField}=this.state;
    // first converting into lowercase then searching if the elements in the lowercase is and available in monsters in lowercase
    const filteredMonster= monsters.filter(monster=> monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
      <h1> Monster Rolodex</h1>
      <SearchBox 
      handleChange={this.handleChange}
      placeholder='Search Monster'
      />
        

        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;


