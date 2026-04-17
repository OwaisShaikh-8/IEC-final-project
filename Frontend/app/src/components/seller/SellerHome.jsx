import React from "react";

import { Button } from "@/components/ui/button";
import { stats, actions } from "../../constants/seller/seller-home/HomeItems";
const SellerHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 flex items-center justify-center">
      <div className="container">
        
        <div className="p-10 mb-2">
          <h1 className="text-5xl font-bold text-primary mb-2">
            Hello, User 👋
          </h1>
          <p className="text-secondary text-lg">
            Welcome to your Seller Account. Manage your listings and gain
            perfect customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-md"
            >
              <h2 className="text-gray-500 text-sm">{item.title}</h2>
              <p className={`text-5xl font-bold mt-2 ${item.color}`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md p-10">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

          <div className="flex flex-col sm:flex-row gap-4">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Button
                  key={index}
                  variant={action.variant}
                  size="lg"
                  className="flex items-center justify-center gap-2"
                >
                  <Icon size={20} />
                  {action.name}
                </Button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SellerHome;