
import React, { useState } from 'react';
import { TiDocumentText } from 'react-icons/ti';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { MdPermMedia } from 'react-icons/md'
import { AiOutlineUser, AiOutlinePlus, AiOutlineDown } from 'react-icons/ai'
import { BiCloudDownload, BiArrowBack } from 'react-icons/bi'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ArrowLeftOutlined,
    PlusOutlined,
    PercentageOutlined,
    FieldTimeOutlined,
    DatabaseOutlined,
    BankOutlined,
    UsergroupAddOutlined,
    DeleteOutlined,
    MoneyCollectOutlined
} from '@ant-design/icons';
import { SearchOutlined, SettingOutlined, BellOutlined, HomeOutlined, CalendarOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons';

import { Layout, Menu, Button, Form, Input, Progress } from 'antd';

import logo from "./logo.png"

import "./Dashboard.css"
const { Header, Sider, Content } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <div className='heptagon'><img src={logo} style={{ width: "20px", fontSize: "25px" }} /></div>,
                            label: <strong style={{ fontSize: "18px" }}><span style={{ color: "black" }}>Mylpg</span><span style={{ color: '#1c64b0' }}>book</span></strong>,
                        },
                        {
                            key: '2',
                            icon: <HomeOutlined />,
                            label: 'Home',
                        },
                        {
                            key: '3',
                            icon: <DatabaseOutlined />,
                            label: 'Master Data',
                        },
                        {
                            key: '4',
                            icon: <p style={{ color: "#1c64b0", fontSize: "20px" }}><HiOutlineDocumentDuplicate /></p>,
                            label: 'Transactions',
                        },
                        {
                            key: '5',
                            icon: <BankOutlined />,
                            label: 'Cash & Bank',
                        },
                        {
                            key: '6',
                            icon: <PercentageOutlined />,
                            label: 'GST Returns',
                        },
                        {
                            key: '4',
                            icon: <PercentageOutlined />,
                            label: 'TDS/TCS',
                        },
                        {
                            key: '5',
                            icon: <MessageOutlined />,
                            label: 'Transactions Reports',
                        },
                        {
                            key: '6',
                            icon: <MoneyCollectOutlined />,
                            label: 'Financial Reports',
                        },
                        {
                            key: '5',
                            icon: <p style={{ color: "#1c64b0", fontSize: "20px" }}><TiDocumentText /></p>,
                            label: 'Payroll  &lt;',
                        },
                        {
                            key: '6',
                            icon: <FieldTimeOutlined />,
                            label: 'Day End',
                        },

                    ]}
                />
            </Sider>
            <Layout>
                <Header>
                    <div style={{ display: "flex" }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined style={{color:"#a786fb"}}/> : <MenuFoldOutlined  style={{color:"#a786fb"}}/>}
                            onClick={toggleCollapsed}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                                alignItems: "center",
                                color: '#a786fb'
                            }}
                        >
                        </Button>
                        <div style={{ gap: "5px", display: "flex", alignItems: "center" }}>
                            <Button className='button' >CP</Button>
                            <Button className='button'>OP</Button>
                            <Button className='button'>CS</Button>
                            <Button className='button'>DS</Button>
                            <Button className='button'>NC</Button>
                            <Button className='button'>RC</Button>
                            <Button className='button'>TV</Button>
                            <Button className='button'>RT</Button>
                            <Button className='button'>PT</Button>
                            <Button className='button'>BT</Button>
                            <Button className='button'>CVO</Button>
                        </div>
                    </div>
                    <div style={{ gap: "10px", display: "flex", alignItems: "center" }}>
                        <SettingOutlined />
                        <BellOutlined />
                        < UsergroupAddOutlined />
                        <TfiHeadphoneAlt />
                        <BiCloudDownload />
                        <MdPermMedia />
                        {/* <Button>Search</Button> */}
                        <p className='svg-icon-user-div'>   <AiOutlineUser className='svg-icon-user'></AiOutlineUser></p>
                        <p>1111111</p>
                    </div>
                </Header>
                <Content>
                    <div>
                        <div title="Ratio Card" >
                            <div style={{ display: "flex", justifyContent: "space-between", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding: "20px" }}>
                                <strong style={{ fontSize: "18px" }}>BLPG/ARB/NFR ITEMS PRICE MASTER</strong>
                                <div style={{ display: "flex", gap: "3px" }}>
                                    <Button className='div-button-icon' style={{ backgroundColor: "#19b48a", color: "#fff" }}><AiOutlinePlus className='svg-icon-user' style={{ marginRight: "3px" }}></AiOutlinePlus> ADD</Button>
                                    <Button className='div-button-icon' style={{ backgroundColor: "#0199ae", color: "#fff" }}>CALCULATE</Button>
                                    <Button className='div-button-icon' style={{ backgroundColor: "#5fa7fa", color: "#fff" }}> SAVE</Button>
                                    <Button className='div-button-icon' style={{ backgroundColor: "#0199ae", color: "#fff" }}><BiArrowBack className='svg-icon-user' style={{ marginRight: "3px" }}></BiArrowBack> BACK</Button>
                                    <Button className='div-button-icon' style={{ color: '#1c64b0' }}> HELP <AiOutlineDown style={{ color: "#1c64b0", marginRight: "3px" }}></AiOutlineDown></Button>
                                </div>
                            </div>
                            <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding: "20px" }}>
                                <table className="customers">
                                    <tr>
                                        <th>PRODUCT</th>
                                        <th>RSP</th>
                                        <th>BASIC PRICE</th>
                                        <th>SGST AMOUNT</th>
                                        <th>CGST AMOUNT</th>
                                        <th>OFFER PRICE</th>
                                        <th>MONTH</th>
                                        <th>YEARS</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select className='selector-dropdown'>
                                                <option value="volvo">SELECT </option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </td>
                                        <td>MRP</td>
                                        <td>BASIC PRI</td>
                                        <td>SGST</td>
                                        <td>CGST</td>
                                        <td>OFFER PRI</td>
                                        <td>
                                            <select className='selector-dropdown'>
                                                <option value="volvo">SELECT</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className='selector-dropdown'>
                                                <option value="volvo">SELECT</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </td>
                                        <td><DeleteOutlined /></td>
                                    </tr>
                                </table>
                            </div>
                            <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding: "20px" }}>
                                <table className="customers">
                                    <tr>
                                        <th>PRODUCT</th>
                                        <th>RSP</th>
                                        <th>BASIC PRICE</th>
                                        <th>SGST AMOUNT</th>
                                        <th>CGST AMOUNT</th>
                                        <th>OFFER PRICE</th>
                                        <th>MONTH</th>
                                        <th>YEARS</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                    <tr>
                                        <td>STOVE-ELICA- 2 Burner</td>
                                        <td>2100</td>
                                        <td>23.43</td>
                                        <td>SGST</td>
                                        <td>CGST</td>
                                        <td>20021</td>
                                        <td>may</td>
                                        <td>2021</td>
                                        <td><DeleteOutlined /></td>
                                    </tr>
                                    <tr>
                                        <td>STOVE-ELICA- 2 Burner</td>
                                        <td>2100</td>
                                        <td>23.44</td>
                                        <td>CGST</td>
                                        <td>CGST</td>
                                        <td>20021</td>
                                        <td>may</td>
                                        <td>2021</td>
                                        <td><DeleteOutlined /></td>
                                    </tr>
                                    <tr>
                                        <td>STOVE-ELICA- 2 Burner</td>
                                        <td>2100</td>
                                        <td>23.44</td>
                                        <td>CGST</td>
                                        <td>CGST</td>
                                        <td>20021</td>
                                        <td>may</td>
                                        <td>2021</td>
                                        <td><DeleteOutlined /></td>
                                    </tr>
                                    <tr>
                                        <td>STOVE-ELICA- 2 Burner</td>
                                        <td>2100</td>
                                        <td>23.44</td>
                                        <td>CGST</td>
                                        <td>OFFER PRI</td>
                                        <td>20021</td>
                                        <td>may</td>
                                        <td>2021</td>
                                        <td><DeleteOutlined /></td>
                                    </tr>
                                    <tr>
                                        <td>STOVE-ELICA- 2 Burner</td>
                                        <td>2100</td>
                                        <td>23.44</td>
                                        <td>CGST</td>
                                        <td>OFFER PRI</td>
                                        <td>20021</td>
                                        <td>may</td>
                                        <td>2021</td>
                                        <td><DeleteOutlined /></td>
                                    </tr>
                                    <tr>
                                        <td>STOVE-ELICA- 2 Burner</td>
                                        <td>2100</td>
                                        <td>23.44</td>
                                        <td>CGST</td>
                                        <td>OFFER PRI</td>
                                        <td>20021</td>
                                        <td>may</td>
                                        <td>2021</td>
                                        <td><DeleteOutlined /></td>
                                    </tr>
                                    <tr>
                                        <td>STOVE-ELICA- 2 Burner</td>
                                        <td>2100</td>
                                        <td>23.44</td>
                                        <td>CGST</td>
                                        <td>CGST</td>
                                        <td>20021</td>
                                        <td>may</td>
                                        <td>2021</td>
                                        <td><DeleteOutlined /></td>
                                    </tr>
                                    <tr>
                                        <td>STOVE-ELICA- 2 Burner</td>
                                        <td>2100</td>
                                        <td>23.44</td>
                                        <td>CGST</td>
                                        <td>CGST</td>
                                        <td>20021</td>
                                        <td>may</td>
                                        <td>2021</td>
                                        <td><DeleteOutlined /></td>
                                    </tr>
                                    <tr>
                                        <td>STOVE-ELICA- 2 Burner</td>
                                        <td>2100</td>
                                        <td>23.44</td>
                                        <td>CGST</td>
                                        <td>CGST</td>
                                        <td>20021</td>
                                        <td>may</td>
                                        <td>2021</td>
                                        <td><DeleteOutlined /></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;