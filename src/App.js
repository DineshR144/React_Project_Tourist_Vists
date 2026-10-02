import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// ==================================================
// NAVBAR
// ==================================================

import Nav from "./home/navbar";

// ==================================================
// MAIN PAGES
// ==================================================

import Homepage from "./home/home";
import Abouthero from "./about/Abouthero";
import Explorepg from "./explore/explore";
import Fest from "./festivals/festival";
import Hand from "./handicrafts/handicrafts";
import Mango from "./mango/mango";
import Gallerybg from "./gallery/gallery";

// ==================================================
// EXPLORE DETAIL PAGES
// ==================================================

import Yercaud from "./explore-topics/yercaud.js";
import KiliyurFalls from "./explore-topics/kiliyur-falls.js";
import SankagiriFort from "./explore-topics/sankagiri-fort.js";
import MetturDam from "./explore-topics/mettur-dam.js";
import KurumbapattiZoo from "./explore-topics/kurumbapatti-zoo.js";
import Muttal from "./explore-topics/muttal.js";
import ParavasaUlagam from "./explore-topics/paravasaulagam.js";
import Kanjamalai from "./explore-topics/kanjamalai.js";
import ShivaTemple from "./explore-topics/1008shivan.js";

// ==================================================
// FESTIVAL DETAIL PAGES
// ==================================================

import KottaiMariamman from "./fest-topics/kottaimariamman.js";
import Tiruchengode from "./fest-topics/tiruchengode.js";
import Adiperukku from "./fest-topics/adiperukku.js";
import Summer from "./fest-topics/summer.js";

// ==================================================
// HANDCRAFT DETAIL PAGES
// ==================================================

import SalemSilk from "./handcraft-topics/salemsilk.js";
import SirpaKadal from "./handcraft-topics/sirpakadal.js";
import Thammampatti from "./handcraft-topics/thammampatti.js";

// ==================================================
// LAYOUT
// ==================================================

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

// ==================================================
// ROUTES
// ==================================================

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [

      // ==================================================
      // HOME
      // ==================================================

      {
        index: true,
        element: <Homepage />,
      },

      // ==================================================
      // MAIN PAGES
      // ==================================================

      {
        path: "about",
        element: <Abouthero />,
      },

      {
        path: "explore",
        element: <Explorepg />,
      },

      {
        path: "festivals",
        element: <Fest />,
      },

      {
        path: "handicrafts",
        element: <Hand />,
      },

      {
        path: "mango-heritage",
        element: <Mango />,
      },

      {
        path: "plan-my-trip",
        element: <Gallerybg />,
      },

      // ==================================================
      // EXPLORE DETAIL PAGES
      // ==================================================

      {
        path: "yercaud",
        element: <Yercaud />,
      },

      {
        path: "kiliyur-falls",
        element: <KiliyurFalls />,
      },

      {
        path: "sangagiri-fort",
        element: <SankagiriFort />,
      },

      {
        path: "mettur-dam",
        element: <MetturDam />,
      },

      {
        path: "kurumbapatti-zoo",
        element: <KurumbapattiZoo />,
      },

      {
        path: "muttal",
        element: <Muttal />,
      },

      {
        path: "kanjamalai-siddhar-kovil",
        element: <Kanjamalai />,
      },

      {
        path: "paravasa-ulagam",
        element: <ParavasaUlagam />,
      },

      // ==================================================
      // KANJAMALAI
      // ==================================================

      

      // ==================================================
      // 1008 SHIVA TEMPLE
      // ==================================================

      {
        path: "1008-shiva-temple",
        element: <ShivaTemple />,
      },

      // ==================================================
      // FESTIVAL DETAIL PAGES
      // ==================================================

      {
        path: "fest-topics/kottai-mariamman",
        element: <KottaiMariamman />,
      },

      {
        path: "fest-topics/tiruchengode",
        element: <Tiruchengode />,
      },

      {
        path: "fest-topics/adiperukku",
        element: <Adiperukku />,
      },

      {
        path: "fest-topics/summer",
        element: <Summer />,
      },

      // ==================================================
      // HANDCRAFT DETAIL PAGES
      // ==================================================

      {
        path: "handcraft-topics/thammampatti",
        element: <Thammampatti />,
      },

      {
        path: "handcraft-topics/sirpakadal",
        element: <SirpaKadal />,
      },

      {
        path: "handcraft-topics/salemsilk",
        element: <SalemSilk />,
      },
    ],
  },
]);

// ==================================================
// APP
// ==================================================

function App() {
  return <RouterProvider router={router} />;
}

export default App;