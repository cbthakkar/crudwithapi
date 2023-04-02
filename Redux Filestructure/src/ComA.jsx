import React, { createContext } from "react";
import ComB from "./ComB";

const Name = createContext();

const ComA = () => {
  return (
    <Name.Provider value={"Hello Emirates..."}>
      <ComB />
    </Name.Provider>
  );
};

export default ComA;
export { Name };
