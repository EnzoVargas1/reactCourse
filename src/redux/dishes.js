import * as ActionTypes from './ActionTypes';

//reducer function that manages the dishes 
//if state is undefined, defaut value would be DISHES
export const Dishes = (state = {
    isLoading: true,
    errMess:null,
    dishes:[]
}, action) => {
    //switch on the action type
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return{...state, isLoading: false, errMess:null, dishes: action.payload}
        case ActionTypes.DISHES_LOADING:
            return{...state, isLoading: true, errMess:null, dishes: []}
        case ActionTypes.DISHES_FAILED:
            return{...state, isLoading: false, errMess:action.payload, dishes: []}
        default:
            return state;
    }
}