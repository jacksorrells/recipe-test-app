import React, { useState, useEffect } from 'react';
import { Menu, Icon } from 'antd';

import { navData } from '../data/navData';

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
              <Icon type={navItem.icon} /> {navItem.displayName}
            </Menu.Item>
          );
        })}
    </Menu>
  )
}

export default Navbar;