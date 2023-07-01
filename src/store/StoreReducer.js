import React from "react";
import * as actions from './actionTypes';
import { v4 as uuidv4 } from 'uuid';


function StoreReducer(state = [], action) {

    switch (action.type) {

        case actions.BUG_ADDED:
            return [...state, {
                id: uuidv4(), description: action.payload.description,
                inputType: action.payload.inputType,
                resolved: false
            }];

        case actions.BUG_RESOLVED:
            //const findPos = state.filter((bug) => bug.id === action.payload.id)
            return state.map((bug) => {
                if (bug.id === action.payload.id) {
                    return { ...bug, resolved: action.payload.resolved };
                }
                return bug;
            });

        case actions.BUG_SORTED:
            return state;//.filter((bug) => bug.resolved === true) ;

        case actions.BUG_REMOVED:
            return state.filter((bug) => bug.id !== action.payload.id);
        default:
            return state;

    }
}


export default StoreReducer

