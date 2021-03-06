import { Switch, Redirect } from 'react-router';
import { Main, WrapperFooter } from './App.styled';
import { getFetchingCurrent } from './redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useEffect, lazy, Suspense } from 'react';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import * as authOperations from './redux/auth/auth-operations';
import 'react-toastify/dist/ReactToastify.css';
//components
import Footer from './components/Footer/Footer';
import AppBar from './components/AppBar/AppBar';
import Spinner from './components/Spinner/Spinner';
// Pages
// import HomePage from './pages/HomePage/HomePage';
// import AboutMoviePage from './pages/AboutMoviePage/AboutMoviePage';
// import MyListPage from './pages/MyListPage/MyListPage';
// import SearchPage from './pages/SearchPage/SearchPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LogInPage from './pages/LogInPage/LogInPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage' /* webpackChunkName: 'HomePage' */));
const AboutMoviePage = lazy(() =>
  import('./pages/AboutMoviePage/AboutMoviePage' /* webpackChunkName: 'AboutMoviePage' */),
);
const MyListPage = lazy(() =>
  import('./pages/MyListPage/MyListPage' /* webpackChunkName: 'MyListPage' */),
);
const SearchPage = lazy(() =>
  import('./pages/SearchPage/SearchPage' /* webpackChunkName: 'SearchPage' */),
);
// const SignUpPage = lazy(() =>
//   import('./pages/SignUpPage/SignUpPage' /* webpackChunkName: 'SignUpPage' */),
// );
// const LogInPage = lazy(() =>
//   import('./pages/LogInPage/LogInPage' /* webpackChunkName: ' LogInPage' */),
// );

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(getFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    !isFetchingCurrent && (
      <>
        <AppBar />
        <Main>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <PublicRoute path="/" exact redirectTo="/home" restricted>
                <Redirect to="/login" />
              </PublicRoute>

              <PublicRoute path="/signup" redirectTo="/home" restricted>
                <SignUpPage />
              </PublicRoute>

              <PublicRoute path="/login" exact redirectTo="/home" restricted>
                <LogInPage />
              </PublicRoute>

              <PrivateRoute exact path="/home">
                <HomePage />
              </PrivateRoute>

              <PrivateRoute exact path="/movies/:movieId">
                <AboutMoviePage />
              </PrivateRoute>

              <PrivateRoute exact path="/my_list">
                <MyListPage />
              </PrivateRoute>

              <PrivateRoute exact path="/search">
                <SearchPage />
              </PrivateRoute>
            </Switch>
          </Suspense>
          <ToastContainer autoClose={4000} />
        </Main>
        <WrapperFooter>
          <Footer />
        </WrapperFooter>
      </>
    )
  );
}

export default App;
