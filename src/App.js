import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { paths } from './config';
//components
import Container from './components/Container';
import AppBar from './components/Header/appBar';
import UserMenu from './components/Header/userMenu';
import PrivateRoute from './components/Route/PrivateRoute';
import PublicRoute from './components/Route/PublicRoute';
//Transactions
import TransactionView from './pages/Transactions/TransactionView';
//Background
// import Background from './components/Background';
import authSelectors from './redux/auth/auth-selectors';
import './App.css';
import styles from './components/Header/Header.module.css';

//Auth
const Login = lazy(() => import('./pages/Auth/Login/Login'));
const Registration = lazy(() =>
  import('./pages/Auth/Registration/Registration'),
);
const Reports = lazy(() =>
  import('./pages/Reports' /* webpackChunkName: "Reports" */),
);

function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <header className={styles.headerContainer}>
        <AppBar></AppBar>
        {isLoggedIn ? <UserMenu /> : null}
      </header>
      <Container>
        <Suspense fallback={<div>Downloading...</div>}>
          <Routes>
            <Route
              path={paths.register}
              element={
                //  <PublicRoute restricted redirectTo={paths.login}>
                <PublicRoute restricted>
                  <Registration />
                </PublicRoute>
              }
            />
            <Route
              path={paths.login}
              element={
                //  <PublicRoute restricted redirectTo={paths.home}>
                <PublicRoute restricted>
                  <Login />
                </PublicRoute>
              }
            />

            <Route
              path={paths.transactions}
              element={
                <PrivateRoute>
                  <TransactionView />
                </PrivateRoute>
              }
            />
            <Route
              end
              path={paths.reports}
              element={
                <PrivateRoute>
                  <Reports />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </Container>
    </>
  );

  // return (
  //   <>
  //     <header className={styles.headerContainer}>
  //       <AppBar></AppBar>
  //       {isLoggedIn ? <UserMenu /> : null}
  //     </header>
  //    <Container>
  //     <Suspense fallback={<div>Downloading...</div>}>
  //       <Routes>
  //         <Route end path={paths.reports} element={<Reports />} />
  //         <Route path={paths.register} exact element={<Registration />} />
  //         <Route path={paths.login} exact element={<Login />} />
  //         <Route path="/transactions" exact element={<TransactionView />} />
  //       </Routes>
  //     </Suspense>
  //   </Container>
  //   </>
  // );
}

export default App;
