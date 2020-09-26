import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {

    

    render (){
        return (
            <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
                <NavLink 
                style={{ marginRight: '10px' }} 
                to="/"
              > 
                Home
              </NavLink>
              <NavLink 
              style={{ marginRight: '10px' }} 
              to="/"
              >The New York Times</NavLink>
              <NavLink 
              style={{ marginRight: '10px' }} 
              to="/"
              >BBC News</NavLink>
              <NavLink 
              style={{ marginRight: '10px' }} 
              to="/index"
              >NPR</NavLink>
              <NavLink 
              style={{ marginRight: '10px' }} 
              to="/index"
              >The Washington Post</NavLink>
              <NavLink 
              style={{ marginRight: '10px' }} 
              to="/index"
              >Reuters</NavLink>
            </div>
          );
    }
}  

export default NavBar