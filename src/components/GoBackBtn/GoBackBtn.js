import { Link, useLocation } from 'react-router-dom';

import { paths } from '../../config';
import { ReactComponent as GoBack } from '../../images/reportsCategories/goBack.svg';
import s from './GoBackBtn.module.css';

const GoBackBtn = ({ className }) => {
  const location = useLocation();

  return (
    <>
      <Link
        to={paths.home}
        className={`${
          location.pathname === paths.transactions ? s.visuallyHidden : s.link
        }`}
      >
        <GoBack className={s.icon} />
        <span className={s.text}>Вернуться на главную</span>
      </Link>
    </>
  );
};

export default GoBackBtn;
