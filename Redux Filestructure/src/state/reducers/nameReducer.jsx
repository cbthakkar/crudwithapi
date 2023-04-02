const name = (state = "Chirag Thakkar", action) =>{
    if(action.type === "CHANGE"){
        return state = "Chirag Raghuvanshi";
    }
    else if(action.type === "CHANGESAME"){
        return state = "Kano Raghuvanshi";
    }
    else{
        return state;
    }
}

export default name;