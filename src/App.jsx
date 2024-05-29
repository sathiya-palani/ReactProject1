
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {Link} from "react-router-dom";

// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children :[
      {
        path:"/",
        element:<div>
          <Link to="/register">Register</Link> &nbsp;&nbsp; | &nbsp;&nbsp;
          <Link to="/login">Login</Link>  
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
