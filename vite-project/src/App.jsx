import './App.css'
import {Button, Col, FloatButton, Input, Layout, Menu, Row, Space,} from 'antd';
import {
    AppstoreOutlined,
    AudioOutlined,
    InstagramOutlined,
    MailOutlined,
    QuestionCircleOutlined, SettingOutlined
} from "@ant-design/icons";
import Search from "antd/es/input/Search.js";
import Switch from "./components/Switch.jsx";
import Card from "./components/Card/Card.jsx";
import {properties} from "./components/Card/card.config.js";
const { Header, Footer, Content } = Layout;
import styles from "./components/Card/content.module.css"
import style from './components/header/header.module.css';
import {useContext} from "react";
import {ThemeContext} from "./ContextProvider.jsx";

const contentStyle = {
    textAlign: 'center',
    minHeight: 750,
    height: '100',
    lineHeight: '120px',
    // color: '#fff',
    // backgroundColor: '#108ee9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: "0 auto"
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#fff',
    minHeight: '48 + 8n'
};
const onSearch = (value, _e, info) => console.log(info?.source, value);
const { Meta } = Card;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

function App() {

    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkMode;

    return (
      <Space
          direction="vertical"
          style={{
              width: '100%',
              height: '100%',
          }}
      >
          <Layout>
              <Header className={`${style.base} ${darkmode && style.dark}`}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '4rem'}}>
                      <Search
                          placeholder={"Search"}
                          onSearch={onSearch}
                          style={{
                              width: 300,
                          }}
                      />
                      <Switch></Switch>
                  </div>
              </Header>
              <Content style={contentStyle} className={styles.content}>
                  {properties.map((item, index) => <Card desc={item.description} image={item.image} title={item.title} index={index}></Card>)}
              </Content>
              <Footer style={footerStyle}>
                  <FloatButton icon={<InstagramOutlined />} type="primary" style={{ right: 24 }} />
              </Footer>
          </Layout>
      </Space>
  )
}

export default App
