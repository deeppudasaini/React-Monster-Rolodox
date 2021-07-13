
import './App.css';

import React, { PureComponent } from 'react'
import {CardList} from './Components/cardlist.component';
import Title from './Components/title';
import { Search } from './Components/Search';
export default class App extends PureComponent {
  constructor (){
super();
this.state = {
  monsters: [],
}
  }
componentDidMount()
{
  fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
    return response.json()  
  }).then(users=> this.setState({monsters:users}));

}
  render() {
    return (
      <div>
         <div className="App">
           <Title title="Monster Rolodex"/> 
           <Search />
           <CardList monster={this.state.monsters}>
           
           </CardList>
   
    </div>
      </div>
    )
  }
}

