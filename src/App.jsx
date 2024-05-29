
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";

// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children :[
      {
        path:"/",
        element:<div>
          <a href="/register">Register</a> &nbsp;&nbsp; | &nbsp;&nbsp;
          <a href="/login">Login</a>  
        </div>
      },
  
  {
    path: "register",
    element: <Register />
  },
  {
    path: "login",
    element: <Login />
  }
]
  },

]);


const App = () => {
  // wrap the app with the RouterProvider
  return <RouterProvider router={router} />;
}
export default App;
