
import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      monsters: [],
      serachField: ''
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(result => result.json())
  .then(users => this.setState({monsters: users}));
}

handleChange = (e) =>{
  this.setState({serachField:e.target.value});
}
  render(){
    const { monsters, serachField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(serachField.toLowerCase())
      );
    return(
      <div className="App">
        <h1>Monsters-Rolodex</h1>
        <SearchBox placeHolder='Search Monsters' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
