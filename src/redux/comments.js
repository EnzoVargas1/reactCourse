
import * as ActionTypes from './ActionTypes';
//reducer function that manages the comments
//if state is undefined, defaut value would be COMMENts
export const Comments = (state = {
  errMess: null,
  comments:[]
}, action) => {
    //switch on the action type
    switch(action.type){
      case ActionTypes.ADD_COMMENTS:
        return{...state, isLoading: false, errMess:null, comments: action.payload}

        case ActionTypes.COMMENTS_FAILED:
            return{...state, isLoading: false, errMess:action.payload, comments: []}

        case ActionTypes.ADD_COMMENT: 
          var comment = action.payload;
          comment.date = new Date().toISOString();
          return {...state, comments: state.comments.concat(comment)};
        default:
            return state;
    }
}