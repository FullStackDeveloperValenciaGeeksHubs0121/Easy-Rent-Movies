import {LOGIN, LOGOUT } from '../types';

const initialState = {
    user : {},
    token : ''
};

const userRouter = (state = initialState, action) => {
    switch(action.type){
        case LOGIN :
            return action.payload;
        
        case LOGOUT : 
            return action.payload;
            
       // case UPDATE_USER :
           // return {...state , user: action.payload};

        default : 
            return state
    }
}

export default userRouter;