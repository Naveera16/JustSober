import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  height: 100vh; /* Set height to full viewport */
  overflow-y: auto; /* Enable vertical scrolling */

  /* Scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background: #888; /* Color of the scrollbar thumb */
    border-radius: 4px; /* Rounded edges for the scrollbar thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color on hover */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Background of the scrollbar track */
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer className="quixnav">
      <div className="quixnav-scroll">
        <ul className="metismenu" id="menu">
          <hr />
          
          <li className="nav-label first">Navbar</li>

      
      
      
          <li>
            <NavLink to="/testimonial" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Product List</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/welcome" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Create Product</span>
            </NavLink>
          </li>
         

      
     
       
        </ul>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
