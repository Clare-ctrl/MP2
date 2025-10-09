
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import TabSection from "./components/TabSection";
import "./index.css";

function App() {
  
  return (
    <div>
      <Header />
      <TabSection />
      <Outlet />

    </div>
  );
}

export default App;
