import React from "react";
import Navbar from "./Redux/Navbar";
import Shop from "./Redux/Shop";
// import ComA from "./ComA";
// import ComB from "./ComB";
// import ComC from "./ComC";
// import About from "./component/About";
// import Context from "./component/Context";
// import NoteState from "./harrycontext/NoteState";

function App(props) {
  return (
    <>
      <Navbar />
      <div className="container">
        <Shop />
      </div>

      {/* <NoteState>
        <ComA />
        <ComB />
        <ComC />
        <About/>
        <Context/>
      </NoteState> */}
    </>
  );
}

export default App;
