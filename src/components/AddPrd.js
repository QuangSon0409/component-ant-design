import { Button, Drawer, Form, Input, Layout } from "antd";
import React, { useState } from "react";
const { Content } = Layout;
const AddPrd = () => {
  const [open, setOpen] = useState(false);
  const onShowDrawer = () => {
    setOpen(true);
  };
  const onCloseDrawer = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    console.log("Submitted values:", values);
    // Gửi dữ liệu sản phẩm lên server hoặc xử lý theo nhu cầu
    setOpen(false);
  };

  return (
    <Layout>
      <Content style={{ padding: "50px" }}>
        <Button type="primary" onClick={onShowDrawer}>
          Tạo sản phẩm
        </Button>
        <Drawer
          title="Tạo sản phẩm mới"
          placement="right"
          onClose={onCloseDrawer}
          open={open}
        >
          <Form name="product-form" onFinish={onFinish}>
            <Form.Item label="Tên sản phẩm" name="productName">
              <Input />
            </Form.Item>
            <Form.Item label="Mô tả" name="productDescription">
              <Input.TextArea />
            </Form.Item>
            <Form.Item label="File Data" name="fileData"></Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tạo sản phẩm
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      </Content>
    </Layout>
  );
};

export default AddPrd;
