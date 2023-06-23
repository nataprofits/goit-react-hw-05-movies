
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';


export const SharedLayout = () => {
  return (
    <>
     <Header/>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};
