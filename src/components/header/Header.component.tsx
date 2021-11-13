import { Menu } from "antd";
import { SearchOutlined, LoginOutlined, MenuOutlined } from "@ant-design/icons";
import React from "react";

function CustomerHeader() {
    return (
        <div>
            <Menu mode="vertical">
                <Menu.Item>
                    <div className="logo"></div>
                </Menu.Item>
                <Menu.Item key="seeking" icon={<SearchOutlined />}>
                    Seeking your job
                </Menu.Item>
                <Menu.Item key="login" icon={<LoginOutlined />}>
                    Login
                </Menu.Item>
                <Menu.Item key="menu" icon={<MenuOutlined />}>
                    Menu
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default CustomerHeader;
