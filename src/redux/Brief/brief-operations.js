import {
  fatchBriefPerYearRequest,
  fatchBriefPerYearSuccess,
  fatchBriefPerYearError,
} from './chosenMonth-action';
import moment from 'moment';
import axios from 'axios';

const fatchTransactionsPerYear = ()=> async dispatch => {
    dispatch(fatchBriefPerYearRequest());
    const date = new Date()
    const month = moment(date).format('YYYY');
  try {
    const expenseData = await axios.get(`/expense`, {
      params: {
        category: '',
        month,
        year: '',
      },
    });
    const incomeData = await axios.get(`/income`, {
      params: {
        category: '',
        month,
        year: '',
      },
    });
    console.log(expenseData);
    dispatch(fatchExpensePerMonthSuccess(expenseData.data));
    dispatch(fatchIncomePerMonthSuccess(incomeData.data));
  } catch (error) {
    dispatch(fatchExpensePerMonthError(error));
    dispatch(fatchIncomePerMonthError(error));
  }
};

const operati = {
  fatchTransactionsPerMonth,
};

export default operati;
