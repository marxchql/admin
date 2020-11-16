import React, { useEffect, useState } from "react";
import { Button, Card, Space, Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Modal from "antd/lib/modal/Modal";

export default function Hightable() {
  const [visible, setVisible] = useState(false);
  const state = useSelector((state) => state);
  state.hightablelist.map((item) => {
    return (item.key = item._id);
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "gethightablelist",
    });
  }, [dispatch]);
  // const handlechange=()=>{

  // }
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      fixed: "left",
    },
    {
      title: "用户名",
      dataIndex: "username",
    },
    {
      title: "年龄",
      dataIndex: "age",
      sorter: {
        compare: (a, b) => a.age - b.age,
        multiple: 3,
      },
    },

    {
      title: "婚姻状态",
      dataIndex: "isMarried1",
      render: (val) => {
        return val === 1 ? "已婚" : "未婚";
      },
      sorter: {
        compare: (a, b) => a.isMarried1 - b.isMarried1,
        multiple: 2,
      },
    },
    {
      title: "性别",
      dataIndex: "sex",
      render: (val) => {
        return val === 1 ? "女" : "男";
      },
      sorter: {
        compare: (a, b) => a.sex - b.sex,
        multiple: 1,
      },
    },
    {
      title: "状态",
      dataIndex: "state",
      //   1：咸鱼一条	2：风华浪子	 3：北大才子 4：百度FE 5：创业者
      render: (val) => {
        switch (val) {
          case 1:
            return "咸鱼一条";
          case 2:
            return "风华浪子";
          case 3:
            return "北大才子";
          case 4:
            return "百度FE";
          case 5:
            return "创业者";

          default:
            break;
        }
      },
    },
    {
      title: "爱好",
      dataIndex: "interest",
      //   爱好： 1：游泳2：打篮球	3：踢足球	4：跑步5：爬山6：骑行7：桌球8：麦霸
      render: (val) => {
        switch (val) {
          case 1:
            return "游泳";
          case 2:
            return "打篮球";
          case 3:
            return "踢足球";
          case 4:
            return "跑步";
          case 5:
            return "爬山";
          case 6:
            return "骑行";
          case 7:
            return "桌球";
          case 8:
            return "喝茶";

          default:
            break;
        }
      },
    },
    {
      title: "生日",
      dataIndex: "birthday",
    },
    {
      title: "地址",
      dataIndex: "address",
    },
    {
      title: "早起时间",
      dataIndex: "time",
    },
    {
      title: "删除",
      dataIndex: "delete",
      fixed: "right",
      render: () => {
        return (
          <Button
            type="primary"
            danger
            onClick={() => {
              setVisible(() => {
                return true;
              });
            }}
          >
            删除
          </Button>
        );
      },
    },
  ];
  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Card title="高级列表">
        <Table
          bordered={true}
          dataSource={state.hightablelist}
          columns={columns}
          pagination={false}
          scroll={{ y: 300, x: 1800 }}
          // onChange={handlechange}
          title={() => <div>高级表格表头</div>}
        />
      </Card>
      <Modal
        title="Basic Modal"
        visible={visible}
        
        // style={{width:"200px"}}
        onOk={() => {
          console.log(visible);
          setVisible(() => {
            return false;
          });
        }}
      >
        <p>确认删除？</p>
      </Modal>
    </Space>
  );
}
