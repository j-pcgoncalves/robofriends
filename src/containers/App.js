import { useEffect } from "react";
import { connect } from "react-redux";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import { setSearchField, requestRobots } from "../actions";
import Header from "../components/Header";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    } 
};

const App = ({ searchField, onSearchChange, onRequestRobots, isPending, robots }) => {
    useEffect(() => {
        onRequestRobots();
    }, []);

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ?
        <h1>Loading</h1> :
        (
            <div className="tc">
                <Header />
                <SearchBox searchChange={onSearchChange} />
                {
                    isPending 
                        ?
                            <h1>Loading</h1>
                        :
                            <Scroll>
                                <CardList robots={filteredRobots} />
                            </Scroll>
                }
            </div>
        );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);