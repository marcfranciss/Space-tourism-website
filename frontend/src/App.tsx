import { Outlet } from "react-router";
import NavBar from "./Components/NavBar/NavBar";
import useBodyBackground from "./Components/useBodyBackground";

const App: React.FC = () => {
  useBodyBackground(); /* custom hook: for dynamic background */
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
