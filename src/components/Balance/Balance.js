import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import paths from '../../config/paths';
import axios from 'axios';

import s from './Balance.module.css';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

import Notification from '../Notification';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const Balance = ({ mobile }) => {
  const location = useLocation();

  const balance = useSelector(authSelectors.getBalance);

  const setToken = useSelector(authSelectors.getToken);

  const dispatch = useDispatch();

  const [sum, setSum] = useState('');

  const [inputBalance, setInputBalance] = useState(true);
  const toggleWindow = () => {
    setInputBalance(inputBalance => !inputBalance);
  };

  useEffect(() => {
    token.set(setToken);
    dispatch(authOperations.getBalance());
  }, [dispatch]);

  useEffect(() => {
    setSum(balance);
  }, [balance]);

  const handleChangeBalance = e => setSum(e.currentTarget.value);

  const handleSubmitForm = e => {
    e.preventDefault();
    dispatch(authOperations.setBalance(sum));
  };
  return (
    <form
      onSubmit={handleSubmitForm}
      className={`${s.reportBalance} ${
        location.pathname === paths.reports && `${s.reportBalancePage}`
      }`}
    >
      <label htmlFor="balans" className={s.balanceLabel}>
        Баланс:
        <div className={s.buttonsGroup}>
          {balance === null || balance === 0 || balance === undefined ? (
            <>
              {inputBalance && <Notification onClose={toggleWindow} />}
              <input
                type="number"
                maxLength="10"
                placeholder="00.00"
                onChange={handleChangeBalance}
                className={
                  mobile
                    ? `${s.balanceInputReport} ${s.balanceInput}`
                    : `${s.balanceInput}`
                }
                autoComplete="off"
              />
              <button
                className={
                  mobile
                    ? `${s.balanceInputReport} ${s.balanceButton}`
                    : `${s.balanceButton} `
                }
                type="submit"
              >
                ПОДТВЕРДИТЬ
              </button>
            </>
          ) : (
            <>
              <p
                className={
                  mobile
                    ? `${s.balanceInput} ${s.balanceInputReport}`
                    : `${s.balanceInput}`
                }
              >
                {`${balance.toLocaleString('ru')}.00`} UAH
              </p>
              <button
                className={`${s.balanceButton} ${
                  location.pathname === paths.reports && `${s.visuallyHidden}`
                }`}
                disabled
              >
                ПОДТВЕРДИТЬ
              </button>
            </>
          )}
        </div>
      </label>
    </form>
  );
};

export default Balance;
