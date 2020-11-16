import React from "react";
import Navmenu from "./Navmenu.jsx";
import Main from "./Main.jsx";
import { Row, Col } from "antd";
import './home.less'

export default function Homeui(props) {
  return (
    <div className='home-wrap'>
      <Row>
        <Col span={4}>
          <Navmenu></Navmenu>
        </Col>
        <Col span={20}>
          <Main children={props.children}></Main>
        </Col>
      </Row>
    </div>
  );
}
