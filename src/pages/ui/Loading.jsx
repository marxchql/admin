import React from "react";
import { Space, Card, Spin,Alert } from "antd";
import { LoadingOutlined } from '@ant-design/icons';


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

export default function Loading() {
  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Card title="基本加载">
        <Space size={"large"}>
          <Spin />
          <Spin size={"small"} />
          <Spin size={"large"} />
          <Spin indicator={antIcon} />
        </Space>
      </Card>


      <Card title="内容遮罩">
        <Space size={"large"} direction="vertical" style={{width:"100%"}}>
        <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />

          <Spin
           tip="marxchql"   //控制自定义内容
        //   spinning={false}   //控制是不是加载
        indicator={antIcon}
          >
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
          </Spin>
        </Space>
      </Card>
    </Space>
  );
}
