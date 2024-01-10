import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Posts } from "@pages/Posts";
import { Post } from "@pages/Post";

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Posts />,
    },
    {
      path: "/:id",
      element: <Post />,
    },
  ]);

  return <RouterProvider router={router} />;
};
