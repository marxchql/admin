import { Space, Card, Form, Button, Select ,Modal} from "antd";
import React ,{useState} from "react";


export default function Citymanage() {
  const [ date,setDate ] = useState({
    previewVisible:false
  })
  const onFinish = (values) => {
    console.log("Finish:", values);
    // 遍历数组对象  并根据values 的数值  是不true还是false 进行判断 是否删除
    // 如果对象的兼职中的键  是真或者是假的话 就将假的键值对进行删除
    // for ( let key in values){
    //   if(!values[key]){
    //     delete values[key]
    //   }

// 当判断表单中的请求提交的数据对象中的键值对不完全的时候 不进行拼接数据请求的参数  所以要将上面的操作  将undefined的数据类型进行删除
// 当表单中的数据类型全部为对象或者为真的时候 就行遍历我的数据   
// 如果表单数据的类型是引用类型   数组函数 对象的形式  就需要用到深拷贝或者递归的形式
      // if(Object.prototype.toString.call(values).slice(8,-1)==="Object"){
      //     values[key]=values[key].valueOf()
      // }


      // dispatch({
      //   type:"getlist",    //  当做表示 用作删除列表中的元素 之后 重新进行获取数据列表 重新发送请求列表数据
      //   page:1,                //  发送后端的字段  page字段 代表 我需要的列表的页数
      //   pagesize:20,     //  发送给后端的字段 是代表前端需要的一页的数据列表的数量
      //   ...values
      // })
    // }
    setDate(()=>{
      return {
        ...date,
        previewVisible:true
      }
    })
  };
  const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 12 },
  };
  const [form] = Form.useForm();
  const { Option } = Select;
  const handleOk =()=>{
    // console.log(form.getFieldValue())
    form.resetFields()
    
    setDate(()=>{
      return {
        ...date,
        previewVisible:false
      }
    })
  }

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Card title="内联登录">
        <Form
          {...layout}
          form={form}
          name="horizontal_login"
          layout="inline"
          onFinish={onFinish}
          initialValues={
            {
              // city:"Jack"
            }
          }
        >
          <Form.Item name="city" label="城市">
            <Select
              style={{ width: 100 }}
              placeholder="全部"
              allowClear={true}
              //   onChange={handleChange}
            >
              <Option value="all">全部</Option>
              <Option value="beijing">北京</Option>
              <Option value="tianjin">天津</Option>
              <Option value="shagnhai">上海</Option>
            </Select>
          </Form.Item>
          <Form.Item name="usevehiclemode" label="用车模式">
            <Select
              style={{ width: 120 }}
              placeholder="全部"
              //   onChange={handleChange}
            >
              <Option value="all">全部</Option>
              <Option value="point">指定停车点模式</Option>
              <Option value="stop">禁停区模式</Option>
            </Select>
          </Form.Item>
          <Form.Item name="servicemode" label="营运模式">
            <Select
              style={{ width: 100 }}
              placeholder="全部"
              //   onChange={handleChange}
            >
              <Option value="all">全部</Option>
              <Option value="self">自营</Option>
              <Option value="join">加盟</Option>
            </Select>
          </Form.Item>
          <Form.Item name="joinmode" label="加盟商授权状态">
            <Select
              style={{ width: 110 }}
              placeholder="全部"
              //   onChange={handleChange}
            >
              <Option value="all">全部</Option>
              <Option value="hasjoin">已授权</Option>
              <Option value="hasntjoin">未授权</Option>
            </Select>
          </Form.Item>

          <Form.Item shouldUpdate={true}>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                // disabled={
                //   !form.isFieldsTouched(true) ||
                //   form.getFieldsError().filter(({ errors }) => errors.length)
                //     .length
                // }
              >
                查询
              </Button>
            )}
          </Form.Item>
          {/* <Form.Item shouldUpdate={true}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              查询
            </Button>
          </Form.Item> */}
          <Modal
              visible={date.previewVisible}
              footer={null}
              onCancel={handleOk}
             okText="yes"
              // onCancel={handleCancel}
              title="header"
              style={{top:"30px"}}
            >
              <div>{form.getFieldValue().city}</div>
            </Modal>
          <Form.Item shouldUpdate={true}>
            <Button>重置</Button>
          </Form.Item>
        </Form>
      </Card>

      <Card title="城市管理">
          
      </Card>
    </Space>
  );
}
