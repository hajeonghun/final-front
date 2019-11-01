import React from 'react';
import { Menu, Icon, Switch } from 'antd';

const TemplateHeader = ({theme}) => {
  return (
    <>
      <div className="logo"/>
      <Menu
        theme={theme}    //테마 수정(리덕스 구현시)
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px'}}  >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </>
  );
};

export default TemplateHeader;
