import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)
    const monetarySign = transaction.amount < 0 ? '-' : '+'
    const transactionColorClass = transaction.amount < 0 ? 'minus' : 'plus'
    const roundedAmount = Math.abs(transaction.amount)

    return (
        <div>
            <li className={transactionColorClass}>
                {transaction.text}
                <span>{monetarySign}${roundedAmount}</span>
                <button onClick={() => deleteTransaction(transaction.id)}className="delete-btn">x</button>
			</li>
        </div>
    )
}
