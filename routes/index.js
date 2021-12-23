const routes = [
  {
    id: 1,
    path: "/",
    label: "Men Wear",
    subMenu: [
      { id: 1, path: "/", label: "Shoes" },
      { id: 2, path: "/", label: "Clothes" },
      { id: 3, path: "/", label: "Trousers" },
      { id: 4, path: "/", label: "Shirts" },
      { id: 5, path: "/", label: "Bags" },
      { id: 6, path: "/", label: "Shorts" },
    ],
  },
  {
    id: 2,
    path: "/",
    label: "Women Wear",
    subMenu: [
      { id: 1, path: "/", label: "Shoes" },
      { id: 2, path: "/", label: "Clothes" },
      { id: 3, path: "/", label: "Trousers" },
      { id: 4, path: "/", label: "Shirts" },
      { id: 5, path: "/", label: "Bags" },
      { id: 6, path: "/", label: "Shorts" },
    ],
  },
  {
    id: 3,
    path: "/",
    label: "Kids Wear",
    subMenu: [
      { id: 1, path: "/", label: "Shoes" },
      { id: 2, path: "/", label: "Clothes" },
      { id: 3, path: "/", label: "Trousers" },
      { id: 4, path: "/", label: "Shirts" },
      { id: 5, path: "/", label: "Bags" },
      { id: 6, path: "/", label: "Shorts" },
    ],
  },
  {
    id: 4,
    path: "/",
    label: "Gadgets Wear",
    subMenu: [
      { id: 1, path: "/", label: "Audio" },
      { id: 2, path: "/", label: "Power" },
      { id: 3, path: "/", label: "Fitness" },
      { id: 4, path: "/", label: "PC" },
      { id: 5, path: "/", label: "Phones" },
    ],
  },
  {
    id: 5,
    path: "/",
    label: "User",
    subMenu: [
      {
        id: 1,
        path: "/",
        label: "My Account",
        subMenu: [
          { id: 1, path: "/", label: "Audio" },
          { id: 2, path: "/", label: "Power" },
          { id: 3, path: "/", label: "Fitness" },
          { id: 4, path: "/", label: "PC" },
          { id: 5, path: "/", label: "Phones" },
        ],
      },
      { id: 2, path: "/", label: "Logout" },
      { id: 3, path: "/", label: "Settings" },
    ],
  },
];

export default routes;
