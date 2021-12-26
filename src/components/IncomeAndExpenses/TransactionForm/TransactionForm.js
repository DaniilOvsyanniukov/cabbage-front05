import React, { useState, useEffect, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import CategoryInput from '../CategoryInput';
import CostEditor from '../CostEditor';
import CategorySelect from '../CategorySelect';
import Button from '../Button';
import {
  transactionsOperations,
  transactionsActions,
} from '../../../redux/transaction';
import { ReactComponent as Calendar } from '../../../images/reportsCategories/calendar.svg';

import s from './TransactionForm.module.css';

export default function TransactionForm({
  options,
  income,
  onSubmit,
  placeholder,
}) {
  const [date, setDate] = useState(moment().valueOf());
  const [description, seDescription] = useState('');
  const [category, setCategory] = useState(null);
  const [sum, setSum] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!income) {
      const formatDate = moment().valueOf();
      dispatch(transactionsOperations.getExpenseByDate(formatDate));
    }
    if (income) {
      const momentDate = moment().valueOf();
      dispatch(transactionsOperations.getIncomeByDate(momentDate));
    }
  }, [dispatch, date, income]);

  useEffect(() => {
    handleClearForm();
  }, [income]);

  const handleChangeCost = e => setSum(e.target.value);
  const handleChangeProduct = e => seDescription(e.target.value);
  const handleChangeCategory = e => setCategory(e);

  const handleChangeDate = date => {
    const momentDate = moment(date).valueOf();
    setDate(momentDate);
    dispatch(transactionsActions.setDate(momentDate));
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const transaction = { date, description, category: category.label, sum };
    console.log('transaction', transaction);
    console.log('date', moment(date).format('DD MMM YYYY hh:mm a'));
    onSubmit(transaction);
    handleClearForm();
  };

  const handleClearForm = () => {
    setDate(moment().valueOf());
    seDescription('');
    setCategory('');
    setSum('');
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={s.datepickerButton} onClick={onClick} ref={ref}>
      <div className={s.wrapper}>
        <Calendar className={s.calendar} />
        {value}
      </div>
    </button>
  ));

  return (
    <div className={s.inputContainer}>
      <div className={s.innerContainer}>
        <div className={s.datepickerWrapper}>
          <DatePicker
            locale={ru}
            selected={date}
            onChange={handleChangeDate}
            dateFormat="dd.MM.yyyy"
            todayButton="Сегодня"
            customInput={<CustomInput />}
          />
        </div>
        <form className={s.form}>
          <CategoryInput
            value={description}
            onChange={handleChangeProduct}
            income={income}
          />
          <div className={s.categotySelectWrapper}>
            <CategorySelect
              onChange={handleChangeCategory}
              category={category}
              options={options}
              income={income}
              placeholder={placeholder}
            />
          </div>
          <CostEditor cost={sum} onChange={handleChangeCost} />
        </form>
      </div>
      <div className={s.btnsContainer}>
        <Button
          type="submit"
          className={`${s.button} ${s.leftButton}`}
          onClick={handleFormSubmit}
        >
          Ввод
        </Button>
        <Button type="button" onClick={handleClearForm} className={s.button}>
          Очистить
        </Button>
      </div>
    </div>
  );
}
