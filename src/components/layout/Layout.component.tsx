import Layout, { Content, Header, Footer } from "antd/lib/layout/layout";
import CustomerFooter from "components/footer/Footer.component";
import CustomerHeader from "components/header/Header.component";
import React from "react";

const CustomerLayout = (props: any) => {
    return (
        <div>
            <Layout>
                <Header>
                    <CustomerHeader />
                </Header>
                <Content>
                    <props.children />
                </Content>
                <Footer>
                    <CustomerFooter />
                </Footer>
            </Layout>
        </div>
    );
};

export default CustomerLayout;
