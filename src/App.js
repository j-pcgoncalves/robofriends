import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        };
    }
    
    render() {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox />
                <CardList robots={robots} />
            </div>
        );
    }
}

export default App;