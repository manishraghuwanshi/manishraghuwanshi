import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Home from "../pages/Home";
import HomePage from "../../src/Home/Home";
import Contact from "../pages/Contact";
import ContactSuccess from "../pages/ContactSuccess";
import Projects from "../pages/Projects";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "contact", element: <Contact /> },
      { path: "contact/success", element: <ContactSuccess /> },
      { path: "projects", element: <Projects /> },

    ],
  },
]);
