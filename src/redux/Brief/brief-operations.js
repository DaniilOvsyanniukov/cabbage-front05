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
    dispatch(fatchIncomeBriefPerYearSuccess(expenseData.data));
    dispatch(fatchExpenseBriefPerYearSuccess(incomeData.data));
  } catch (error) {
    dispatch(fatchIncomeBriefPerYearError(error));
    dispatch(fatchExpenseBriefPerYearError(error));
  }
};

const operation = {
  fatchTransactionsPerYear,
};

export default operation;
