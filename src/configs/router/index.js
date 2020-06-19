export const UnauthenticatedRoutes = [
  {
    exact: true,
    path: "/home",
    component: "home"
  },
  {
    exact: true,
    path: "/login",
    component: "login"
  },
  {
    exact: true,
    path: "/register",
    component: "register"
  }
];

export const AuthenticatedRoutes = [
  {
    exact: true,
    path: "/cart",
    component: "cart"
  },
  {
    exact: true,
    path: "/profile",
    component: "profile"
  },
  {
    exact: true,
    path: "/orders",
    component: "orders"
  },
  {
    exact: true,
    path: "/viewOrder/:id",
    component: "viewOrder"
  },
  {
    exact: true,
    path: "/checkout",
    component: "checkout"
  },
  {
    exact: true,
    path: "/shops",
    component: "shops"
  },
  {
    exact: true,
    path: "/products",
    component: "products"
  },
  {
    exact: true,
    path: "/product/:id",
    component: "productDetail"
  }
];
