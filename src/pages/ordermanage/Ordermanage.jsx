import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Select, DatePicker, Table, Space, message, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormat } from '../citymanage/useFormat'
import { finishOrder1 } from '@/utils/api'
const Order = () => {

  const formatDate = useFormat();
  const { Option } = Select;
  const [form] = Form.useForm();
  // const [form1] = Form.useForm();
  const [, forceUpdate] = useState();
  const [fromValue, setfromValue] = useState({

  })
  const dispatch = useDispatch();
  const orderStore = useSelector(state => state)
  // const cityList = orderStore.citys;
  const orderList = orderStore.orderList;
  const newOrderList = [];
  orderList.forEach(item => {
    item['key'] = item['_id']
    newOrderList.push(item)
  })
  const orderTotal = orderStore.orderTotal;

  const columns = [
    {
      title: '订单编号',
      dataIndex: 'order_sn',
      key: 'order_sn',
    },
    {
      title: '车辆编号',
      dataIndex: 'bike_sn',
      key: 'bike_sn',
    },
    {
      title: '用户名',
      dataIndex: 'user_name',
      key: 'user_name',
    },
    {
      title: '手机号',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: '里程',
      dataIndex: 'distance',
      key: 'distance',
    },
    {
      title: '行驶时长',
      render: () => '4000'
      // dataIndex: 'handleTime',
      // key: 'handleTime',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: val => val === 1 ? '进行中' : '结束进程'
    },
    {
      title: '开始时间',
      dataIndex: 'start_time',
      key: 'start_time',
      render: val => formatDate(val)
    },
    {
      title: '结束时间',
      dataIndex: 'end_time',
      key: 'end_time',
      render: val => {
        if (val) {
          return formatDate(val)
        } else {
          return ' '
        }
      }
    },
    {
      title: '订单金额',
      dataIndex: 'total_fee',
      key: 'total_fee',
    },
    {
      title: '实付金额',
      dataIndex: 'user_pay',
      key: 'user_pay',
    },
  ];

  useEffect(() => {
    dispatch({
      type: 'getCity'
    })
    dispatch({
      type: 'getOrderList',
      page: 1,
      page_size: 20
    })
    forceUpdate({});
  }, [dispatch]);

  const onFinish = FlieValues => {
    for (let key in FlieValues) {
      if (!FlieValues[key]) {
        delete FlieValues[key]
      }
      if (Object.prototype.toString.call(FlieValues[key]).slice(8, -1) === 'Object') {
        FlieValues[key] = FlieValues[key].valueOf()
      }
      setfromValue(() => {
        return FlieValues
      })
    }

    dispatch({
      type: 'getOrderList',
      page: 1,
      page_size: 20,
      ...FlieValues
    })

  };

  const reset = () => {
    form.resetFields();
    dispatch({
      type: 'getOrderList',
      page: 1,
      page_size: 20,
    })
  }

  const changePage = (page) => {
    console.log(fromValue)
    dispatch({
      type: 'getOrderList',
      page: page.current,
      page_size: 20,
      ...fromValue
    })
  }

  // 模态框
  const [visible, setvisible] = useState({
    visible: false
  })

  const showModal = () => {
    setvisible({
      visible: true,
    });
  };

 
  const handleCancel = () => {
    setvisible({
      visible: false,
    });
  };



  // 结束订单

  const [select, setSelect] = useState({
    selectedRowKeys: [],
    selectedRow: []
  })

  const finishOrder = async () => {
    const [id] = select.selectedRowKeys;
    const end_time = new Date().getTime();
    const res = await finishOrder1({ id, end_time })
    console.log(res)
    if (res.status === 0) {
      message.info('进程结束成功')
    } else {
      message.info('进程结束失败')
    }
    setvisible({
      visible: false,
    });
    // form1.resetFields()

    dispatch({
      type: 'getOrderList',
      page: 1,
      page_size: 20,
    })
  }

  const selectRow = (key, val) => {
   
    setSelect(() => {
      return {
        selectedRowKeys: key,
        selectedRow: val
      }
    })
  }



  return (
    <div>
      <Card>
        <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} >
          {/* <Form.Item
            name="city"
            label="城市"
          >
            <Select style={{ width: 80 }} placeholder='全部'>
              { cityList.map(item=> {
                return(
                  <Option key={item.id} value={item.nm}>{item.nm}</Option>
                )
              })}
            </Select>
          </Form.Item> */}
          <Form.Item
            name="start_time"
            label='订单时间'
          >
            <DatePicker showTime placeholder="" style={{ width: 180 }} />
          </Form.Item>

          <Form.Item
            name="end_time"
          >
            <DatePicker showTime placeholder="" style={{ width: 180 }} />
          </Form.Item>

          <Form.Item
            name="status"
            label="订单状态"
          >
            <Select style={{ width: 80 }} placeholder='全部'>
              <Option value="all">全部</Option>
              <Option value="1">进行中</Option>
              <Option value="2">结束进程</Option>
            </Select>
          </Form.Item>

          <Form.Item shouldUpdate={true}>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
              >查询</Button>
            )}
          </Form.Item>

          <Form.Item shouldUpdate={true}>
            {() => (
              <Button

                htmlType='reset'
                onClick={reset}
              >重置</Button>
            )}
          </Form.Item>
        </Form>
      </Card>

      <Card>
        <Space>
          <Button type='primary'>订单详情</Button>
          <Button type='primary' onClick={showModal}>结束订单</Button>
        </Space>

        <Modal
          title="结束订单"
          visible={visible.visible}
          onOk={finishOrder}
          onCancel={handleCancel}
        >
          <Form  labelCol={{span:4}} wrapperCol={{span:8}}>
            <Form.Item
              name="start_time"
              label='订单编号'
            >
              <input disabled placeholder={ select.selectedRow.length ? select.selectedRow[0]['order_sn'] :''}/>
             
            </Form.Item>

            <Form.Item
              name="end_time"
              label='车辆编号'
            >
            <input disabled placeholder={ select.selectedRow.length ?select.selectedRow[0]['bike_sn']: ''}/>

            </Form.Item>

            <Form.Item
              name="status"
              label="用户名"
            >
             <input disabled placeholder={ select.selectedRow.length ?select.selectedRow[0]['user_name']:''}/>

            </Form.Item>

            <Form.Item
              name="start_time"
              label='开始时间'
            >
             <input disabled placeholder={select.selectedRow.length ? formatDate(select.selectedRow[0]['start_time']):''}/>
            </Form.Item>
          </Form>
        </Modal>


        <Table style={{ marginTop: 20 }} rowSelection={{ type: 'radio', onChange: (k, v) => selectRow(k, v) }} dataSource={newOrderList} columns={columns} pagination={{ total: orderTotal, pageSize: 20 }} onChange={changePage} />;
      </Card>
    </div>
  )
}

export default Order
