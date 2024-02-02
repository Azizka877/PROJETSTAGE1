import { ACCEUIL_PATH, ANGULAR_PATH, CSSComponent_PATH, JAVASCRYPT_PATH, LANGING_PATH, Login_PATH, MAPS_PATH, NEXTJS_PATH,
        PRODUCTS_PATH,
        PROFILE_PATH, REACT_PATH, REGIST_PATH, STYLES_PATH, SVELTE_PATH, TABLES_PATH, VUEJS_PATH } from "./navigationPaths";
import { HiDatabase, HiHome, HiLogin, HiMap, HiPrinter, HiTable } from "react-icons/hi";
import { HiClock } from "react-icons/hi";


/*
|--------------------------------------------------------------------------
! Sidebar Items
|--------------------------------------------------------------------------
|
| Ici se trouve tous les liens et icons qui doivent etre sur le sidebar
| de SplitShell
*/
export const links = [
    { path: ACCEUIL_PATH, icon: HiDatabase, label: "DASHBORD" },
    { path: PRODUCTS_PATH, icon: HiClock, label: "SETTINGS" },
    { path: TABLES_PATH, icon: HiTable, label: "TABLES" },
    { path: MAPS_PATH, icon: HiMap, label: "MAP" },
    { path: Login_PATH, icon: HiPrinter, label: "LOGIN" },
    { path: REGIST_PATH, icon: HiLogin, label: "REGISTER" },
    { path: LANGING_PATH, icon: HiHome, label: "Landing Page" },
    { path: PROFILE_PATH, icon: HiHome, label: "Profil Page" },
    { path: STYLES_PATH, icon: HiHome, label: "Styles" },
    { path: CSSComponent_PATH, icon: HiHome, label: "Css" },
    { path: ANGULAR_PATH, icon: HiHome, label: "Angular" },
    { path: JAVASCRYPT_PATH, icon: HiHome, label: "Javascrypt" },
    { path: NEXTJS_PATH, icon: HiHome, label: "Next js" },
    { path: REACT_PATH, icon: HiHome, label: "React" },
    { path: SVELTE_PATH, icon: HiHome, label: "Svelte" },
    { path: VUEJS_PATH, icon: HiHome, label: "VueJs" },
]
