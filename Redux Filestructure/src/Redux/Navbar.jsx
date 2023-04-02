import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Navbar = () => {

const dispatch = useDispatch();
const { increment, decrement} = bindActionCreators(actionCreators,dispatch);

const amount = useSelector(state => state.amount);
const name = useSelector(state => state.name);
const qun = useSelector(state => state.qun)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            State Bank
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
          <div>
            <button disabled={true} className="btn btn-primary">
                Your Balance : {amount}
            </button>
            <h1>My name is : { name }</h1>
          </div>

          <div className="counter">
            <h2>Quntity : </h2>
            <button onClick={() => {decrement()}}>-</button>
            <input type="text" value={qun}/>
            <button onClick={() => {increment()}}>+</button>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
