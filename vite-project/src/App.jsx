import './App.css'
import {Button, Layout, Space} from 'antd';
const { Header, Footer, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    height: '100',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

};
const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};


function App() {

  return (
      <Space
          direction="vertical"
          style={{
              width: '100%',
              height: '100%',
          }}
          size={[0, 48]}
      >
          <Layout>
              <Header style={headerStyle}>Header</Header>
              <Content style={contentStyle}>
                  <Button type={'primary'}>Button</Button>
                  <Button type={'default'}>Button</Button>
                  <Button type={'dashed'}>Button</Button>
                  <Button type={'text'}>Button</Button>
              </Content>
              <Footer style={footerStyle}>Footer</Footer>
          </Layout>
      </Space>
  )
}

export default App
