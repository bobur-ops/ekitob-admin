import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { APP_ROUTES } from "./config/routes";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Catalog from "./pages/Catalog";
import Users from "./pages/Users";
import BookPage from "./pages/BookDetails";
import AddBook from "./pages/AddBook";

const App = () => {
  const router = createBrowserRouter([
    {
      path: APP_ROUTES.DASHBOARD,
      element: <Dashboard />,
    },
    {
      path: APP_ROUTES.SIGNIN,
      element: <Signin />,
    },
    {
      path: APP_ROUTES.SIGNUP,
      element: <Signup />,
    },
    {
      path: APP_ROUTES.CATALOG,
      element: <Catalog />,
    },
    {
      path: APP_ROUTES.USERS,
      element: <Users />,
    },
    {
      path: APP_ROUTES.BOOK_DETAILS,
      element: <BookPage />,
    },
    {
      path: APP_ROUTES.ADD_BOOK,
      element: <AddBook />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
