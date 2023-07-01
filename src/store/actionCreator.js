import * as actions from './actionTypes'

export function bugSORTED(){
    return{
        type: actions.BUG_SORTED,
    }
}

export function bugRESOLVED(id , resolved){
    return {
        type : actions.BUG_RESOLVED,
        payload: {
            id,
            resolved
        }
    }
};
export function bugADDED(description , inputType){
    return {
        type : actions.BUG_ADDED,
        payload: {
            description ,
            inputType

        }
    }
};

export function bugREMOVED(id)
{
    return {
        type: actions.BUG_REMOVED,
        payload:{
            id
        }
    };
};