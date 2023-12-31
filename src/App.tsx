import "./App.css";
import Users from "./components/Users/users";
import UserDetails from "./components/UserDetails/userDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tasks from "./components/Tasks/tasks";
import TaskDetail from "./components/TaskDetails/taskDetails";
import Products from "./components/Products/products";
import Home from "./components/Home/home";
import Button from "./components/react-custom-hook/exercise1/button";
import Div from "./components/react-custom-hook/exercise1/div";
import LocalStorage1 from "./components/react-custom-hook/exercise2/localStorage1";
import LocalStorage2 from "./components/react-custom-hook/exercise2/localStorage2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:id",
    element: <UserDetails />,
  },
  {
    path: "/tasks/:id",
    element: <Tasks />,
  },
  {
    path: "/taskDetails/:id",
    element: <TaskDetail />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Button />
      <Div />
      <LocalStorage1 />
      <LocalStorage2 />
    </>
  );
}

export default App;
