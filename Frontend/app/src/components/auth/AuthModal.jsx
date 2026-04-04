import { useState } from "react";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const AuthModal = () => {
  const [mode, setMode] = useState("login");

  

  return (
    <div className="w-full h-screen bg-black/70 fixed top-0 left-0 flex items-center justify-center z-50">
      <div className="w-1/3 bg-white rounded-lg p-15">
        <div className="flex w-full">
          <button
            onClick={() => {
              setMode("login");
              
            }}
            className={`py-3 px-5 w-1/2 rounded-l-full border font-medium text-lg border-primary ${
              mode === "login"
                ? "bg-primary/5  text-primary"
                : "bg-gray-100 text-secondary"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => {
              setMode("signup");
            }}
            className={`py-3 px-5 w-1/2 rounded-r-full border-y border-r  font-medium text-lg border-primary ${
              mode === "signup"
                ? "bg-primary/5  text-primary"
                : "bg-gray-100 text-secondary"
            }`}
          >
            Signup
          </button>
        </div>

        <h2 className="text-center mt-8 text-5xl font-bold text-secondary">
          Register
        </h2>
        <p className="text-center mt-4 text-lg">
          Create an internal agent account
        </p>
        
        {
          mode === "login" ? <Login /> : <SignUp />
        }
       
      </div>
    </div>
  );
};

export default AuthModal;
