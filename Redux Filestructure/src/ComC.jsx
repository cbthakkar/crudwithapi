import React, { useContext } from 'react';
import { Name } from './ComA';

const ComC = () => {

  const use = useContext(Name);

  return (
    <div>
        <h1>Hello ComC { use }</h1>
    </div>
  )
}

export default ComC