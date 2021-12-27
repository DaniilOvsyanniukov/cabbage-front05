import GoBackBtn from '../../components/GoBackBtn';
import Balance from '../../components/Balance';
import ChosenMonth from '../../components/ChosenMonth';
import ReportsCategories from '../../components/ReportsCategories';
import ExponsesAndIncome from '../../components/TransactionsPerMonth';
import s from './Reports.module.css';

const Reports = () => {
  return (
    <div className={s.section}>
      <div className={s.balanceWrapper}>
        <GoBackBtn />
        <Balance />
        <ChosenMonth />
      </div>
      <ExponsesAndIncome />
      <ReportsCategories />
    </div>
  );
};

export default Reports;
