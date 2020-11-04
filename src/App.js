import "./App.css";

import { useSelector } from "react-redux";

import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return <div className="App">{isLoggedIn ? <MainPage /> : <LoginPage />}</div>;
}

export default App;
