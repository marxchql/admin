import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Select, Table, Space, Typography, Popconfirm, message, Modal, Input, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormat } from './useFormat.js'
import { addCity } from '@/utils/api.js'
const City = () => {
  const formatDate = useFormat();
  const { Link } = Typography;
  const { Option } = Select;
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  const [, forceUpdate] = useState();
  // const [initialValues] = useState({
  //   city: 'all', modal: 'all', server: 'all', Stauts: 'all'
  // })
  const dispatch = useDispatch();
  const columns = [
    {
      title: '城市名称',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: '城市管理员',
      dataIndex: 'admin',
      key: 'admin',
    },
    {
      title: '用车模式',
      dataIndex: 'useCar',
      key: 'useCar',
      render: val => val === '1' ? '停车场' : '禁停区'
    },
    {
      title: '营运模式',
      dataIndex: 'operating',
      key: 'operating',
      render: val => val === '1' ? '自营 ' : '加盟'
    },
    {
      title: '城市开放时间',
      dataIndex: 'openTime',
      key: 'openTime',
      render: val => formatDate(+val)
    },
    {
      title: '操作时间',
      dataIndex: 'handleTime',
      key: 'handleTime',
      render: val => formatDate(+val)
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) =>
        2 >= 1 ? (
          <Popconfirm okText='确定' cancelText='取消' title="确定删除吗?" onConfirm={() => deleteById(record.key)}>
            <Link>删除</Link>
          </Popconfirm>
        ) : null,
    },
  ];
  const cityStore = useSelector(state => state)
  const cityList = cityStore.cityList;
  const cities = cityStore.citys;

  const newArr = [];
  cityList.forEach(item => {
    item['key'] = item['_id']
    newArr.push(item)
  })

  const onFinish = FlieValus => {
    dispatch({
      type: 'getCityList',
      params: FlieValus
    });

  };
  useEffect(() => {
    // console.log((new Date()).valueOf());
    // console.log((new Date()).getTime());
    dispatch({
      type: 'getCityList',
      params: {}
    });
    dispatch({
      type: 'getCity',
    })
    forceUpdate({});
  }, [dispatch]);

  const reset = () => {
    dispatch({
      type: 'getCityList',
      params: {}
    })
    form.resetFields();

  }

  const deleteById = (id) => {
    dispatch({
      type: 'deleteCityById',
      params: id
    })
    const opreaResult = cityStore.result;
    console.log(opreaResult)
    if (opreaResult === 0) {
      message.info('删除成功');
      dispatch({
        type: 'getCityList',
        params: {}
      })
    } else {
      message.info('删除失败');
    }
  }

  // 模态框
  const [visible, setVisible] = useState({
    visible: false,
  })

  const showDialog = () => {
    setVisible({
      visible: true,
    });
  };

  const handleOk = async () => {
    const Value = form1.getFieldsValue()
    const FieldValue = {
      ...Value,
      'openTime': Value['openTime'].valueOf(),
      'handleTime': new Date().getTime()
    }

    const res = await addCity(FieldValue)
    if (res.status === '0') {
      message.info('添加成功')
    } else {
      message.info(res.msg)
    }
    form1.resetFields();
    setVisible({
      visible: false,
    });

    dispatch({
      type: 'getCityList',
      params: {}
    })
  };

  const handleCancel = () => {
    setVisible({
      visible: false,
    });
  };


  return (
    <div>
      <Space direction='vertical' style={{ width: '100%' }}>
        <Card>
          <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
            <Form.Item
              name="city"
              label="城市"
            >
              <Select style={{ width: 100 }} placeholder='全部'>
                {cities.map(item => {
                  return (
                    <Option key={item.id} value={item.nm}>{item.nm}</Option>
                  )
                })}

              </Select>
            </Form.Item>

            <Form.Item
              name="useCar"
              label="用车模式"
            >
              <Select style={{ width: 120 }} placeholder='全部'>
                <Option value="1">指定停车区模式</Option>
                <Option value="2">禁停区模式</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="operating"
              label="营运模式"
            >
              <Select style={{ width: 80 }} placeholder='全部'>
                <Option value="1">自营</Option>
                <Option value="2">加盟</Option>
              </Select>
            </Form.Item>


            {/* <Form.Item
              name="Stauts"
              label="加盟商授权状态"
            >
              <Select style={{ width: 100 }} placeholder='全部'>
                <Option value="on">已授权</Option>
                <Option value="off">未授权</Option>
              </Select>
            </Form.Item> */}

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
                  type="primary"
                  htmlType='reset'
                  onClick={reset}
                >重置</Button>
              )}
            </Form.Item>
          </Form>
        </Card>
        <Card>
          <Button onClick={showDialog} type='primary' style={{ marginBottom: '20px' }}>开通城市</Button >

          <Modal
            title="开通城市"
            visible={visible.visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form form={form1} labelCol={{ span: 4 }} wrapperCol={{ span: 6 }}>
              <Form.Item
                name="city"
                label="城市"
              >
                <Select style={{ width: 100 }} placeholder='全部'>
                  {cities.map(item => {
                    return (
                      <Option key={item.id} value={item.nm}>{item.nm}</Option>
                    )
                  })}

                </Select>
              </Form.Item>

              <Form.Item
                name="useCar"
                label="用车模式"
              >
                <Select style={{ width: 120 }} placeholder='全部'>
                  <Option value="1">指定停车区模式</Option>
                  <Option value="2">禁停区模式</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="operating"
                label="营运模式"
              >
                <Select style={{ width: 80 }} placeholder='全部'>
                  <Option value="1">自营</Option>
                  <Option value="2">加盟</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="城市管理员"
                name="admin"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='开发时间'
                name='openTime'>
                <DatePicker showTime />
              </Form.Item>

            </Form>
          </Modal>


          <Table bordered dataSource={newArr} columns={columns} pagination />
        </Card>
      </Space>
    </div>
  )
}

export default City
