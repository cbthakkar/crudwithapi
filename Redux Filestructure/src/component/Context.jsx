import React, { useContext } from 'react';
import noteContext from '../harrycontext/noteContext';

const Context = () => {
    const use = useContext(noteContext);
  return (
    <div>This is a { use.state.name} and he is class in { use.state.class}</div>
  )
}

export default Context