import React from "react";
import {Button, Menu, Dropdown} from "antd";
import {Header} from "antd/es/layout/layout";
import {RxHamburgerMenu} from "react-icons/rx";

const items = [{
    key: "1", label: (<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Sozlamalar
    </a>),
}, {
    key: "2", label: (<a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        -------
    </a>),
}, {
    key: "3", label: (<a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        -------
    </a>),
},];
export const Nav = () => {
    return (<Header className="h-auto bg-transparent m-0 px-4 pt-4 text-center flex justify-between fixed">
        <img
            className="w-[150px] ml-[100px]"
            src="https://eaglefilmsme.com/public/images/eagle-films-logo.png"
            alt="LOGO"
        />
        <div className="flex items-center ml-[1300px] gap-5">
            <Dropdown
                overlay={<Menu theme="dark">
                    {items.map((item) => (<Menu.Item key={item.key}>{item.label}</Menu.Item>))}
                </Menu>}
                placement="bottomRight" arrow>
                <Button className="text-white w-[60px] ml-[200px] h-[50px] border-0">
                    <RxHamburgerMenu className="w-[30px] h-[30px]"/>
                </Button>
            </Dropdown>
        </div>
    </Header>);
};