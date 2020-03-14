import React, { Component } from 'react';
import { Form, Input, Button, Select, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

export default class ChangeUserInfo extends Component {
    state = {
        loading: false,
    }

    tailLayout = {
        wrapperCol: { offset: 10, span: 16 },
    }
    
    onFinish = values => {
        console.log('Success:', values);
        // 向后端发送修改数据的请求
    }
    
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    }

    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                imageUrl,
                loading: false,
                }),
            );
        }
    }

    beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }

    render() {
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className='ant-upload-text'>Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <Form
                {...this.props.layout}
                name='basic'
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    name='displayName'
                    label='姓名'
                    rules={[{ required: true, message: '不能为空！', },]}
                >
                    <Input placeholder='不能为空！' defaultValue='张山' />
                </Form.Item>
                <Form.Item
                    name='phone'
                    label='联系方式'
                    rules={[{ required: true, message: '不能为空！', len: '11' },]}
                >
                    <Input placeholder='不能为空！' defaultValue='111' />
                </Form.Item>
                <Form.Item
                    name='email'
                    label='邮箱'
                    rules={[{ required: true, message: '不能为空！', },]}
                >
                    <Input placeholder='不能为空！' defaultValue='张山' />
                </Form.Item>
                <Form.Item
                    name='sex'
                    label='性别'
                    hasFeedback
                    rules={[{ required: true, message: '不能为空！', },]}
                >
                    <Select placeholder='不能为空！' >
                        <Option value='man'>男</Option>
                        <Option value='woman'>女</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='age'
                    label='年龄'
                    rules={[{ required: true, message: '不能为空！', },]}
                >
                    <Input placeholder='不能为空！' defaultValue='张山' />
                </Form.Item>
                <Form.Item
                    name='avatar'
                    label='头像'
                    valuePropName='fileList'
                    getValueFromEvent={this.normFile}
                >
                    <Upload
                        name='avatar'
                        listType='picture-card'
                        className='avatar-uploader'
                        showUploadList={false}
                        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                        beforeUpload={this.beforeUpload}
                        onChange={this.handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt='avatar' style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </Form.Item>
                <Form.Item {...this.tailLayout}>
                    <Button type='primary' htmlType='submit'>
                        确认
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
