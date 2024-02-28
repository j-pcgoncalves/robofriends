import { ChangeEventHandler } from "react";

type SearchBoxProps = {
    searchChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ searchChange }: SearchBoxProps) => {
    return (
        <div className="pa2">
            <input
                aria-label="Search Robots" 
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="Search Robots"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;