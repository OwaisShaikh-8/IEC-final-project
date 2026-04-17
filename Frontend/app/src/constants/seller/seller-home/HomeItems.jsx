import { PlusCircle, List, MessageCircle } from "lucide-react";

export const stats = [
  { title: "Total Listings", value: 12, color: "text-primary" },
  { title: "Active Listings", value: 8, color: "text-green-500" },
];

export const actions = [
  {
    name: "Add New Property",
    icon: PlusCircle,
    variant: "default",
  },
  {
    name: "View Listings",
    icon: List,
    variant: "outline",
  },

];