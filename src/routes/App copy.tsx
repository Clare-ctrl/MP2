
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import TabSection from "../components/TabSection";

function App() {
  
  return (
    <div>
      <Header />
      <main>
      <TabSection />
      <Outlet />
      </main>
    </div>
  );
}

export default App;
