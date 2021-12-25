import Tabs from '../../components/IncomeAndExpenses/Tabs';
import Balance from '../../components/Balance';
import ToReportsBtn from '../../components/ToReportsBtn';
import Brief from '../../components/Brief'



export default function TransactionView() {
  return (
    <>
      <Balance />
      <ToReportsBtn />
      <Tabs />
      <Brief />
    </>
  );
}
