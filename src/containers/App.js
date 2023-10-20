import { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox";
import "./App.css";

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => {setRobots(users)});
    }, []);

    const onSearchChange = (e) => {
        setSearchField(e.target.value);
    };

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
            </div>
        );
}

export default App;