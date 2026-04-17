import React, { useState } from "react";
import { MapPin, BedDouble, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dummy Data (later replace with API)
const properties = [
  {
    id: 1,
    title: "Modern House in Karachi",
    price: "PKR 1.2 Crore",
    location: "Karachi",
    beds: 4,
    baths: 3,
    area: "120 sq yd",
    status: "active",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    id: 2,
    title: "Luxury Apartment",
    price: "PKR 80 Lac",
    location: "Hyderabad",
    beds: 3,
    baths: 2,
    area: "900 sq ft",
    status: "inactive",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
];

const ViewListing = () => {
  const [filter, setFilter] = useState("active");

  const filteredProperties = properties.filter(
    (item) => item.status === filter
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-24">
      <div className="container mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">
            Your Listings
          </h1>
          <p className="text-gray-500">
            Manage your active and inactive properties
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-8">
          <Button
            variant={filter === "active" ? "default" : "outline"}
            onClick={() => setFilter("active")}
          >
            Active Listings
          </Button>

          <Button
            variant={filter === "inactive" ? "default" : "outline"}
            onClick={() => setFilter("inactive")}
          >
            Inactive Listings
          </Button>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold">
                  {property.title}
                </h2>

                <p className="text-primary font-bold mt-1">
                  {property.price}
                </p>

                <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                  <MapPin size={16} />
                  {property.location}
                </div>

                {/* Features */}
                <div className="flex justify-between mt-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <BedDouble size={16} /> {property.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={16} /> {property.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <Square size={16} /> {property.area}
                  </span>
                </div>

                {/* Action */}
                <Button
                  variant="outline"
                  className="w-full mt-4"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            No {filter} listings found.
          </div>
        )}

      </div>
    </div>
  );
};

export default ViewListing;