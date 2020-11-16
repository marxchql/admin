import React from "react";
import { Button, Card, Space, notification, Divider } from "antd";



export default function Notification() {
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        duration: 1,  //控制疫苗后关闭
    });
    
  };




  const [api, contextHolder] = notification.useNotification();
  
  const openNotification = (placement) => {
    api.info({
      message: `Notification ${placement}`,
      description: "56345435343543",
      placement,
      duration: 1,
    });
  };
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={"middle"}>
      <Card title="基础按钮" bordered={false}>
        <Space size="middle">
          <Button onClick={() => openNotificationWithIcon("success")}>
            Success
          </Button>
          <Button onClick={() => openNotificationWithIcon("info")}>Info</Button>
          <Button onClick={() => openNotificationWithIcon("warning")}>
            Warning
          </Button>
          <Button onClick={() => openNotificationWithIcon("error")}>
            Error
          </Button>
        </Space>
      </Card>

      <Card title="不同位置弹出" bordered={false}>
        <Space size="middle">
          {contextHolder}
          <Space>
            <Button type="primary" onClick={() => openNotification("topLeft")}>
              topLeft
            </Button>
            <Button type="primary" onClick={() => openNotification("topRight")}>
              topRight
            </Button>
          </Space>
          <Divider />
          <Space>
            <Button
              type="primary"
              onClick={() => openNotification("bottomLeft")}
            >
              bottomLeft
            </Button>
            <Button
              type="primary"
              onClick={() => openNotification("bottomRight")}
            >
              bottomRight
            </Button>
          </Space>
        </Space>
      </Card>
    </Space>
  );
}
