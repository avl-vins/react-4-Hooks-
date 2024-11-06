export const userReducer = ( state,action )=>{
    const { type , payload } = action
    switch (type) {
        case "ADD-USER":
            
        return [ ...state , payload ];
        
        case "EDIT-USER":
            
        return state.map( (user)=>{
             if(user.id === payload.id){
                user={...payload}
             }
             return user
        }) ;
        case "DELETE-USER":
            
        return state.filter( (user) => user.id !== payload ) ;
    
        default:
            return state;
    }
}