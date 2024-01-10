import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Post } from "@pages/Post/ui/Post";
import { Posts } from "@pages/Posts";

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/posts",
      element: <Posts />,
    },
    {
      path: "/posts/:id",
      element: <Post />,
    },
  ]);

  return <RouterProvider router={router} />;
};
