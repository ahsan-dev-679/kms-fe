import * as uuid from "uuid";
import { IconGauge, IconFingerprint } from "@tabler/icons-react";
import { LuHome } from "react-icons/lu";

export const menuList = [
  {
    _id: uuid.v4(),
    title: "Sizzling Salsa Chicken Bites",
    desc: "Tender chicken bites tossed in a vibrant salsa sauce, topped with diced tomatoes, onions, and cilantro for a spicy kick.",
    price: 899,
    img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
  },
  {
    _id: uuid.v4(),

    title: "Plain Chicken Bites 9 PCS",
    desc: "Classic chicken bites seasoned with a blend of herbs and spices, fried to a perfect golden brown.",
    price: 649,
    img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
  },
  {
    _id: uuid.v4(),

    title: "Buffalo Chicken Bites 9 PCS",
    desc: "Spicy and tangy buffalo chicken bites, served with a side of cooling ranch dressing.",
    price: 799,
    img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
  },
  {
    _id: uuid.v4(),
    title: "Thai Sweet Chili Chicken Bites 9 PCS",
    desc: "Juicy chicken bites coated in a sweet and spicy Thai chili glaze, sprinkled with sesame seeds.",
    price: 849,
    img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
  },
  {
    _id: uuid.v4(),
    title: "Honey Mustard Chicken Bites 9 PCS",
    desc: "Crispy chicken bites drizzled with a sweet and tangy honey mustard sauce.",
    price: 749,
    img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
  },
  {
    _id: uuid.v4(),
    title: "BBQ Chicken Bites 9 PCS",
    desc: "Savory chicken bites covered in a rich, smoky BBQ sauce, perfect for any barbecue lover.",
    price: 799,
    img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
  },
  {
    _id: uuid.v4(),
    title: "Garlic Parmesan Chicken Bites 9 PCS",
    desc: "Flavorful chicken bites tossed in a buttery garlic and parmesan sauce, garnished with parsley.",
    price: 829,
    img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
  },
  {
    _id: uuid.v4(),
    title: "Teriyaki Chicken Bites 9 PCS",
    desc: "Sweet and savory teriyaki chicken bites topped with green onions and sesame seeds.",
    price: 849,
    img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
  },
  {
    _id: uuid.v4(),
    title: "Spicy Korean Chicken Bites 9 PCS",
    desc: "Crispy chicken bites coated in a spicy Korean gochujang sauce, garnished with green onions.",
    price: 899,
    img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
  },
  {
    _id: uuid.v4(),
    title: "Lemon Pepper Chicken Bites 9 PCS",
    desc: "Zesty chicken bites seasoned with a lemon pepper blend, perfect for a light and refreshing taste.",
    price: 779,
    img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
  },
];
export const mealCategories = [
  { name: "All" },
  { name: "Breakfast" },
  { name: "Brunch" },
  { name: "Lunch" },
  { name: "Dinner" },
  { name: "Snacks" },
  { name: "Desserts" },
  { name: "Appetizers" },
  { name: "Salads" },
  { name: "Soups" },
  { name: "Pasta" },
  { name: "Grilled" },
  { name: "Vegan" },
  { name: "Vegetarian" },
  { name: "Seafood" },
  { name: "Barbecue" },
];
export const dashboardAsideMenus = [
  {
    label: "Dashboard",
    path: "/dashboard/",
    role: ["admin", "manager"],
    icon: <LuHome />,
    submenu: [
      {
        label: "Admin Dashboard",
        path: "/dashboard/",
        role: ["admin"],
      },
      {
        label: "Manager Dashboard",
        path: "/dashboard/mdashboard",
        role: ["admin"],
      },
    ],
  },
  {
    label: "Cook Management",
    path: "/member",
    role: ["admin"],
    icon: <LuHome />,

    submenu: [
      {
        label: "Add New Member",
        path: "/dashboard/member/create",
        role: ["admin"],
      },
      {
        label: "Member Management",
        path: "/dashboard/member/list",
        role: ["admin"],
      },
    ],
  },

  {
    label: "Order Management",
    path: "/manager",
    role: ["admin"],
    icon: <LuHome />,

    submenu: [
      {
        label: "Add New Case Manager",
        path: "/dashboard/manager/create",
        role: ["admin"],
      },
      {
        label: "Manage Case Managers",
        path: "/dashboard/manager/list",
        role: ["admin"],
      },
    ],
  },
  {
    label: "Product Management",
    path: "/case",
    role: ["admin"],
    icon: <LuHome />,

    submenu: [
      {
        label: "Add New Case",
        path: "/dashboard/case/create",
        role: ["admin"],
      },
      {
        label: "Open Cases",
        path: "/dashboard/case/list/open-case",
        role: ["admin"],
      },
      {
        label: "Closed Cases",
        path: "/dashboard/case/list/closed-case",
        role: ["admin"],
      },
    ],
  },
  {
    label: "Reporting",
    path: "/reports",
    role: ["admin"],
    icon: <LuHome />,

    submenu: [
      {
        label: "Expenditure",
        path: "/dashboard/reports/expenditure",
        role: ["admin"],
      },
      {
        label: "Account Payable",
        path: "/dashboard/reports/account-payable",
        role: ["admin"],
      },
    ],
  },
];
