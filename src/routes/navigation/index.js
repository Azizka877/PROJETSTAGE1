/* eslint-disable react/react-in-jsx-scope */
import PageNotFound from "pages/NotFound/PageNotFound";
import { NOTFOUND_PATH } from "./navigationPaths";
import { privateRoutes } from "./navigationRoutes/private";
import { publicRoutes } from "./navigationRoutes/public";
import "@fortawesome/fontawesome-free/css/all.min.css";
const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    ...privateRoutes,
    ...publicRoutes,
    {
        path: NOTFOUND_PATH,
        element: <PageNotFound />
    }
]);