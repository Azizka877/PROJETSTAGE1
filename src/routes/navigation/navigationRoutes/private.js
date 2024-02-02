/* eslint-disable react/react-in-jsx-scope */
import HomePage from "pages/Home/HomePage";
import { ACCEUIL_PATH, Login_PATH, MAPS_PATH, LANGING_PATH, PROFILE_PATH, ANGULAR_PATH,
    PRODUCTS_PATH, TABLES_PATH, REGIST_PATH, STYLES_PATH, CSSComponent_PATH, JAVASCRYPT_PATH,
    NEXTJS_PATH, REACT_PATH, SVELTE_PATH, VUEJS_PATH
} from "../navigationPaths";
import RequireAuth from "layouts/RequireAuth";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import { Navigate } from "react-router-dom";
import SplitShell from "layouts/AppShells/SplitShell";

/*
|---------------------------------------------------------------
| Les routes privates
|---------------------------------------------------------------
| Toute page qui necessite une authentification doit etre ici
|
*/
export const privateRoutes = [
    {
        path: ACCEUIL_PATH,
        errorElement: <ErrorBoundary />,
        element: <RequireAuth />,
        children: [
            {
                path: "",
                element: <SplitShell />,
                children: [
                    {
                        path: "*",
                        element: <Navigate to={ACCEUIL_PATH} />
                    },
                    {
                        path: "",
                        element: <HomePage />
                    },
                    {
                        path: PRODUCTS_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: TABLES_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: MAPS_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: Login_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: REGIST_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: LANGING_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: PROFILE_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: STYLES_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: CSSComponent_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: ANGULAR_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: JAVASCRYPT_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: NEXTJS_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: REACT_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: SVELTE_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: Login_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: VUEJS_PATH,
                        element: <p>Hello from me</p>
                    },
                ]
            }
        ]
    },
];