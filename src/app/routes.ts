import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "about", Component: AboutPage },
      { path: "careers", Component: CareersPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
