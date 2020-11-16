import React, { useState,useEffect } from "react";
import { Row, Col, Button } from "antd";
import {useSelector,useDispatch} from 'react-redux'

export default function Header() {
  const state =useSelector(state=>state)
  // console.log(state);
  const dispatch=useDispatch()
  const [date,setDate] = useState({
    username: "Marxchql",
    time:new Date().toLocaleString()
  });
  useEffect(()=>{
    dispatch({
      type:"getweather"
    })
   const timer= setInterval(() => {
        setDate((date)=>{
         return {
          ...date,
          time:new Date().toLocaleString()
         }
      })
    }, 1000);
    return ()=>{
        clearInterval(timer)
    }
  },[dispatch])
  return (
    <header>
      <Row className="header-top" justify="end">
        <Col>
          <span style={{ marginRight: "20px" }}>欢迎！{date.username}</span>
          <Button type="primary">Login Out</Button>
        </Col>
      </Row>
      <Row className="header-bottom">
        <Col span={5} className="header-title">
          { state.pageTitle}
        </Col>
        <Col span={19} className="time">
          <span>{state.city}</span>
          <span style={{margin :'0 20px'}}>{state.wea}</span>
          {date.time}
        </Col>
      </Row>

    </header>
  );
}
