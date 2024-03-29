import SpliTemplateScreen from "layouts"
import NavbarComponent from "layouts/navbar/NavbarComponent"
import SidebarComponent from "layouts/sidebar/SidebarComponent"
import React from "react"
import { Outlet } from "react-router-dom"

/*
|--------------------------------------------------------------------------
| Dashboard avec un sidebar
|--------------------------------------------------------------------------
|
| Ce layout contient le sidebar ainsi que le navbar de l'application
| Il est appeler dans routes/navigation/privte.js en tant que children de RequireAuth
|
*/
const SplitShell = () => {
    return (
        <SpliTemplateScreen >
            <NavbarComponent />
            <SidebarComponent
                bgColor={"#fff"}
                activeLinkColor={"#0284c7"}
                activeLinkBgColor=""
                linkColor="gray"
                colorOnHover={"#0284c7"}
            />
            <Outlet />
        </SpliTemplateScreen>
    )
}

export default SplitShell