import './App.css'
import {Button, Card, Col, FloatButton, Input, Layout, Row, Space, Switch} from 'antd';
import {AudioOutlined, InstagramOutlined, QuestionCircleOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search.js";
const { Header, Footer, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
    justifyContent: 'center',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 750,
    height: '100',
    lineHeight: '120px',
    // color: '#fff',
    // backgroundColor: '#108ee9',
    display: 'outline',
    alignItems: 'center',
    justifyContent: 'center',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#fff',
    minHeight: '48 + 8n'
};
const onSearch = (value, _e, info) => console.log(info?.source, value);
const { Meta } = Card;


function App() {

  return (
      <Space
          direction="vertical"
          style={{
              width: '100%',
              height: '100%',
          }}
      >
          <Layout>
              <Header style={headerStyle}>
                    <Row>
                        <Col span={6} offset={18}>
                            <Search
                                placeholder={"Search"}
                                onSearch={onSearch}
                                style={{
                                    padding: 16,
                                    width: 300,
                                }}
                            />
                        </Col>
                    </Row>
              </Header>
              <Content style={contentStyle}>

                  {/*<Button type={'default'}>Button</Button>*/}
                  {/*<Button type={'dashed'}>Button</Button>*/}
                  {/*<Button type={'text'}>Button</Button>*/}
                  <Row>
                      <Col span={24}><Button type={'primary'}>Button</Button></Col>
                  </Row>
                  <Row>
                      <Col span={12}><Button type={'primary'}>Button</Button></Col>
                      <Col span={12}><Button type={'primary'}>Button</Button></Col>
                  </Row>
                  <Row>
                      <Col span={8}>col-8</Col>
                      <Col span={8}>col-8</Col>
                      <Col span={8}>col-8</Col>
                  </Row>
                  <Row>
                      <Col span={6}>col-6</Col>
                      <Col span={6}>col-6</Col>
                      <Col span={6}>col-6</Col>
                      <Col span={6}>col-6</Col>
                  </Row>
                  <Row>
                      <Col span={6}>
                          <Card
                              hoverable
                              style={{ width: 240 }}
                              cover={<img alt="example" src="https://img.freepik.com/free-photo/depressed-man-crying-side-view_23-2149699062.jpg" />}
                          >
                              <Meta title="Europe Street beat" description="www.instagram.com" />
                          </Card>
                      </Col>
                      <Col span={6}>
                          <Card
                              hoverable
                              style={{ width: 240 }}
                              cover={<img alt="example" src="https://img.freepik.com/premium-photo/sad-desperate-grieving-crying-woman-with-folded-hands-and-tears-eyes-during-trouble_122732-2273.jpg" />}
                          >
                              <Meta title="Europe Street beat" description="www.instagram.com" />
                          </Card>
                      </Col>
                      <Col span={6}>
                          <Card
                              hoverable
                              style={{ width: 240 }}
                              cover={<img alt="example" src="https://img.freepik.com/premium-photo/angry-crazy-woman_102671-4473.jpg" />}
                          >
                              <Meta title="Europe Street beat" description="www.instagram.com" />
                          </Card>
                      </Col>
                      <Col span={6}>
                          <Card
                              hoverable
                              style={{ width: 240 }}
                              cover={<img alt="example" src="https://img.freepik.com/free-photo/get-away-disgusted-asian-businesswoman-rejecting-shaking-hands-to-refuse-grimacing-from-dislike-decline-smth-with-aversion-posing-in-suit-against-pink-background_1258-90076.jpg?t=st=1694828881~exp=1694829481~hmac=2e1133d57253128e79eab005c185db14f8da07306fbe1e2def1943bb5b527440" />}
                          >
                              <Meta title="Europe Street beat" description="www.instagram.com" />
                          </Card>
                      </Col>
                  </Row>
              </Content>
              <Footer style={footerStyle}>
                  <FloatButton icon={<InstagramOutlined />} type="primary" style={{ right: 24 }} />
              </Footer>
          </Layout>
      </Space>
  )
}

export default App
