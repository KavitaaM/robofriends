import React from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import Scroll from './Scroll';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchbox :""
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ robots: users})});
      }

    searchchange = (event) => {
        this.setState({searchbox: event.target.value});
    }
    render(){
        const filteredrobots = this.state.robots.filter(robots=> {
            return robots.name.toLowerCase().includes(this.state.searchbox.toLowerCase());
      })
        return(
            <div className="tc">
            <h1 className="f2 light-yellow"> ROBOFRIENDS </h1>
            <Searchbox searchboxchange = {this.searchchange}/>
            <Scroll>
            <Cardlist robots = {filteredrobots}/>
            </Scroll>
            </div>
        );
    }
}

export default App;