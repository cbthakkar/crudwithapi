export const depositMoney = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type : 'deposit',
            payload : amount
        })
    }
}

export const withdrawMoney = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type : 'withdraw',
            payload : amount
        })
    }
}

export const nameChange = (name) =>{
    return (dispatch) =>{
        dispatch({
            type:"CHANGE",
            payload: name
        })
    }
}

export const nameChangeSame = (name) =>{
    return (dispatch) =>{
        dispatch({
            type:"CHANGESAME",
            payload: name
        })
    }
}

export const increment = (qun) => {
    return (dispatch) =>{
        dispatch({
            type:"ADD",
            payload: qun
        })
    }
}

export const decrement = (qun) => {
    return (dispatch) =>{
        dispatch({
            type:"LESS",
            payload: qun
        })
    }
}