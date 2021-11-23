import React from 'react';

import {withRouter} from "react-router-dom";
import { Space,Button } from "antd";
import * as Style from "components/header/style";

function Header() {
    return (
        <Style.HeaderContainer>
            <Space>
                <Style.Logo>LOGO</Style.Logo>
            </Space>
            <div>
                <Space>
                    <Button type="primary">
                        LOG OUT
                    </Button>
                </Space>
            </div>
        </Style.HeaderContainer>
    );
}

export default withRouter(Header);
