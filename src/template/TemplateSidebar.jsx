import React, { useState, useCallback } from 'react';
import {Link} from 'react-router-dom';
import { Menu, Icon, Switch } from 'antd';
const { SubMenu } = Menu;

const TemplateSidebar = ({changeTheme,theme,themeChecked}) => {

  return (
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode='inline'
      theme={theme}
      style={{ height: '100vh', paddingTop : '10vh', textAlign:"left" }}
    >
        
        {/* <Route path={['/', '/home']} component={HomePage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/write" component={ApiWritePage} />
      <Route path="/apiList" component={ApiListPage} />      
      <Route path="/errList" component={ErrListPage} />      
      <Route path="/responseList" component={ResponseListPage} />      
      <Route path="/response/:id" component= */}

      <Menu.Item key="1">
      <Link to='/home'>
        <Icon type="mail" />
        홈</Link>
      </Menu.Item>

      <Menu.Item key="2">
      <Link to='/write'>
        <Icon type="calendar" />
        API 추가
        </Link>
      </Menu.Item>

      <Menu.Item key="3">
      <Link to='/apiList'>
        <Icon type="calendar" />
        API 전체 조회
        </Link>
      </Menu.Item>

      <Menu.Item key="4">
      <Link to='/errList'>
        <Icon type="calendar" />
        에러 현황 조회
        </Link>
      </Menu.Item>

      <Menu.Item key="5">
      <Link to='/delayList'>
        <Icon type="calendar" />
        지연 현황 조회
        </Link>
      </Menu.Item>

     
      <Menu.Item key="6" style={{marginTop:'40%'}}>
        <Switch onChange={changeTheme} checked={themeChecked}/>  Change Theme
      </Menu.Item>

      
      
      

      {/* 서브메뉴 소스 */}
      {/* <SubMenu
        key="sub2123"
        title={
          <span>
            <Icon type="setting" />
            <span>Navigation Fou123123r</span>
          </span>
        }
      >
        <Menu.Item key="7">Change Theme</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
      </SubMenu> */}

   
     
    </Menu>
  );
};

export default TemplateSidebar;
