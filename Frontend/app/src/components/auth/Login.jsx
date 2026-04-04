import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../constants/form/form-schemas/auth-schema";
import { loginFields } from "../../constants/form/form-fields/AuthFields";
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {loginFields.map((field, index) => (
        <div key={index} className="mb-3">
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-secondary mb-1"
          >
            {field.label}
          </label>

          <input
            id={field.name}
            type={field.type}
            placeholder={field.placeholder}
            {...register(field.name)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {errors[field.name] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[field.name]?.message}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-all duration-300 mt-2"
      >
        Login
      </button>
    </form>
  );
};

export default Login;