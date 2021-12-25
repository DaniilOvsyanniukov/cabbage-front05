import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/Brief/brief-operations';
import briefSelector from '../../redux/Brief/brief-selector';
import s from './Brief.module.css';

function sortedData(dataperYear) {
  if (dataperYear=== undefined || dataperYear.length === 0){return}
  let sorted = [];
  dataperYear.forEach(transactions => {

    const findMonth = sorted.find((month, index, array) => {
      if (month.month === transactions.month) {
        return true
      } else {
        return false
      }
    })

    if (findMonth === undefined) {
        const newMonth = new Object();
        newMonth.month = transactions.month;
        newMonth.sum = transactions.sum;
        sorted.push(newMonth)
    } else {
      const index = sorted.findIndex((month) => {
           if (month.month === transactions.month) {
        return true
      } else {
        return false
        }
      })
        const editToMonth = new Object();
        editToMonth.month = transactions.month;
        editToMonth.sum = Number(transactions.sum) + Number(findMonth.sum);
        sorted.splice(index, 1, editToMonth)

    }

    console.log(findMonth)
  });
  
  return sorted
}
export default function BriefList() {
  const expenseDatapreYear = useSelector(briefSelector.getExpensePerYear)
  const incomeDatapreYear = useSelector(briefSelector.getIncomePerYear)
  console.log(expenseDatapreYear)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fatchTransactionsPerYear());
  }, [dispatch]);

  useEffect(() => {

      console.log('вызвался юзефект с переборкой массива')
    console.log(sortedData(expenseDatapreYear.data))
  }, [expenseDatapreYear]);

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
