import { useState } from "react";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { X } from 'lucide-react';
import {Button} from "@/components/ui/button";
const AuthModal = ({ setShowModal }) => {
  const [mode, setMode] = useState("login");

  return (
    <div className="w-full h-screen bg-black/70 fixed top-0 left-0 flex items-center justify-center z-50">
      <div className="w-1/3 bg-white rounded-2xl p-15 relative">
        <Button
          variant="default"
          size="icon"
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 cursor-pointer text-secondary/40 hover:text-secondary transition-all duration-300"
        >
          <X size={20} />
        </Button>
        <div className="flex w-full">
          <button
            onClick={() => {
              setMode("login");
            }}
            className={`py-3 px-5 w-1/2 rounded-l-full border font-medium text-lg border-main ${
              mode === "login"
                ? "bg-main/5  text-main"
                : "bg-gray-100 text-highlight"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => {
              setMode("signup");
            }}
            className={`py-3 px-5 w-1/2 rounded-r-full border-y border-r  font-medium text-lg border-main ${
              mode === "signup"
                ? "bg-main/5  text-main"
                : "bg-gray-100 text-highlight"
            }`}
          >
            Signup
          </button>
        </div>

        <h2 className="text-center mt-8 text-5xl font-bold text-highlight">
          {mode === "login" ? "Welcome Back!" : "Create Account"}
        </h2>
        <p className="text-center mt-4 text-lg">
          {mode === "login"
            ? "Login to your account to continue"
            : "Sign up to create your account"}
        </p>

        {mode === "login" ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default AuthModal;
