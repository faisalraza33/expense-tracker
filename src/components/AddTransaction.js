import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    if (description.trim() === '' || amount.trim() === '' || amount === '0') {
      return;
    }
    const newTransaction = {
      id: new Date().getTime(),
      description,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setDescription('');
    setAmount('');
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Detail of Transaction"
          />
        </div>
        <div className="form-control">
          <label htmlFor="transactionamount">Transactin Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Transactin Amount"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};
