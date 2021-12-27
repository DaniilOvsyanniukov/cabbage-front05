import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fatchIncomeBriefPerYearRequest,
  fatchIncomeBriefPerYearSuccess,
  fatchIncomeBriefPerYearError,
  fatchExpenseBriefPerYearRequest,
  fatchExpenseBriefPerYearSuccess,
  fatchExpenseBriefPerYearError
} from './brief-action';


const sortedData =(dataperYear)=> {
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

  });
  return sorted
}


const isLoading = createReducer(false, {
  [fatchIncomeBriefPerYearRequest]: () => true,
  [fatchIncomeBriefPerYearSuccess]: () => false,
  [fatchIncomeBriefPerYearError]: () => false,
  [fatchExpenseBriefPerYearRequest]: () => true,
  [fatchExpenseBriefPerYearSuccess]: () => false,
  [fatchExpenseBriefPerYearError]: () => false,
});

const expensePerYrarReducer = createReducer([], {
  [fatchIncomeBriefPerYearSuccess]: (_, { payload }) => { return sortedData(payload.data) },
});

const incomePerYearReducer = createReducer([], {
  [fatchExpenseBriefPerYearSuccess]: (_, { payload }) => { return sortedData(payload.data) },
});


const error = createReducer(null, {});

export default combineReducers({
    ExpensePerYear: expensePerYrarReducer,
    IncomePerYear: incomePerYearReducer,
    isLoading,
    error,
});