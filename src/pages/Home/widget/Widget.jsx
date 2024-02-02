import React from "react";
import "./widget.scss";

function Widget({ type }) {
  let data;
  switch (type) {
    case "text":
     data = {
       title: "Texte",
       icon: "fa fa-text-width",
     };
     break;
     case "text":
     data = {
       title: "Texte",
       icon: "fa fa-text-width",
     };
     break;
     case "text":
     data = {
       title: "Texte",
       icon: "fa fa-text-width",
     };
     break;
     case "text":
     data = {
       title: "Texte",
       icon: "fa fa-text-width",
     };
     break;
     default:
     break;
  }
  return (
        <div className="widget">
            <div className="left">
              <div >
                <span className='icon'>{data}</span>
              </div>
            </div>
            <div className="right">
                <span className='counter'>$21k</span>
                <span>Refund given</span>
            </div>
        </div>
  )
}

export default Widget