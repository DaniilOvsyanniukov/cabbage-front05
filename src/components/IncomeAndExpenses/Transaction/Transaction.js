import moment from 'moment';
import TextTruncate from 'react-text-truncate';
import { ReactComponent as DeleteButton } from '../../../images/reportsCategories/deleteBtn.svg';
import Button from '../Button';

import s from './Transaction.module.css';

export default function Transaction({ item, income, onDelete }) {
  const currCost = income ? item.sum : -item.sum;
  const currClass = income
    ? `${s.tableAmountIncome}`
    : `${s.tableAmountExpense}`;

  return (
    <tr className={s.tableTr}>
      <td className={s.tableDate}>{moment(item.date).format('DD.MM.yyyy')}</td>
      <td className={s.tableProduct}>
        <TextTruncate
          line={1}
          element="span"
          truncateText="…"
          text={item.description}
        />
      </td>
      <td className={s.tableCategory}>{item.category}</td>
      <td className={s.tableCost}>
        <span className={currClass}>{`${currCost}.00 грн.`}</span>
        <span className={s.tableDelete}>
          <Button
            type="button"
            className={s.deleteBtn}
            onClick={() => onDelete(item._id)}
          >
            <DeleteButton />
          </Button>
        </span>
      </td>
    </tr>
  );
}
