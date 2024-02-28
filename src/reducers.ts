import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_SUCESS,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING
} from "./constants";

import { Action, Robot } from "./actions";

type StateSearch = {
    searchField: string;
}

type StateRobots = {
    isPending: boolean;
    robots: Robot[];
    error: string;
}

const initialStateSearch: StateSearch = {
    searchField: ""
};

export const searchRobots = (state = initialStateSearch, action: Action) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    };
};

const initialStateRobots: StateRobots = {
    isPending: false,
    robots: [],
    error: ""
};

export const requestRobots = (state = initialStateRobots, action: Action) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false });
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;
    }
};