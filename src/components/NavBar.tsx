// src/components/NavBar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./NavBar.css";

export const NavBar: React.FC = () => {
  return (
    <Menu className="navbar" inverted>
      <Menu.Item as={Link} to="/" className="gym-item">
        GYM
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/workouts">
          Workouts
        </Menu.Item>
        <Menu.Item as={Link} to="/register">
          Register
        </Menu.Item>
        <Menu.Item as={Link} to="/login">
          Login
        </Menu.Item>
        <Menu.Item as={Link} to="/logout">
          Logout
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
