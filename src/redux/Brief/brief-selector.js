const getExpensePerYear = (state) => state.transactionsPerYear.ExpensePerYear
const getIncomePerYear =(state) => state.transactionsPerYear.IncomePerYear
const selectors = { getExpensePerYear, getIncomePerYear};
export default selectors;