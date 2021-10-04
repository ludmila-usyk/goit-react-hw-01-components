import React from 'react';
import PropTypes from 'prop-types';
import style from './transactionHistory.module.css';
import TransactionItem from './TransactionsItem';


const TransavtionHistory = ({ items }) => {
    return (
        <section className={style.heads}>
        <h2>Задание 4</h2>
        <table className={style.history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(item => (
          <TransactionItem 
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
          />
      ))}
  </tbody>
</table>
</section>
    )
}

export default TransavtionHistory;

TransavtionHistory.prototypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}