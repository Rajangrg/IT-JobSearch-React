import { Menu } from "semantic-ui-react";
import React from "react";

import "./header.css";

export const Header = () => {
  return (
    <div className="wrapper">
      <Menu inverted>
        <Menu.Item>
          <img
            src="https://img.icons8.com/cute-clipart/128/000000/github.png"
            alt=""
          />
        </Menu.Item>
        <Menu.Item as="a" className="text" href="https://github.com/Rajangrg/IT-JobSearch-React">
          Source Code
        </Menu.Item>
        <Menu.Item as="a" className="text" href="https://jobs.github.com/api">
          API Details
        </Menu.Item>
        <Menu.Item as="a" className="text" href="https://github.com/Rajangrg/IT-JobSearch-React/blob/master/LICENSE">
          MIT License
        </Menu.Item>
      </Menu>
    </div>
  );
};
