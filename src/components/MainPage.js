import { Component } from "react";

import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./MainPage.css";
import Header from "./Header";

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    };

    render() {
        const { onSearchChange, isPending } = this.props;

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
                                    <CardList robots={this.filterRobots()} />
                                </Scroll>
                    }
                </div>
            );
    }

}

export default MainPage;