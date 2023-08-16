import { Button, Modal, Result } from "antd";
import { useContext } from "react";
import { showFormContext } from "./Sliding";

const SignUpSuccess = (props) => {
  const { setShowSignUp } = useContext(showFormContext);
  const onHandleCancel = () => {
    props.onClose();
    setShowSignUp(false);
  };
  return (
    <Modal
      visible="true"
      onCancel={props.onClose}
      footer={null}
      destroyOnClose={true}
    >
      <Result
        status="success"
        title="Successfully Sign Up SCC BOT"
        subTitle="Please wait 1-5 minute before continuing"
        extra={[
          <Button type="primary" key="console" onClick={onHandleCancel}>
            Sign In
          </Button>,
        ]}
      />
    </Modal>
  );
};

export default SignUpSuccess;
