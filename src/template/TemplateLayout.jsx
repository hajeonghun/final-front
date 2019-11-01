import React,{useState, useCallback} from 'react';

import { Layout } from 'antd';
import TemplateHeader from 'template/TemplateHeader';
import TemplateSidebar from 'template/TemplateSidebar';

const { Header, Content, Sider, Footer } = Layout;

const TemplateLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('light');
  const [themeChecked, setThemeChecked] = useState(false);

  
  const changeTheme = useCallback(value => {
    setTheme(value ? 'dark' : 'light');
    setThemeChecked(value);
  }, []);

  const onCollapse = useCallback(collapsed => {
    setCollapsed(collapsed);
  },[]);

  return (
    <Layout style={{height:'100vh'}}>      
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <TemplateSidebar theme={theme} changeTheme={changeTheme} themeChecked={themeChecked}/>
        </Sider>
      <Layout>
      <Header className="header" style={{padding:'0'}}>
        <TemplateHeader theme={theme}/>
      </Header>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
              borderTop:'1px solid #f0f2f5'
            }}
          >
            Content
            {children}
          </Content>
        <Footer style={{ textAlign: 'center',display:'flex' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
  );
};

export default TemplateLayout;
