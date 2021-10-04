import React from 'react';

const TransactionItem  = ({ type, amount, currency }) => {
    return (
        <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    )
}

export default TransactionItem;

TransactionItem.defaultProps = {
  amount: 0,
};