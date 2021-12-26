import {
  fatchIncomeBriefPerYearRequest,
  fatchIncomeBriefPerYearSuccess,
  fatchIncomeBriefPerYearError,
  fatchExpenseBriefPerYearRequest,
  fatchExpenseBriefPerYearSuccess,
  fatchExpenseBriefPerYearError
} from './brief-action';
import moment from 'moment';
import axios from 'axios';

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

  });
  return sorted
}

const fatchTransactionsPerYear = ()=> async dispatch => {
  dispatch(fatchIncomeBriefPerYearRequest());
  dispatch(fatchExpenseBriefPerYearRequest());
    const date = new Date()
  const year = moment(date).format('YYYY');
  try {
    const expenseData = await axios.get(`/expense`, {
      params: {
        category: '',
        month: '',
        year,
      },
    });
    const incomeData = await axios.get(`/income`, {
      params: {
        ategory: '',
        month: '',
        year,
      }
    });
    const sortedExpense = sortedData(expenseData.data);
    const sortedIncome = sortedData(incomeData.data);
    console.log(sortedExpense)
    console.log(sortedIncome)
    dispatch(fatchIncomeBriefPerYearSuccess(sortedExpense));
    dispatch(fatchExpenseBriefPerYearSuccess(sortedIncome));
  } catch (error) {
    dispatch(fatchIncomeBriefPerYearError(error));
    dispatch(fatchExpenseBriefPerYearError(error));
  }
};

const operation = {
  fatchTransactionsPerYear,
};

export default operation;
