import { Outlet, useLocation } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  const location = useLocation();

  // Check if the current path is "/login"
  const isDashboardPage = location.pathname === "/dashboard";

  return (
    <>
      {/* Render Nav only if not on the login page */}
      {!isDashboardPage && <Nav />}
      {/* <Nav/> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
