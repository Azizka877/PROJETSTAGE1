import { ACCEUIL_PATH, ANGULAR_PATH, CSSComponent_PATH, JAVASCRYPT_PATH, LANGING_PATH, Login_PATH, MAPS_PATH, NEXTJS_PATH,
        PRODUCTS_PATH,
        PROFILE_PATH, REACT_PATH, REGIST_PATH, STYLES_PATH, SVELTE_PATH, TABLES_PATH, VUEJS_PATH } from "./navigationPaths";
import { HiBookOpen, HiBookmark, HiCash, HiDotsCircleHorizontal, HiEye, HiFlag,
     HiHome,
     HiLogin, HiMap, HiNewspaper, HiOutlineFlag, HiPause, HiPrinter, HiSaveAs, HiTable } from "react-icons/hi";
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
    { path: ACCEUIL_PATH, icon: HiHome, label: "Dashbord" },
    { path: PRODUCTS_PATH, icon: HiClock, label: "Settings" },
    { path: TABLES_PATH, icon: HiTable, label: "Tables" },
    { path: MAPS_PATH, icon: HiMap, label: "Map" },
    { path: Login_PATH, icon: HiPrinter, label: "Login" },
    { path: REGIST_PATH, icon: HiLogin, label: "Register" },
    { path: LANGING_PATH, icon: HiDotsCircleHorizontal, label: "Landing Page" },
    { path: PROFILE_PATH, icon: HiBookmark, label: "Profil Page" },
    { path: STYLES_PATH, icon: HiCash, label: "Styles" },
    { path: CSSComponent_PATH, icon: HiNewspaper, label: "Css" },
    { path: ANGULAR_PATH, icon: HiOutlineFlag, label: "Angular" },
    { path: JAVASCRYPT_PATH, icon: HiFlag, label: "Javascrypt" },
    { path: NEXTJS_PATH, icon: HiBookOpen, label: "Next js" },
    { path: REACT_PATH, icon: HiPause, label: "React" },
    { path: SVELTE_PATH, icon: HiSaveAs, label: "Svelte" },
    { path: VUEJS_PATH, icon: HiEye, label: "VueJs" },
]
