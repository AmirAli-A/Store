import { produce } from "immer";

const INITIAL_STATE = [

    
]

 const UsersReducer =(state=INITIAL_STATE,action)=>{
    switch (action.type) {

        case 'ENTER_MOBILE_NUMBER':
            return produce(state,(draft)=>{
                
            })

        case 'ENTER_MESSAGE_NUMBER':
            return [...state,{messageCode:action.userMessageCode}]

        default:
            return state;
    }
}

export default UsersReducer;