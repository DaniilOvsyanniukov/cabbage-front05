import { useLocation } from 'react-router-dom';
import Balance from '../Balance';
import ToReportsBtn from '../ToReportsBtn';
import GoBackBtn from '../GoBackBtn';
import ChosenMonth from '../ChosenMonth';
import paths from '../../config/paths';

import s from './BalanceComponent.module.css';

const BalanceComponent = () => {
  const location = useLocation();

  return (
    <>
      <div className={s.balanceComponent}>
        <GoBackBtn />
        <Balance />
        {location.pathname === paths.transactions ? (
          <ToReportsBtn />
        ) : (
          <ChosenMonth />
        )}
      </div>
    </>
  );
};

export default BalanceComponent;
