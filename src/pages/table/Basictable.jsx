import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Table ,Space ,Modal} from "antd";

export default function Basictable() {
  // id	用户名	性别	状态	爱好	生日	地址	早起时间
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  state.basictablelist.forEach((item) => {
    item.key = item._id;
  });
  console.log(state);

  const columns = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "用户名",
      dataIndex: "userName",
    },
    {
      title: "婚姻状态",
      dataIndex: "isMarried",
      render: (val) => {
        return val === 1 ? "已婚" : "未婚";
      },
    },
    {
      title: "性别",
      dataIndex: "sex",
      render: (val) => {
        return val === 1 ? "女" : "男";
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
  ];

  const handlechange = (e) => {
    // console.log(state.key);
    dispatch({
      type: "getbasictablelist",
      current: e.current,
    });
  };

//   const handlerow=(e)=>{
//       console.log(e);
//   }
      
  // console.log(state);

  useEffect(() => {
    dispatch({
      type: "getbasictablelist",
      current: 1,
    });
  }, [dispatch]);
  return (
    <div>
      <Space direction="vertical" style={{width:"100%"}}>
        <Card title="基础表格">
          <Table
            dataSource={state.basictablelist}
            columns={columns}
            pagination={{ total: 29 }}
            onChange={handlechange}
          />
        </Card>

        <Card title="删除表格">
          <Table
            dataSource={state.basictablelist}
            columns={columns}
            pagination={{ total: 29 }}
            rowSelection={{
              type: "radio",
              selectedRowKeys: state.key
            }}
            onChange={handlechange}
            onRow={(record)=> {
                return {
                    onClick:e=>{
                        console.log(record);
                        sessionStorage.setItem('basickey',record.key)
                        dispatch({
                            type:'changekey',
                            key:[record.key]
                        })
                        Modal.confirm({
                            title: 'Information',
                            content: (
                              <div>
                                <p>{record.userName}</p>
                                {/* <p>{record.key}</p>
                                <p>{state.key}</p> */}
                              </div>
                            ),
                            okText:"删除",
                            onOk:()=>{
                                // console.log(record._id);
                                dispatch({
                                    type:"deletebasicitem",
                                    id:record._id
                                })
                            },
                            cancelText:"取消",
                            // onCancel:()=>{
                            //     Modal.warning({
                            //         title:"警告",
                            //         content:(
                            //             <div>
                            //                 <p>23432423</p>
                            //             </div>
                            //         )
                            //     })
                            // }
                          })
                    }
                }
            }}
          />
        </Card>
      </Space>
    </div>
  );
}
