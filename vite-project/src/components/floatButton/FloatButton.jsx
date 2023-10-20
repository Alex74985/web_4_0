import {CommentOutlined, CustomerServiceOutlined, WindowsOutlined} from '@ant-design/icons';
import React from 'react';
import { FloatButton } from 'antd';
const FloatButtonEdit = () => (
    <>
        <FloatButton.Group
            trigger="click"
            type="primary"
            style={{
                right: 24,
            }}
            icon={<CustomerServiceOutlined />}
        >
            <FloatButton icon={<CommentOutlined />} />
            <FloatButton icon={<WindowsOutlined />} />
        </FloatButton.Group>
    </>
);
export default FloatButtonEdit;