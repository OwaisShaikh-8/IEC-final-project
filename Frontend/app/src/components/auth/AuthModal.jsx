import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const AuthModal = () => {
  const [mode, setMode] = useState("login");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(mode === "login" ? loginSchema : signupSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full h-screen bg-black/70 fixed top-0 left-0 flex items-center justify-center z-50">
      <div className="w-1/3 bg-white rounded-lg p-15">
        <div className="flex w-full">
          <button
            onClick={() => {
              setMode("login");
              reset();
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
              reset();
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

        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-6">
          {mode === "signup" && (
            <div className="mb-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-secondary mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name")}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
          )}

          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-secondary mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-secondary mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-all duration-300 mt-2">
            {mode === "login" ? "Login" : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
