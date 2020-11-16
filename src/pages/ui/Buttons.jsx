import React ,{useState}from "react";
import { Button, Card, Space ,Tooltip ,Radio } from "antd";
import { SearchOutlined ,PlusOutlined} from '@ant-design/icons';

export default function Buttons() {
  // console.log( new Date(1604883541812));
  // console.log( new Date("2012/02/09"));
  // console.log((1604883541812).valueOf());
  // console.log(new Date().valueOf());
  // console.log( new Date("2012/02/09").getTime());
  // console.log(valueOf(1604883541812));
    const [date,setDate]=useState({
        loading:true,
        value:'middle',
        ccc:2
    })
function handleClick(){
    // console.log(date.loading);
    setDate((date)=>{
        return {
            ...date,
            loading:!date.loading
        }
        
    })
}
function onChange (e){
    // console.log('radio checked', e.target.value);
    setDate({
      ...date,
      value: e.target.value,
      ccc:3
    });
    console.log(34535345345345);
  };
  return (
    <Space direction="vertical" style={{width:"100%"}} size={"middle"}>
      <Card title="基础按钮" bordered={false}>
        <Space size="middle">
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="link" disabled>Primary Button</Button>
        </Space>
      </Card>
      <Card title="图形按钮" bordered={false}>
        <Space size="middle">
        <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
          <Button shape='round' icon={<PlusOutlined />}>New Button</Button>
          <Button type="primary" icon={<SearchOutlined />} >Dashed Button</Button>
        </Space>
      </Card>
      <Card title="loading" bordered={false}>
        <Space size="middle">
        <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} loading={date.loading} disabled={date.loading} />
        </Tooltip>
        <Tooltip title="search">
            <Button  shape="circle" icon={<SearchOutlined />} loading={date.loading} />
        </Tooltip>
          <Button shape='round' icon={<PlusOutlined />} loading={date.loading}>New Button</Button>
          <Button type="primary" onClick={handleClick} >close</Button>
        </Space>
      </Card>
      <Card title="按钮尺寸" bordered={false}>
        <Space size="middle">
            <Radio.Group onChange={onChange} value={date.value}>
                <Radio value={'small'}>小</Radio>
                <Radio value={'middle'}>中</Radio>
                <Radio value={'large'}>大</Radio>
            </Radio.Group>
                <Button type="primary"   size={date.value}>Primary Button</Button>
                <Button  size={date.value}>Default Button</Button>
                <Button type="dashed" size={date.value}>Dashed Button</Button>
                <Button type="link" size={date.value} disabled>Primary Button</Button>
        </Space>
      </Card>
    </Space>
  );
}
