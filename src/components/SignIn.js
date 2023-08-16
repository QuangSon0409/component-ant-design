// SignIn.js
import React from "react";
import { Form, Input, Button, Typography, Checkbox } from "antd";
import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { Title } = Typography;
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <Form name="basic" style={{ textAlign: "center" }} onFinish={onFinish}>
      <Title level={2} className="text-center">
        Sign In
      </Title>
      <div className="social">
        <GoogleOutlined className="social-google" />
        <FacebookOutlined className="social-fb" />
        <GithubOutlined className="social-git" />
      </div>
      <Form.Item
        label="Email"
        name="email"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={[
          { required: true, message: "Please input your username!" },
          { type: "email", message: "Please email is valid" },
        ]}
        style={{ marginLeft: 50, marginRight: 50 }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={[
          { required: true, message: "Please input your password!" },
          { min: 6, message: "Please must be minium 6 characters" },
        ]}
        style={{ marginLeft: 50, marginRight: 50 }}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Form.Item valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" to="/">
          Forgot password?
        </Link>
      </Form.Item>
      <Form.Item style={{ marginLeft: 50, marginRight: 50 }}>
        <Button
          type="primary"
          block
          shape="round"
          size="large"
          icon={<LoginOutlined />}
          htmlType="submit"
        >
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
