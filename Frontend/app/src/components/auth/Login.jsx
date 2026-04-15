import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../../constants/form/form-schemas/auth-schema";
import { loginFields } from "../../constants/form/form-fields/AuthFields";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      
      {loginFields.map((field, index) => (
        <div key={index} className="space-y-1">
          
          <label
            htmlFor={field.name}
            className="block text-sm text-secondary/70"
          >
            {field.label}
          </label>

          <Input
            size="lg"
            id={field.name}
            type={field.type}
            placeholder={field.placeholder}
            {...register(field.name)}
            
          />

          {errors[field.name] && (
            <p className="text-red-500 text-xs mt-2">
              {errors[field.name]?.message}
            </p>
          )}
        </div>
      ))}

       <Button
              width="full"
              variant="outline"
              size="lg"
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-all duration-300 mt-2 "
            >
              Login
            </Button>
    </form>
  );
};

export default Login;