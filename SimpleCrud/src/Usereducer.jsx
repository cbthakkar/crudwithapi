import React, { useReducer } from 'react'

const Usereducer = () => {



    function Reducer(state, action) {
        if (action.type === "CHANGENAME") {
            return { ...state, name: "Rajesh Nagar", age:33 }
        }
        if (action.type === "PLUS") {
            return { ...state, number: state.number + 1 }
        }
        if (action.type === "MINUS") {
            return { ...state, number: state.number - 1 }
        }
    }

    const initistate = {
        name: "Rajesh",
        number: 0,
        age: 22
    }

    const [state, dispatch1] = useReducer(Reducer, initistate);


    return (
        <div className='container'>
            <button onClick={() => dispatch1({ type: "CHANGENAME" })}>Change name</button>
            <h1>My name is : {state.name} & My Age is : {state.age}</h1>
            <hr />
            <button onClick={() => dispatch1({ type: "PLUS" })}>+</button>
            <h1>{state.number}</h1>
            <button onClick={() => dispatch1({ type: "MINUS" })}>-</button>
        </div>
    )
}

export default Usereducer