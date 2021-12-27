import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../../redux/transaction';
import Transaction from '../Transaction';
import Loader from 'react-js-loader';

import s from './TransactionsList.module.css';

const TransactionsList = ({ income, transactions, onDelete }) => {
  const isLoading = useSelector(transactionsSelectors.getIsLoading);
  return (
    <div className={s.tableDeskWrapper}>
      <table className={s.table}>
        <thead className={s.tableHead}>
          <tr className={s.tableHeadTr}>
            <th className={s.tableTransThDate}>Дата</th>
            <th className={s.tableTransThProduct}>Описание</th>
            <th className={s.tableTransThCategory}>Категория</th>
            <th className={s.tableTransThCost}>Сумма</th>
          </tr>
        </thead>

        <tbody className={s.tableBody}>
          {isLoading ? (
            <tr className={`${s.tableTr} ${s.loading}`}>
              <td>
                <Loader
                  type={s.spinnerCircle}
                  bgColor={'#ff751d'}
                  color={'#ff751d'}
                  size={60}
                />
              </td>
            </tr>
          ) : (
            transactions.length > 0 &&
            transactions.map(item => {
              return (
                <Transaction
                  key={item._id}
                  item={item}
                  income={income}
                  onDelete={onDelete}
                />
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsList;
