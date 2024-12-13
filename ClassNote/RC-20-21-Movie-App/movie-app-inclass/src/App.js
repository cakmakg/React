import React from "react";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="dark:bg-gray-dark-main min-h-screen">
      <AuthProvider>
      <BrowserRouter>
        <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
