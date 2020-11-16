import React, { useState } from "react";
import { Button, Space, Modal, Card } from "antd";

export default function Modals() {
  const [state, setState] = useState({
    visible: false,
  });
  function showModal() {
    setState({
      visible: true,
    });
  }

  function handleOk(e) {
    setState({
      visible: false,
    });
  }

  function handleCancel(e) {
    setState({
      visible: false,
    });
  }

  function info() {
    Modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  function success() {
    Modal.success({
      content: "some messages...some messages...",
    });
  }

  function error() {
    Modal.error({
      title: "This is an error message",
      content: "some messages...some messages...",
    });
  }

  function warning() {
    Modal.warning({
      title: "This is a warning message",
      content: "some messages...some messages...",
    });
  }
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Card title="基础按钮" bordered={false}>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title="请确认"
          visible={state.visible}
          onOk={handleOk}
          onCancel={handleCancel}
          cancelText="取消"
          okText="确认"
          mask
          // modalRender={modal => <Draggable disabled={true}>{modal}</Draggable>}
          // centered
          //  style={{ top:'20px'}}
        >
          <p>Are you sure? </p>
        </Modal>
      </Card>

      <Card title="信息确认框" bordered={false}>
        <Space>
          <Button onClick={info}>Info</Button>
          <Button onClick={success}>Success</Button>
          <Button onClick={error}>Error</Button>
          <Button onClick={warning}>Warning</Button>
        </Space>
      </Card>
    </Space>
  );
}
