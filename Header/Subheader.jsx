import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Subheader() {
  return (
    <div>
      <div className="HEADER2">
        <div className="Left_nav">
          <ul>
            <div className="menuicon">
              <AiOutlineMenu />
            </div>
            <li> All</li>
            {/*<li> Today's Deal </li>*/}
            <li>Customer Services</li>
            {/*<li>Registry</li>*/}
           
            <li>Sell</li>
          </ul>
        </div>
        <div className="Right_nav">
          <ul>
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Subheader;
