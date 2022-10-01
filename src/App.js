import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import Layout from './component/layout/Layout'
import LandingPage from './page/landing/LandingPage'
import ErrorPage from './page/error/ErrorPage'
import AboutPage from "./page/about/AboutPage";
function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
const AppLayout = () => {
  return(
    <Layout>
      <Outlet/>
    </Layout>
  )
}

export default App;
