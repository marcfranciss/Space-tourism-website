import { Outlet } from "react-router";
import NavBar from "./Components/NavBar/NavBar";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
