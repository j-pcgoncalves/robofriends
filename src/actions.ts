import { Dispatch } from "redux";
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";
import { getData } from "./utils/data.utils";

export type Action<T = string> = {
    type: T;
    payload?: Robot[] | unknown;
}

export type Robot = {
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
            const users = await getData<Robot[]>("https://jsonplaceholder.typicode.com/users");
            dispatch({ type: REQUEST_ROBOTS_SUCESS, payload: users });
        } catch (e: unknown) {
            dispatch({ type: REQUEST_ROBOTS_FAILED, payload: e })
        }
    }
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetchUsers();
}