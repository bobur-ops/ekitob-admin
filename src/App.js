import { jsx as _jsx } from "react/jsx-runtime";
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
            element: _jsx(Dashboard, {}),
        },
        {
            path: APP_ROUTES.SIGNIN,
            element: _jsx(Signin, {}),
        },
        {
            path: APP_ROUTES.SIGNUP,
            element: _jsx(Signup, {}),
        },
        {
            path: APP_ROUTES.CATALOG,
            element: _jsx(Catalog, {}),
        },
        {
            path: APP_ROUTES.USERS,
            element: _jsx(Users, {}),
        },
        {
            path: APP_ROUTES.BOOK_DETAILS,
            element: _jsx(BookPage, {}),
        },
        {
            path: APP_ROUTES.ADD_BOOK,
            element: _jsx(AddBook, {}),
        },
    ]);
    return _jsx(RouterProvider, { router: router });
};
export default App;
