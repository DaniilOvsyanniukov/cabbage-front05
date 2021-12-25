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



const isLoading = createReducer(false, {
  [fatchIncomeBriefPerYearRequest]: () => true,
  [fatchIncomeBriefPerYearSuccess]: () => false,
  [fatchIncomeBriefPerYearError]: () => false,
  [fatchExpenseBriefPerYearRequest]: () => true,
  [fatchExpenseBriefPerYearSuccess]: () => false,
  [fatchExpenseBriefPerYearError]: () => false,
});

const expensePerYrarReducer = createReducer([], {
  [fatchIncomeBriefPerYearSuccess]: (_, { payload }) => payload,
});

const incomePerYearReducer = createReducer([], {
  [fatchExpenseBriefPerYearSuccess]: (_, { payload }) => payload,
});


const error = createReducer(null, {});

export default combineReducers({
    ExpensePerYear: expensePerYrarReducer,
    IncomePerYear: incomePerYearReducer,
    isLoading,
    error,
});