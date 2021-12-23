import { AnyAction } from "redux";
import { ADD_USER, DELETE_USER, EDIT_USER } from "../Actions/user-actions";
import { User } from "../Models/User";

const getDefaultState = () => {
    const persisterUser = localStorage.getItem("persisted-user");
    if (persisterUser) {
        const exisitingUsers = JSON.parse(persisterUser);
        console.log("Found eisiting user", exisitingUsers);
        return exisitingUsers;
    }
    return [];
}

export const UserReducer = (state: Array<User> = getDefaultState(), action: AnyAction) => {
    let users = [...state];
    switch (action.type) {
        case ADD_USER: {
            users = [...state, action.user];
        } break;
        case EDIT_USER: {
            users = state.map((user) => {
                if (user.id === action.id) {
                    return { ...user, name: action.name, age: action.age }
                }
                return user;
            });
        } break;
        case DELETE_USER: {
            users = state.filter((user) => user.id !== action.id);
        } break;
        default: return state;
    };
    localStorage.setItem("persisted-user", JSON.stringify(users));
    return users;
}

