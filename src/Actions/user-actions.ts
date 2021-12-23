import { AnyAction } from "redux";
import { User } from "../Models/User"

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";


export const addUser = (user: User): AnyAction => {
    return {
        type: ADD_USER,
        user
    }
}

export const deleteUser = (id: number): AnyAction => {
    return {
        type: DELETE_USER,
        id
    }
}

export const editUser = (name:string, age:number, id:number): AnyAction => {
    return {
        type: EDIT_USER,
        name,
        age,
        id
    }
}