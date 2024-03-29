import React, { cloneElement } from "react";
import SidebarItem from "../../components/SidebarItem";
import ResourceDataMap from "../../components/ResourceDataMap";
import { links } from "routes/navigation/sidebarLinks";

const SidebarComponent = ({ bgColor, activeLinkColor, activeLinkBgColor, colorOnHover, linkColor }) => {
  const ClonedSidebarItem = ({ linkItem }) => cloneElement(<SidebarItem linkItem={linkItem} />, {
    activeLinkColor,
    activeLinkBgColor,
    colorOnHover,
    linkColor
  })
  return (
    <div
      style={{
        backgroundColor: bgColor ? bgColor : "#fff",
        height: "100%",
        padding: "25px 10px",
        borderRight: "1px solid rgba(0,0,0,0.1)",
        activeLinkColor: "blue"
      }}
    >
    {/* <div className="flex">
      <div className="md:font-normal" style={{ marginTop: "-10px", marginBottom: "20px", fontWeight: "bold" }}>
      NOTUS REACT</div>
      </div> */}
      <div className="md: hidden" style={{ marginBottom: "15px" }}>Admi-Layout-Page</div>
      <ResourceDataMap
        resourceData={links}
        resourceItem={ClonedSidebarItem}
        resourceName="linkItem"
      />
    </div>
  );
};

export default SidebarComponent;
