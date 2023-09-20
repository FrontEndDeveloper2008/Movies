import React from "react";
import { Button, Menu, Dropdown } from "antd";
import { Header } from "antd/es/layout/layout";
import { RxHamburgerMenu } from "react-icons/rx";

const navItems = [
    {
        key: "1",
        label: "Sozlamalar",
        url: "https://www.antgroup.com",
    },
    {
        key: "2",
        label: "-------",
        url: "https://www.aliyun.com",
    },
    {
        key: "3",
        label: "-------",
        url: "https://www.luohanacademy.com",
    },
];

const NavMenuItem = (props) => (
    <Menu.Item key={props.key}>
        <a target="_blank" rel="noopener noreferrer" href={props.url}>
            {props.label}
        </a>
    </Menu.Item>
);

export const Nav = () => (
    <Header className="h-auto bg-transparent m-0 px-4 pt-4 text-center flex justify-between fixed">
        <img
            className="w-[150px] ml-[100px]"
            src="https://eaglefilmsme.com/public/images/eagle-films-logo.png"
            alt="LOGO"
        />
        <div className="flex items-center ml-[1500px] gap-5">
            <Dropdown
                overlay={
                    <Menu theme="dark">
                        {navItems.map((item) => (
                            <NavMenuItem key={item.key} label={item.label} url={item.url} />
                        ))}
                    </Menu>
                }
                placement="bottomRight"
                arrow
            >
                <Button
                    className="text-white w-[60px] h-[50px] border-0"
                    type="text"
                    icon={<RxHamburgerMenu className="w-[30px] h-[30px]" />}
                />
            </Dropdown>
        </div>
    </Header>
);