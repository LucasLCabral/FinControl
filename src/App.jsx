import { Outlet, useLocation } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  const location = useLocation();

  // Check if the current path is "/login"
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {/* Render Nav only if not on the login page */}
      {/* {!isLoginPage && <Nav />} */}
      <Nav/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
