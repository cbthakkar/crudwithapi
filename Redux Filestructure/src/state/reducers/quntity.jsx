const quntity = ( state = 0, action) =>{
    if(action.type === "ADD"){
        return state = state + 1;
    }
    else  if(action.type === "LESS"){
        return state = state - 1;
    }
    else{
        return state;
    }
}

export default quntity;