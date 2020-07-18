import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const transactionAmounts = transactions.map((trans) => trans.amount);
  const balance = transactionAmounts
    .reduce((acc, t) => (acc += t), 0)
    .toFixed(2);

  return (
    <>
      <h4>Current Balance</h4>
      <h1 id="balance">{balance}</h1>
    </>
  );
};
