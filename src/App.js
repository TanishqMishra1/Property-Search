import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';


// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      property: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({property: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }
  
  render() {
    const { property, searchField } = this.state;
    const filteredProperty = property.filter(property => 
      property.name.toLowerCase().includes(searchField.toLowerCase())
      );


    return (   
      <div className = 'App'>
        <h1> Property Rolodex</h1>
        <SearchBox
        placeholder='search property'
        handleChange = {this.handleChange}
        />
        <CardList property = {filteredProperty}>
        </CardList>
      </div>
    );
  }
}

 


export default App;
