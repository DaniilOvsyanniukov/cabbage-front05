const getDesiredDate = (state) => state.desiredMonth.desiredMonth;
const getExponsePerDesiredMonth = (state) => state.desiredMonth.ExponsePerDesiredMonth
const getIncomePerDesiredMonth =(state) => state.desiredMonth.IncomePerDesiredMonth
const selectors = { getDesiredDate, getExponsePerDesiredMonth, getIncomePerDesiredMonth};
export default selectors;