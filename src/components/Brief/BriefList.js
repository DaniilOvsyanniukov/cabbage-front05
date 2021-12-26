import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/Brief/brief-operations';
import briefSelector from '../../redux/Brief/brief-selector';
import BriefItem from './BriefItem';
import s from './Brief.module.css';


export default function BriefList() {
  const expenseDatapreYear = useSelector(briefSelector.getExpensePerYear)
  const incomeDatapreYear = useSelector(briefSelector.getIncomePerYear)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fatchTransactionsPerYear());
  }, [dispatch]);
  return (
    <table className={s.BriefList}>
      <thead>
        <tr className={s.titleAll}>
          <th className={s.title}>Сводка</th>
        </tr>
      </thead>
      <tbody>
          <tr className={s.table}>
            <td className={s.columnTable}>
              1месяц 2000
            </td>
          </tr> 
      </tbody>
    </table>
  );
}
