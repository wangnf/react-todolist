import { Navigate, useRoutes } from "react-router-dom";

import About from "@/pages/about";
import Detail from "@/pages/detail";
import Home from "@/pages/home";
import HomeDetail from "@/pages/home/c-pages/home-detail";

const GetRoutes = () =>
  useRoutes([
    {
      path: "/",
      element: <Navigate to="home" />,
    },
    {
      path: "home",
      element: <Home />,
      children: [
        {
          path: "detail",
          id: "xx123x",
          element: <HomeDetail />,
        },
        {
          path: "456",
          id: "xx12331x",
          element: <HomeDetail />,
        },
      ],
    },
    //   {
    //     path: "/home/detail",
    //     keys: 'xxx',
    //     element: <HomeDetail />,
    //   },
    {
      path: "/detail",
      element: <Detail />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "*",
      element: <div>not fount</div>,
    },
  ]);

export default GetRoutes;
