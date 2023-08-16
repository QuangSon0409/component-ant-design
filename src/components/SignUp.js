// SignUp.js
import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import SignUpSuccess from "./SignUpSuccess";

const SignUp = () => {
  const { Title } = Typography;
  const [showSignUpSuccess, setShowSignUpSuccess] = useState(false);

  const setShow = () => {
    setShowSignUpSuccess(false);
  };

  const onFinish = (value) => {
    setShowSignUpSuccess(true);
    console.log(value);
  };

  return (
    <>
      {showSignUpSuccess && <SignUpSuccess onClose={setShow} />}
      <Form style={{ textAlign: "center" }} name="form" onFinish={onFinish}>
        <Title level={2} className="text-center">
          SignUp
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
        <Form.Item
          label="confirmPassword"
          name="confirmPassword"
          dependencies={["password"]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[
            { required: true, message: "Please input your confirmPassword!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
          style={{ marginLeft: 50, marginRight: 50 }}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item style={{ marginLeft: 50, marginRight: 50 }}>
          <Button
            type="primary"
            block
            shape="round"
            size="large"
            icon={<UserAddOutlined />}
            htmlType="submit"
          >
            SignUp
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUp;
