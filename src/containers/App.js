import { useEffect, useState } from "react";
import { connect } from "react-redux";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import { setSearchField } from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    } 
};

const App = ({ searchField, onSearchChange }) => {
    const [robots, setRobots] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => {setRobots(users)});
    }, []);

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);