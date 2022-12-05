import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AboutMe from './AboutMe';
//import ChangePassword from './ChangePassword';
import MyOrders from './MyOrders';

const MyAccount = () => {
    return (
        <main>
            <div className="container-md">
                <hr className="my-10" />
                {/* Heading */}
                <div className="table-responsive">
                    <table className="table ">
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <div className="my-row" style={{ textAlign: "justify" }} lang="es">
                                        <Tabs>
                                            <TabList>
                                                <Tab>Mi Cuenta.</Tab>
                                                <Tab>Mis Pedidos.</Tab>
                                                {/*<Tab>Ajustes.</Tab>*/}
                                            </TabList>

                                            <TabPanel>
                                                <AboutMe />
                                            </TabPanel>
                                            <TabPanel>
                                                <MyOrders />
                                            </TabPanel>
                                            {/*<TabPanel>
                                                <ChangePassword />
                                            </TabPanel>*/}
                                        </Tabs>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default MyAccount;