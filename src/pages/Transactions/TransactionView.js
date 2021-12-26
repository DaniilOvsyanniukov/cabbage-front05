// import React, { useState } from 'react';
import Tabs from '../../components/IncomeAndExpenses/Tabs';
import Balance from '../../components/Balance';
import ToReportsBtn from '../../components/ToReportsBtn';
import s from './TransactionView.module.css';

export default function TransactionView() {
  return (
    <>
      <div className={s.transactionViewGeneral}>
        <div className={s.transactionViewBar}>
          <Balance />
          <ToReportsBtn />
        </div>
        <Tabs />
      </div>
    </>
  );
}
