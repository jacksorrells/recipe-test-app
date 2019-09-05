import React, { useState, useEffect } from 'react';
import { Menu, Icon } from 'antd';

import { navData } from '../data/navData';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { SubMenu } = Menu;


function Navbar() {
  const [page, setPage] = useState("cardView");

  const handleClick = (e) => {
    console.log('click', e);
    setPage(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[page]} mode="horizontal">
      {navData.map(navItem => {
          return (
            <Menu.Item key={navItem.name}>
              <Link to={navItem.href}>
                <Icon type={navItem.icon} /> {navItem.displayName}
              </Link>
            </Menu.Item>
          );
        })}
    </Menu>
  )
}

export default Navbar;