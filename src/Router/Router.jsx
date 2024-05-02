import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Feed from "../pages/Feed/Feed";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
    ],
  },
]);

export default Router;
