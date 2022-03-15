import React, { Component } from 'react';
import CardList from './CardList';

import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component{
    constructor(){
        super()
        this.state={
            robots: [],
            searchfield: ''
        }
    }

        onSearchChange = (event) => {
            this.setState({searchfield: event.target.value})
        }

componentDidMount() { 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({ robots : users}))
}         

render(){
    const filterRobot = this.state.robots.filter(robot=>{
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    console.log(filterRobot);
    return(
        <div className="tc">
            <h1 className="f2">ROBOFRIENDS</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <CardList robots={filterRobot}/>
            </Scroll>
        </div>
        ) 
    }

}
export default App;