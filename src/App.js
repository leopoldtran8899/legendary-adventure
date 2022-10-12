import React, { useEffect } from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import './App.css';
import Layout from './component/layout/Layout'
import ErrorPage from './page/error/ErrorPage'
import AboutPage from "./page/about/AboutPage";
function App() {
  useEffect(() => {
    document.title = 'Leopold Tran\'s page';
  });
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<AboutPage />} />
        {/* <Route path="frontend" element={<AboutPage />} /> */}

        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
const AppLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
