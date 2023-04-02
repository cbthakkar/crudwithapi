import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney, nameChange, nameChangeSame} = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector(state => state.amount);
  const name = useSelector(state => state.name);
  const qun = useSelector(state => state.qun);

  let total = qun * 50;
  let per = 10;
  let discount = total * (per/100);
  let finalprice = total - discount;

  return (
    <div>
        <h2 className='mt-4'>Deposit/Withdraw Money</h2>
        <button className="btn btn-primary mx-2" onClick={() => {withdrawMoney(100)}}>-</button>
        Update Balance : { amount }
        <button className="btn btn-primary mx-2" onClick={() => {depositMoney(100)}}>+</button>
        <br />
        <br />
        <h1>Name : { name }</h1>
        <br />
        <button className="btn btn-success mx-2" onClick={() => {nameChange()}}>Same NAme </button>
        <button className="btn btn-success mx-2" onClick={() => {nameChangeSame()}}>Change NAme </button>
        <br />
        <br />
        <h1>Product Price 10$</h1>
        <h1>Quntity : { qun }</h1>
        <h2>Total : { total }</h2>
        <h5>10% discount price : { finalprice } </h5>
    </div>
  )
}

export default Shop