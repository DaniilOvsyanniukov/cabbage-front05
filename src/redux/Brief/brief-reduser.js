import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
    incrementMonth,
    decrementMonth,
    fatchExpensePerMonthRequest,
    fatchExpensePerMonthSuccess,
    fatchExpensePerMonthError,
    fatchIncomePerMonthRequest,
    fatchIncomePerMonthSuccess,
    fatchIncomePerMonthError

    
} from './chosenMonth-action';



const isLoading = createReducer(false, {
  [fatchExpensePerMonthRequest]: () => true,
  [fatchExpensePerMonthSuccess]: () => false,
  [fatchExpensePerMonthError]: () => false,
  [fatchIncomePerMonthRequest]: () => true,
  [fatchIncomePerMonthSuccess]: () => false,
  [fatchIncomePerMonthError]: () => false,
});
const datenow = Date.now()
const monthValue = createReducer(`${datenow}`, {
    [incrementMonth]: (_, { payload }) => payload.nextMonthToState,
    [decrementMonth]: (_, { payload }) => payload.nextMonthToState,
});

const exponsePerMonthReducer = createReducer([], {
  [fatchExpensePerMonthSuccess]: (_, { payload }) => payload,
});

const incomePerMonthReducer = createReducer([], {
  [fatchIncomePerMonthSuccess]: (_, { payload }) => payload,
});


const error = createReducer(null, {});

export default combineReducers({
    desiredMonth: monthValue,
    ExponsePerDesiredMonth: exponsePerMonthReducer,
    IncomePerDesiredMonth: incomePerMonthReducer,
    isLoading,
    error,
});