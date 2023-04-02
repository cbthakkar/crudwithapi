import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {

    const s1 = {
        "name" : "Chirag",
        "class" : "First"
    }

   const [state, setState] = useState(s1);
  const update = () =>{
        setTimeout(() => {
            setState({
                "name" : "Mohini",
                "class" : "Last"
            });
        }, 4000);
   }
  return (
    <NoteContext.Provider value={{state, update}}>
        { props.children }
    </NoteContext.Provider>
  )
}

export default NoteState