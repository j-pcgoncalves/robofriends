import { Dispatch } from "redux";
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";
import { getData } from "./utils/data.utils";

type Action<T = string> = {
    type: T;
}

type Monster = {
    id: string;
    name: string;
    email: string;
}

export const setSearchField = (text: string) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text,
});

export const requestRobots = () => (dispatch: Dispatch<Action>) => {
    const fetchUsers = async () => {
        try {
            const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
            dispatch({ type: REQUEST_ROBOTS_SUCESS, payload: users });
        } catch (e) {
            dispatch({ type: REQUEST_ROBOTS_FAILED, payload: e })
        }
    }
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetchUsers();
}