// import React, { useState } from 'react';
import Tabs from '../../components/IncomeAndExpenses/Tabs';
import BalanceComponent from '../../components/BalanceComponent/BalanceComponent';
import s from './TransactionView.module.css';

export default function TransactionView() {
  return (
    <>
      <div className={s.transactionsContainer}>
        <BalanceComponent />
        <Tabs />
      </div>
    </>
  );
}
