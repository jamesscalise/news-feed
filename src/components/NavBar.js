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
              to="/all"
              >All News</NavLink>
              <NavLink 
              style={{ marginRight: '10px' }} 
              to="/new-york-times"
              >The New York Times</NavLink>
              <NavLink 
              style={{ marginRight: '10px' }} 
              to="/bbc"
              >BBC News</NavLink>
              <NavLink 
              style={{ marginRight: '10px' }} 
              to="/npr"
              >NPR</NavLink>
              <NavLink 
              style={{ marginRight: '10px' }} 
              to="/wapo"
              >The Washington Post</NavLink>
              <NavLink 
              style={{ marginRight: '10px' }} 
              to="/reuters"
              >Reuters</NavLink>
              <NavLink 
              style={{ marginRight: '10px' }} 
              to="/guardian"
              >Guardian</NavLink>
            </div>
          );
    }
}  

export default NavBar